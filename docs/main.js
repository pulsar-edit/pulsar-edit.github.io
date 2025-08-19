window.onload = () => {
  // Convert any dates that may be shown on page to match the date in the locale
  // that the page is being viewed in.
  const datesToConvert = document.querySelectorAll("time[datetime]");

  let formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'full' });

  for (const item of datesToConvert) {
    let properDate = new Date(item.getAttribute('datetime'));
    let title = formatter.format(properDate);
    item.setAttribute('title', title);
    item.innerText = properDate.toLocaleDateString();
  }
};

function debounce (fn, delay) {
  let timeout = null;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay, ...args);
  };
}

const ThemeSwitcher = {
  DEFAULT_THEME_PREFERENCE: "auto",
  MEDIA: window.matchMedia(`(prefers-color-scheme: light)`),
  setup () {
    this.root = document.documentElement;
    this.button = document.getElementById('theme-switcher');
    this.metaScheme = document.getElementById('meta-scheme');

    // We want to:
    //  - listen for clicks on this button to switch the theme
    //  - change this theme according to the OS prefferred theme
    //  - change this theme according to any stored preferences on this site
    //  - listen for OS preferred theme changing
    let preference = this.findSavedPreference() ?? this.DEFAULT_THEME_PREFERENCE;
    this.setPreference(preference);
    this.setupListeners();
  },

  findSavedPreference() {
    return localStorage.getItem("preferred-theme");
  },

  findOSTheme () {
    return this.MEDIA.matches ? "light" : "dark";
  },

  setupListeners () {
    this.button.addEventListener('click', this.onButtonClick.bind(this));
    this.MEDIA.addEventListener('change', () => {
      let newTheme = event.matches ? "light" : "dark";
      this.setTheme(newTheme);
    });
  },

  setTheme (newTheme) {
    if (this.root.dataset.theme === newTheme) return;
    this.root.dataset.theme = newTheme;

    this.metaScheme.setAttribute(
      "content",
      newTheme
    );
  },

  setPreference (newPreference) {
    localStorage.setItem("preferred-theme", newPreference);
    if (this.root.dataset.themeSetting === newPreference) return;
    this.root.dataset.themeSetting = newPreference;
    let theme = newPreference === 'auto' ? this.findOSTheme() : newPreference;
    this.setTheme(theme);
  },

  onButtonClick () {
    let currentValue = this.root.dataset.themeSetting;
    let newValue;

    switch (currentValue) {
      case 'dark':
        newValue = 'light';
        break;
      case 'light':
        newValue = 'auto';
        break;
      case 'auto':
        newValue = 'dark';
        break;
      default:
        newValue = this.DEFAULT_THEME_PREFERENCE;
    }
    this.setPreference(newValue);
  }
};

class AutoTOC {
  constructor ({ minHeadings = 2, visibleOnly = true } = {}) {
    this.main = document.querySelector('main');
    this.target = document.querySelector('.sidebar__toc');
    if (!this.target) return;
    this.visibleOnly = visibleOnly;
    this.minHeadings = minHeadings;
    this.rebuildTOC();
  }

  rebuildTOC () {
    // Only consider headings with IDs.
    let headings = Array.from(this.main.querySelectorAll(':is(h2, h3, h4, h5, h6)[id]'));
    // If there are a trivial number of headings on the page, don't bother.
    if (headings.length < this.minHeadings) {
      return;
    }
    this.map = new Map();
    this.root = { children: [] }
    this.rootLevel = this.levelForTag(headings[0]);
    this.buildTOC(this.root, headings, this.rootLevel);
    if (this.node) {
      this.node.parentNode?.removeChild(this.node);
    }
    this.node = this.renderTOC();
    this.target.appendChild(this.node);
  }

  isVisible (element) {
    return element.offsetHeight !== 0;
  }

  buildTOC (root, headings, baseLevel) {
    for (let [index, heading] of headings.entries()) {
      if (this.visibleOnly && !this.isVisible(heading)) {
        continue;
      }
      let bundle = this.bundleForTag(heading, index);
      this.map.set(index, bundle);
      let { level } = bundle;
      if (level === baseLevel) {
        root.children.push(bundle);
      } else if (level < baseLevel) {
        continue;
      } else {
        let parent = this.findParentHeadingBundle(level, index);
        if (parent) {
          parent.children.push(bundle);
        } else {
        }
      }
    }
  }

