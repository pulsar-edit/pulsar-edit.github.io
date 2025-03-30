import{_ as a,o as n,c as l,a as r,b as e,d as o,e as i,f as s,r as d}from"./app.a3485bf5.js";const p={},u={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.117.0",target:"_blank",rel:"noopener noreferrer"},c=s('<h2 id="pulsar-1-117-0-with-special-love-for-markdown-and-tree-sitter" tabindex="-1"><a class="header-anchor" href="#pulsar-1-117-0-with-special-love-for-markdown-and-tree-sitter" aria-hidden="true">#</a> Pulsar 1.117.0: With special love for Markdown and Tree-sitter</h2><p>As you may have come to expect, this release is full of new improvements for Tree-sitter grammars! From SCSS now having Tree-sitter support, to Ruby getting an updated parser, to performance and highlighting enhancements in Markdown and TypeScript, there&#39;s hopefully something in there for everybody.</p><p>Speaking of Markdown, the <code>markdown-preview</code> package has gotten significant performance increases in the preview pane (especially for documents with lots of fenced code blocks), and boasts brand new dark mode support for the &quot;GitHub.com style&quot; option!</p><p>But dark mode support doesn&#39;t stop there! Pulsar can now (optionally) use the OS-level dark mode window theme, switching automatically based on the lightness or darkness of the colors in the active Pulsar theme if enabled.</p><p>Beyond the fixes and features within the editor itself, you&#39;ll be glad to know this release also saw many improvements for our Continuous Integration to ensure we can deliver timely and bug-free updates in the future. - The Pulsar team</p><hr><ul><li>[markdown-preview] Improve rendering performance in preview panes, especially in documents with lots of fenced code blocks.</li><li>[markdown-preview] GitHub-style Markdown preview now uses up-to-date styles and supports dark mode.</li><li>Pulsar&#39;s OS level theme will now change according to the selected editor theme if <code>core.syncWindowThemeWithPulsarTheme</code> is enabled.</li><li>[language-sass] Add SCSS Tree-sitter grammar.</li><li>[language-ruby] Update to latest Tree-sitter Ruby parser.</li><li>[language-gfm] Make each block-level HTML tag its own injection.</li><li>[language-typescript] More highlighting fixes, especially for operators.</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',8),h={href:"https://github.com/pulsar-edit/pulsar/pull/1008",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/pulsar-edit/pulsar/pull/1006",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/pulsar-edit/pulsar/pull/1002",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/pulsar-edit/pulsar/pull/984",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/pulsar-edit/pulsar/pull/974",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/pulsar-edit/pulsar/pull/1000",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/pulsar-edit/pulsar/pull/995",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/pulsar-edit/pulsar/pull/993",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/pulsar-edit/pulsar/pull/997",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/pulsar-edit/pulsar/pull/973",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/pulsar-edit/pulsar/pull/545",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/pulsar-edit/pulsar/pull/983",target:"_blank",rel:"noopener noreferrer"},C=r("code",null,".org",-1),S=r("code",null,".language-clojure",-1),A={href:"https://github.com/pulsar-edit/pulsar/pull/980",target:"_blank",rel:"noopener noreferrer"};function G(P,D){const t=d("ExternalLinkIcon");return n(),l("div",null,[r("p",null,[e("Pulsar "),r("a",u,[e("1.117.0"),o(t)]),e(" is available now!")]),i(" more "),c,r("ul",null,[r("li",null,[e("Fixed: Cirrus: Fix gem install fpm on ARM Linux "),r("a",h,[e("@DeeDeeG"),o(t)])]),r("li",null,[e("Updated: [ci] Update Cirrus CI Token "),r("a",g,[e("@confused-Techie"),o(t)])]),r("li",null,[e("Fixed: CI: Fix workaround for Homebrew node in Cirrus on macOS "),r("a",f,[e("@DeeDeeG"),o(t)])]),r("li",null,[e("Added: [markdown-preview] Optimize re-rendering of content in a preview pane especially syntax highlighting "),r("a",m,[e("@savetheclocktower"),o(t)])]),r("li",null,[e("Fixed: Tree-sitter rolling fixes, 1.117 edition "),r("a",_,[e("@savetheclocktower"),o(t)])]),r("li",null,[e("Updated: Update Renovate preset name "),r("a",b,[e("@HonkingGoose"),o(t)])]),r("li",null,[e("Added: Debugging when a package service is incorrect "),r("a",w,[e("@mauricioszabo"),o(t)])]),r("li",null,[e("Added: Bundle snippets "),r("a",k,[e("@confused-Techie"),o(t)])]),r("li",null,[e("Fixed: CI: Pin to macOS 12 runner images instead of macos-latest (GitHub Actions) "),r("a",v,[e("@DeeDeeG"),o(t)])]),r("li",null,[e("Added: [markdown-preview] Add dark mode for GitHub-style preview "),r("a",y,[e("@savetheclocktower"),o(t)])]),r("li",null,[e("Added: Change Window Theme with Pulsar Theme "),r("a",x,[e("@confused-Techie"),o(t)])]),r("li",null,[e("Updated: CI: Upgrade or replace all deprecated GH Actions "),r("a",T,[e("@DeeDeeG"),o(t)])]),r("li",null,[e("Fixed: [language-clojure] Stop detecting "),C,e(" files as "),S,e(),r("a",A,[e("@confused-Techie"),o(t)])])])])}const H=a(p,[["render",G],["__file","20240520-confused-Techie-v1.117.0.html.vue"]]);export{H as default};
