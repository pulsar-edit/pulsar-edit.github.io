import{_ as n,o as l,c as a,a as e,b as t,d as r,e as i,f as s,r as p}from"./app.a3485bf5.js";const d={},u={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.110.0",target:"_blank",rel:"noopener noreferrer"},c=e("h2",{id:"what-do-we-have-for-you-in-pulsar-1-110-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-do-we-have-for-you-in-pulsar-1-110-0","aria-hidden":"true"},"#"),t(" What do we have for you in Pulsar 1.110.0?")],-1),h=e("p",null,"Here we are with another Pulsar release, and this month we have quite a number of fixes and improvements. This time around, the focus has really been on bug fixes in order to improve the overall experience.",-1),f=e("code",null,"node-gyp",-1),_={href:"https://pulsar-edit.dev/blog/20230801-Daeraxa-AugustUpdate.html#moving-ppm-to-our-own-npm-fork",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/twocolours",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/GuilleW",target:"_blank",rel:"noopener noreferrer"},b={href:"https://pulsar-edit.dev/blog/20230916-Daeraxa-v1.109.0.html",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"Onto Pulsar itself: we have a few new features that have been added. The first is a new autocomplete API that works on ranges rather than the previous prefix system, which will improve LSP support. (And on the topic of autocomplete, if anyone had been editing EJS files and noticed errors popping up, these have now been greatly reduced in this update).",-1),k=e("p",null,"Onto the fixes. This first one solves an issue where, if you attempted to start Pulsar with an invalid configuration file, then it would silently fail but still present a running process. Error checking has now been added so that the error can actually be exposed to the user.",-1),v=e("p",null,[t("Next, we have a problem introduced with our "),e("code",null,"snippets"),t(" package update, which now includes variables indicated by a "),e("code",null,"$"),t(", which is also used by PHP, so some escaping of these characters needed to be added.")],-1),D={href:"https://pulsar-edit.dev/blog/20231004-Daeraxa-OctoberUpdate.html#macos-binary-signing-issues",target:"_blank",rel:"noopener noreferrer"},y=s('<p>And that just about covers things for this release. We hope you have enjoyed reading this and continue to enjoy using Pulsar. As ever, a huge thank you to our generous donors and community, without whom this project would not be possible.</p><p>Until next time, happy coding, and see you amongst the stars!</p><ul><li>The Pulsar Team</li></ul><hr><ul><li>Made the modification of <code>editor.preferredLineLength</code> configurable within <code>wrap-guide</code> when changing <code>wrap-guide.columns</code></li><li>Fixed Snippets from <code>language-php</code> that would lose the <code>$</code> character</li><li>Fixed a condition where an invalid config may crash Pulsar before fully starting up, but not registering that it&#39;s crashed</li><li>Reduced error notifications that may appear from <code>autocomplete-html</code> when handling EJS files</li><li>Fixed macOS binary signing after moving over to GitHub Actions for CI</li><li>Updated PPM to a newer <code>node-gyp</code>, allowing newer versions of C/C++ compiler toolchains and Python to be used (also dropped support for Python 2.x!)</li><li>Fully decaffed the entire PPM codebase</li><li>Added a new autocomplete API that does not uses prefixes and instead declares the range it&#39;ll replace (better LSP support)</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',6),x={href:"https://github.com/pulsar-edit/pulsar/pull/762",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/pulsar-edit/pulsar/pull/735",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/pulsar-edit/pulsar/pull/758",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/pulsar-edit/pulsar/pull/750",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"try/catch",-1),A={href:"https://github.com/pulsar-edit/pulsar/pull/753",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/pulsar-edit/pulsar/pull/752",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/pulsar-edit/pulsar/pull/745",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/pulsar-edit/pulsar/pull/743",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/pulsar-edit/pulsar/pull/738",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/pulsar-edit/pulsar/pull/725",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/pulsar-edit/pulsar/pull/479",target:"_blank",rel:"noopener noreferrer"},O=e("h3",{id:"ppm",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ppm","aria-hidden":"true"},"#"),t(" ppm")],-1),B={href:"https://github.com/pulsar-edit/ppm/pull/94",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/pulsar-edit/ppm/pull/92",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/pulsar-edit/ppm/pull/90",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"second-mate",-1),L=e("code",null,"first-mate",-1),N={href:"https://github.com/pulsar-edit/ppm/pull/86",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"visualStudioIsInstalled()",-1),H={href:"https://github.com/pulsar-edit/ppm/pull/85",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/pulsar-edit/ppm/pull/84",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"postinstall",-1),z={href:"https://github.com/pulsar-edit/ppm/pull/83",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"master",-1),Y={href:"https://github.com/pulsar-edit/ppm/pull/81",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/pulsar-edit/ppm/pull/79",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/pulsar-edit/ppm/pull/78",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/pulsar-edit/ppm/pull/77",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/pulsar-edit/ppm/pull/76",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://github.com/pulsar-edit/ppm/pull/75",target:"_blank",rel:"noopener noreferrer"},te={href:"https://github.com/pulsar-edit/ppm/pull/74",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/pulsar-edit/ppm/pull/73",target:"_blank",rel:"noopener noreferrer"},re={href:"https://github.com/pulsar-edit/ppm/pull/72",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://github.com/pulsar-edit/ppm/pull/71",target:"_blank",rel:"noopener noreferrer"},le={href:"https://github.com/pulsar-edit/ppm/pull/70",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/pulsar-edit/ppm/pull/69",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://github.com/pulsar-edit/ppm/pull/68",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/pulsar-edit/ppm/pull/67",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/pulsar-edit/ppm/pull/66",target:"_blank",rel:"noopener noreferrer"},de={href:"https://github.com/pulsar-edit/ppm/pull/65",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://github.com/pulsar-edit/ppm/pull/64",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://github.com/pulsar-edit/ppm/pull/63",target:"_blank",rel:"noopener noreferrer"};function he(fe,_e){const o=p("ExternalLinkIcon");return l(),a("div",null,[e("p",null,[t("Armed with a big ol' can of Raid: Pulsar "),e("a",u,[t("1.110.0"),r(o)]),t(" is available now!")]),i(" more "),c,h,e("p",null,[t("Starting with changes to PPM (Pulsar Package Manager), it has been updated to use a newer version of "),f,t(" (a tool for compiling native modules for node.js), which will allow use of newer C/C++ compiler toolchains as well as newer versions of Python, namely 3.11, which introduced an issue for PPM requiring downgrading to 3.10. For Windows users, it also now supports Visual Studio 2022! We previously covered (part of) this topic in one of our community update "),e("a",_,[t("blog posts"),r(o)]),t(" in a bit more detail, so be sure to have a read of that too.")]),e("p",null,[t("On the topic of PPM, the decaffeination (conversion of CoffeeScript to JavaScript) has now been completed thanks to community members "),e("a",m,[t("@nemokosch/@twocolours"),r(o)]),t(" & "),e("a",g,[t("@GuilleW"),r(o)]),t(". In the "),e("a",b,[t("last release"),r(o)]),t(", we announced this had been completed in the core editor and packages; now this has been extended to PPM!")]),w,k,v,e("p",null,[t("And lastly, we had a problem with macOS binary signing in version '1.109.0'; this was already covered in the last "),e("a",D,[t("community update"),r(o)]),t(", and now this fix applies to our regular releases.")]),y,e("ul",null,[e("li",null,[t("Fixed: Fixed filtering of suggestions with ranges "),e("a",x,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: Tree-sitter running fixes for September "),e("a",P,[t("@savetheclocktower"),r(o)])]),e("li",null,[t("Added: Add escapement to variable literals within php snippets "),e("a",W,[t("@Spiker985"),r(o)])]),e("li",null,[t("Added: [core] Handle invalid config on load "),e("a",G,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Added: [autocomplete-html] Wrap completions in "),S,t(" handler "),e("a",A,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Bumped: Update dependency postcss to v8.4.31 [SECURITY] "),e("a",T,[t("@renovate"),r(o)])]),e("li",null,[t("Fixed: CI: Sign macOS binaries for branch pushes, not PRs "),e("a",C,[t("@DeeDeeG"),r(o)])]),e("li",null,[t("Fixed: CI: Use Python 3.11 to fix macOS signing "),e("a",F,[t("@DeeDeeG"),r(o)])]),e("li",null,[t("Fixed: [meta] Fix Windows Builds in CI "),e("a",I,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Bumped: ppm: Update ppm submodule to commit a2ade745bfbc5f "),e("a",M,[t("@DeeDeeG"),r(o)])]),e("li",null,[t("Added: Making autocomplete-plus work to replace ranges "),e("a",U,[t("@mauricioszabo"),r(o)])])]),O,e("ul",null,[e("li",null,[t("Bumped: Update npm and node-gyp, for macOS signing fix "),e("a",B,[t("@DeeDeeG"),r(o)])]),e("li",null,[t("Removed: Remove remnants of Coffeescript building "),e("a",E,[t("@2colours"),r(o)])]),e("li",null,[t("Added: Update unpublishing wording "),e("a",R,[t("@Daeraxa"),r(o)])]),e("li",null,[t("Added: Migrate to "),V,t(" and remove "),L,t(),e("a",N,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Added: Cleanup "),j,t(),e("a",H,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Decafed: Decaf Source "),e("a",J,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Make "),q,t(" scripts work on Windows with spaces in cwd path "),e("a",z,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Added: Move Spec Decaf PRs into "),$,t(),e("a",Y,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Bumped: Switch to our npm fork, to get newer node-gyp (node-gyp 9.x) "),e("a",K,[t("@DeeDeeG"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate remaining spec files from list-spec on "),e("a",Q,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate link spec "),e("a",X,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate install spec "),e("a",Z,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate init spec "),e("a",ee,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate help spec "),e("a",te,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate featured spec "),e("a",oe,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate enable spec "),e("a",re,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate docs spec "),e("a",ne,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate disable spec "),e("a",le,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate develop spec "),e("a",ae,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate config spec "),e("a",ie,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate command spec "),e("a",se,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate clean spec "),e("a",pe,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate ci spec "),e("a",de,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate apm cli spec "),e("a",ue,[t("@GuilleW and @2colours"),r(o)])]),e("li",null,[t("Decafed: Decaffeinate spec helper (updated) "),e("a",ce,[t("@GuilleW and @2colours"),r(o)])])])])}const ge=n(d,[["render",he],["__file","20231016-Daeraxa-v1.110.0.html.vue"]]);export{ge as default};