  renderTOC () {
    let html = this.renderList(this.root);
    let fragment = document.createRange().createContextualFragment(html);
    return fragment.children[0];
  }

  renderList (list) {
    let items = list.children.map(child => this.renderListItem(child));
    return `
      <ul>
        ${items.join('\n')}
      </ul>
    `;
  }

  renderListItem (item) {
    let list = '';
    if (item.children.length) {
      list = this.renderList(item);
    }
    return `
      <li>
        <a data-level="${item.level - this.rootLevel}" title="${item.name}" href="#${item.id}">${item.name}</a>
        ${list}
      </li>
    `;
  }

  findParentHeadingBundle(level, index) {
    let targetLevel = level - 1;
    for (let current = index - 1; current >= 0; current--) {
      let bundle = this.map.get(current);
      if (bundle?.level !== targetLevel) continue;
      return bundle;
    }
  }

  bundleForTag (node, index) {
    let name = node.dataset.name || node.innerText
    return { node, name, id: node.id, index, level: this.levelForTag(node), children: [] };
  }

  levelForTag (node) {
    return Number(node.tagName.substring(1));
  }
}

// Highlight the sidebar navigation item that corresponds to the section that
// the user is reading.
class HeadingObserver {
  constructor({ topMargin = 0, manageHistoryEntries = true, visibleOnly = false }) {
    let container = document.querySelector('.sidebar__toc');
    if (!container) return;

    this.container = container;
    this.sidebar = document.querySelector('.sidebar');
    this.activeId = null;
    this.topMargin = topMargin;
    this.manageHistoryEntries = manageHistoryEntries;
    this.visibleOnly = visibleOnly;

    let threshold = [];
    for (let i = 0; i <= 20; i++) {
      threshold.push(i * 0.05);
    }

    let listener = (_entries, _observer) => recheck();
    let recheck = (updateHash = false) => {
      if (this.clickedOnAnchor) return;
      let closest = this.getClosestHeadingToTopOfViewport();
      this.setActive(closest?.id ?? null, { updateHash });
    }

    let debouncedRecheck = debounce(recheck, 200);

    // The scroll listener comes in after the user has stopped scrolling and
    // acts as a catch-all in cases where the `IntersectionObserver` fails.
    window.addEventListener('scroll', () => debouncedRecheck(true));

    this.observer = new IntersectionObserver(
      listener,
      {
        // Draw an imaginary rectangle the size of the viewport, then decrease
        // the height so that the rectangle covers only the top 10% of the
        // viewport.
        //
        // When a heading passes into this imaginary rectangle, that's the
        // active heading.
        //
        // If no heading is within this imaginary rectangle, the active heading
        // is the closest heading _above_ the top edge of the viewport.
        //
        // If no such heading qualifies, the active heading is the closest
        // heading to the top edge of the viewport.
        rootMargin: `${topMargin}px 0px -90% 0px`,
        threshold
      }
    );

    this.ids = [];
    this.headings = [];

    this.container.addEventListener('click', (event) => {
      let link = event.target.closest('a');
      if (!link) return;
      this.didClickLink(link);
    })

    this.scanSidebar();
  }

  rescanSidebar () {
    this.ids = [];
    this.headings = [];
    this.scanSidebar();
  }

  scanSidebar() {
    this.pathName = window.location.pathname;
    this.observer.disconnect();

    let links = this.container.querySelectorAll('a');

    for (let link of links) {
      let href = link.getAttribute('href');
      if (!href?.startsWith('#')) {
        if (`${href}/` === this.pathName) {
          link.closest('li')?.classList.add('active');
        }
      }

      let id = href.substring(1);
      if (!id) continue;
      let heading = document.getElementById(id);
      if (!heading) continue;
      if (this.visibleOnly && !this.isVisible(heading)) continue;

      this.ids.push(id);
      this.headings.push(heading);

      this.observer.observe(heading);
    }
  }

  isVisible (element) {
    return element.offsetHeight !== 0;
  }

