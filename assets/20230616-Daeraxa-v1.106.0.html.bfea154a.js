import{_ as a,o as n,c as i,a as e,b as t,d as r,e as s,f as l,r as u}from"./app.a3485bf5.js";const d={},h={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.106.0",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"what-is-new-in-1-106-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-new-in-1-106-0","aria-hidden":"true"},"#"),t(" What is new in 1.106.0?")],-1),c=e("p",null,"We have a particularly exciting release for you because this is our first regular release that adds a new feature that we have been hard at work on but more on that later. Of course we still have our usual mix of updates and upgrades such as a whole host of improvements to our Clojure language support and a number of annoying bugs that have been firmly splatted.",-1),m={href:"https://tree-sitter.github.io/tree-sitter/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pulsar-edit.dev/blog/20230601-Daeraxa-JuneUpdate.html#tree-sitter-updates-are-live",target:"_blank",rel:"noopener noreferrer"},f=e("em",null,"lot",-1),b=e("code",null,"Use Modern Tree-Sitter Implementation",-1),_=e("code",null,"Core",-1),y={href:"https://discord.gg/7aEbB9dGRT",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/pulsar-edit/pulsar/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc",target:"_blank",rel:"noopener noreferrer"},k=l('<p>Onto our Clojure language updates, lots of this actually ties directly into the new Tree-sitter implementation as Clojure is now supported as a Tree-sitter grammar which means a whole host of new features have been added that are specific to this new implementation. We now properly support block comments, quotes and a bunch of other advanced features. Basically there has never been a better time to pick up learning Clojure in Pulsar!</p><p>Don&#39;t let these big updates make you assume we aren&#39;t also thinking about some smaller scale things, we have a tiny quality of life update to our GitHub package which adds a <code>Log Out</code> option to the package options (<code>Packages &gt; GitHub &gt; Log Out</code>) (previously only available in a somewhat obscure command - <code>github:logout</code>) - just beware that this will remove your token from your system entirely so you will either need to re-enter it or create a new one to log back in.</p><p>And of course to finish up we have some annoying bugs which we have now been squashed, for example an issue that prevented images opening correctly (an issue we apparently inherited from Atom) and, whilst not a bug, a fix to solve a less than ideal situation with our new CSS autocomplete implementation to sort the suggestions in a more expected fashion. We have to thank our community for these as these last couple of items as they were brought to our attention (and in one case fixed) by some of our community members.</p><p>So that just about wraps it up for another release. As ever a huge thank you to our wonderful community and donors who make this entire project possible.</p><p>Till next time, happy coding, and see you among the stars!</p><ul><li>The Pulsar Team</li></ul><details><summary>A quick note about our missing ARM Linux Binaries</summary> Sorry, there are no ARM Linux binaries at time of initial release, due to what we suspect is an issue at our CI provider. Hopefully this will be resolved soon and we can upload some ARM Linux binaries for this release! Thanks for your patience. </details><hr><h3 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h3><ul><li>Fixed bug that happens on some systems when trying to launch Pulsar using the Cinnamon desktop environment</li><li>Added a modern implementation of Tree-sitter grammars behind an experimental flag. Enable the \u201CUse Modern Tree-Sitter Implementation\u201D in the Core settings to try it out</li><li>Bugfix: fixed Clojure indentation on tree-sitter</li><li>Improved the Clojure language support by migrating it to tree-sitter and support block comments, quoting, and other advanced features on modern tree-sitter implementation</li><li>Fixed a bug that could cause images to not appear the first time opening them</li><li><code>autocomplete-css</code> Completions are now sorted in a way that may match what users expect</li><li>Added a &quot;Log Out&quot; menu item for the <code>github</code> package</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',11),v={href:"https://github.com/pulsar-edit/pulsar/pull/592",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"request",-1),A={href:"https://github.com/pulsar-edit/pulsar/pull/474",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/pulsar-edit/pulsar/pull/579",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/pulsar-edit/pulsar/pull/563",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/pulsar-edit/pulsar/pull/584",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/pulsar-edit/pulsar/pull/570",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"completions.json",-1),F={href:"https://github.com/pulsar-edit/pulsar/pull/552",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/pulsar-edit/pulsar/pull/573",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/pulsar-edit/pulsar/pull/566",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/pulsar-edit/pulsar/pull/567",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/pulsar-edit/pulsar/pull/553",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/pulsar-edit/pulsar/pull/561",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/pulsar-edit/pulsar/pull/504",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/pulsar-edit/pulsar/pull/472",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/pulsar-edit/pulsar/pull/537",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/pulsar-edit/pulsar/pull/79",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/pulsar-edit/pulsar/pull/514",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"github",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),t(" github")],-1),H={href:"https://github.com/pulsar-edit/github/pull/27",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/pulsar-edit/github/pull/19",target:"_blank",rel:"noopener noreferrer"};function P(V,W){const o=u("ExternalLinkIcon");return n(),i("div",null,[e("p",null,[t("Welcome to our latest release, Pulsar 1.106.0 is "),e("a",h,[t("available now!"),r(o)])]),s(" more "),p,c,e("p",null,[t("As alluded to in the title our biggest update we have in store is our experimental modern Tree-sitter implementation. This is a really important feature for us as it allows us to move to a modern and actively developed implementation of "),e("a",m,[t("Tree-sitter"),r(o)]),t(" as well as allowing us to remove one of our obstacles in our quest to get onto modern versions of Electron. To be honest this is a huge topic in its own right, so if you want to read more about it then you can have a look at our "),e("a",g,[t("previous blog post"),r(o)]),t(" which goes into a "),f,t(' more detail about this change. For now we have this under an experimental "opt-in" setting so to enable it you will need to go into your Settings and look for '),b,t(" in your "),_,t(' settings in order to enable it. In short, if you enable it then you should see more accurate and consistent syntax highlighting, improved automatic indentation and better code folding. As ever we are keen for feedback on this feature so, once enabled, if you notice anything "off" or have any other comments or feedback then please let us know on '),e("a",y,[t("Discord"),r(o)]),t(" or "),e("a",w,[t("file an issue"),r(o)]),t(".")]),k,e("ul",null,[e("li",null,[t("Updated: deps: Bump github to v0.36.16-pretranspiled "),e("a",v,[t("@DeeDeeG"),r(o)])]),e("li",null,[t("Removed: Mostly remove "),x,t(),e("a",A,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Fix: Image doesn't appear at first open "),e("a",C,[t("@asiloisad"),r(o)])]),e("li",null,[t("Removed: Remove specific cinnamon condition "),e("a",T,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Fixed: Fix of Clojure's indentation rules by removing query file "),e("a",j,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Fixed: Update links in settings page "),e("a",S,[t("@Daeraxa"),r(o)])]),e("li",null,[t("Added: [autocomplete-css] Sort "),q,t(),e("a",F,[t("@confused-Techie"),r(o)])]),e("li",null,[t('Fixed: Fixes on "comment block" for Clojure grammar '),e("a",I,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: Hardcode NSIS GUID "),e("a",B,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Make yarn sane "),e("a",R,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Fixed: Huge improvement on Clojure highlighting "),e("a",U,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Removed: Removed unused_require method "),e("a",D,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Bumped: Update dependency underscore to 1.12.1 [SECURITY] "),e("a",E,[t("@renovate"),r(o)])]),e("li",null,[t("Added: Add modern tree-sitter support behind an experimental flag "),e("a",L,[t("@savetheclocktower"),r(o)])]),e("li",null,[t("Added: Make CHANGELOG easier to merge and update dompurify "),e("a",M,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: js operators "),e("a",z,[t("@icecream17"),r(o)])]),e("li",null,[t("Bumped: Update dependency postcss to v8.2.13 [SECURITY] "),e("a",G,[t("@renovate"),r(o)])])]),N,e("ul",null,[e("li",null,[t("Added: Add logout menu option "),e("a",H,[t("@Daeraxa"),r(o)])]),e("li",null,[t("Updated: ci: Bump action dependencies "),e("a",O,[t("@Spiker985"),r(o)])])])])}const J=a(d,[["render",P],["__file","20230616-Daeraxa-v1.106.0.html.vue"]]);export{J as default};