  setActive(id, { updateHash = false } = {}) {
    if (id === null) return;
    this.activeId = id;
    let href = `#${id}`;

    let previousActive = this.container.querySelector('a.active');
    if (previousActive?.getAttribute('href').startsWith('#')) {
      previousActive?.classList.remove('active');
    }

    let linkForId = this.container.querySelector(`a[href="${href}"]`);
    if (!linkForId) return;

    linkForId?.classList.add('active');
    if (updateHash) {
      this.scrollIntoView(linkForId)
      this.setHistoryEntry(href);
    }
  }

  setHistoryEntry(newHash) {
    if (!this.manageHistoryEntries) return;
    let hash = location.hash;
    let newUrl = location.toString().replace(hash, '');
    history.replaceState(null, '', `${newUrl}${newHash}`);
  }

  scrollIntoView (element) {
    let { sidebar } = this;
    // If there's no scrollbar on the container, there's nothing to scroll.
    if (sidebar.scrollHeight === sidebar.offsetHeight) return;

    let sidebarRect = sidebar.getBoundingClientRect();
    let elementRect = element.getBoundingClientRect();

    // The highest and lowest visible Y positions within the viewport.
    let topEdge = sidebarRect.top;
    let bottomEdge = sidebarRect.top + sidebarRect.height;
    if (elementRect.top < topEdge) {
      // The active link is above the scroll position. Nudge it in the negative
      // direction just enough to bring the link on screen.
      let diff = topEdge - elementRect.top;
      sidebar.scrollTop -= diff;
    } else if (elementRect.top + elementRect.height > bottomEdge) {
      // The active link is below the scroll position. Nudge it in the positive
      // direction just enough to bring the link on screen.
      let diff = elementRect.bottom - bottomEdge;
      sidebar.scrollTop += diff;
    }
  }

  getClosestHeadingToTopOfViewport() {
    let windowHeight = window.innerHeight;
    let threshold = this.topMargin + (windowHeight * 0.1);
    let previousHeading;
    let lastIndex = this.headings.length - 1;
    for (let [index, heading] of this.headings.entries()) {
      let rect = heading.getBoundingClientRect();
      if (rect.bottom >= threshold) {
        if (previousHeading) {
          return previousHeading;
        } else if (rect.bottom <= windowHeight) {
          // If this is the first heading on the page, we'll still consider it
          // active if it's at least within the viewport.
          return heading;
        } else {
          // Otherwise we have no active heading.
          return null;
        }
      } else if (index === lastIndex) {
        return heading;
      }
      previousHeading = heading;
    }
  }

  didIntersect(entry, observer) {
    let { target, isIntersecting } = entry;
    if (!target.id) return;
    if (!isIntersecting) {
      if (target.id === this.activeId) {
        this.setActive(null);
      }
      return
    };
    if (observer === this.observer) {
      this.setActive(target.id);
      return true;
    }
    if (observer === this.wideObserver && this.activeId === null) {
      this.setActive(target.id);
    }
    return false;
  }

  // Clicking on a link with a heading anchor should always make that link the
  // active link, even if it otherwise wouldn't qualify. (Like if it's a short
  // section at the bottom of the page and cannot reach the top of the
  // viewport.)
  didClickLink(link) {
    let href = link.getAttribute('href');
    if (!href.startsWith('#')) return;

    let id = href.substring(1);
    if (!this.ids.includes(id)) return;

    this.clickedOnAnchor = true;
    requestAnimationFrame(() => this.setActive(id));
    setTimeout(() => this.clickedOnAnchor = false, 300);
  }
}


const Tabs = {
  setup () {
    let nodes = document.getElementsByClassName("tabs-tabs-wrapper");

    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];

      let buttons = node.getElementsByClassName("tabs-tab-button");
      let isAnyBtnActive = false;

      for (let y = 0; y < buttons.length; y++) {
        let button = buttons[y];

        if (button.classList.contains("active")) {
          isAnyBtnActive = true;
        }

        button.addEventListener("click", this.onClick.bind(this));
      }

      if (!isAnyBtnActive) {
        // This section has no active buttons. But since we want the first button
        // to be active on page load, we will manually trigger one to be active
        let defaultBtn = buttons[0];
        defaultBtn.click();
      }
    }
  },

  onClick () {
    let button = event.target;
    let wrapper = button.closest('.tabs-tabs-wrapper');
    let section = wrapper.querySelector(`[data-index="${button.dataset.tab}"]`);

    let allButtons = wrapper.getElementsByClassName("tabs-tab-button");
    let allSections = wrapper.getElementsByClassName("tabs-tab-content");

    // Deactivate all buttons
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove("active");
    }
    // Deactivate all Sections
    for (let i = 0; i < allSections.length; i++) {
      allSections[i].classList.remove("active");
    }

    // Activate the button
    button.classList.add("active");
    // Activate the Section
    section.classList.add("active");
  }
}


ThemeSwitcher.setup();

class SystemSwitcher {
  constructor() {
    this.BUTTON_TEXT_FOR_PLATFORM = {
      mac: 'mac',
      linux: 'Linux',
      win: 'Windows'
    };

    this.list = document.querySelector('.platform-switcher');
    if (!this.list) return;

    this.list.addEventListener('click', (event) => {
      let button = event.target.closest('button');
      if (!button) return;
      this.onClick(button);
    })

    this.observer = new MutationObserver(
      (mutationList) => {
      for (let mutation of mutationList) {
        if (mutation.type !== 'attributes') continue;
        if (mutation.attributeName !== 'data-platform') continue;
        this.reactToPlatformChange(document.body.dataset.platform);
      }
    });
    this.observer.observe(document.body, { attributes: true });

    this.setPlatform(this.getPreferredPlatform() ?? this.detectPlatform());
    this.reactToPlatformChange(document.body.dataset.platform);
  }

  detectPlatform () {
    // Make a rough guess as to the platform of a given user.
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
    const macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    let os = null;

    if (macosPlatforms.includes(platform)) {
      os = 'mac';
    } else if (iosPlatforms.includes(platform)) {
      os = 'mac';
    } else if (windowsPlatforms.includes(platform)) {
      os = 'win';
    } else if (/Android/.test(userAgent)) {
      os = 'win';
    } else if (/Linux/.test(platform)) {
      os = 'linux';
    }

    return os;
  }

  setPlatform (platform) {
    document.body.setAttribute(`data-platform`, platform);
    localStorage.setItem("preferred-platform", platform);
  }

  getPreferredPlatform () {
    return localStorage.getItem("preferred-platform") ?? null;
  }

  onClick (button) {
    this.setPlatform(button.dataset.platform);
  }

  reactToPlatformChange (newPlatform) {
    let active = this.list.querySelector('.active');
    if (active?.dataset.platform === newPlatform) return;
    active?.classList.remove('active');

    let selector = `button[data-platform="${newPlatform}"]`;
    let newActive = this.list.querySelector(selector);
    newActive.classList.add('active');

    // Are there any tabbed containers with different content based on
    // platform? Those should be kept in sync with the platform selector. This
    // also ensures that the correct tab is focused for the user's platform
    // when the page is first shown.
    let tabWrappers = document.querySelectorAll('.tabs-tabs-wrapper');
    let targetButtonText = this.BUTTON_TEXT_FOR_PLATFORM[newPlatform];
    for (let wrapper of tabWrappers) {
      let buttons = Array.from(wrapper.querySelectorAll('button'));
      // innerText can reflect CSS text-transform, amazingly. Normalize text
      // before comparison.
      let button = buttons.find(
        b => b.innerText.toLowerCase().includes(targetButtonText.toLowerCase())
      );
      button?.click();
    }
  }
}

{
  new SystemSwitcher();
}

// Must be declared before the heading observer, but after the system switcher
// (so that it ignores invisible headings).
let autoToc = new AutoTOC({ visibleOnly: true });
{
  // When `body[data-platform]` changes, rebuild the table of contents.
  // Headings might have been hidden or shown.
  let mutationObserver = new MutationObserver(() => autoToc.rebuildTOC());
  mutationObserver.observe(document.body, { subtree: false, attributes: true, attributeFilter: ['data-platform'] })
}

{
  let topMargin = document.querySelector('.page-header')?.offsetHeight ?? 0;
  let manageHistoryEntries = !location.pathname.startsWith('/api/');
  window.headingObserver = new HeadingObserver({ topMargin, manageHistoryEntries, visibleOnly: true });
}
