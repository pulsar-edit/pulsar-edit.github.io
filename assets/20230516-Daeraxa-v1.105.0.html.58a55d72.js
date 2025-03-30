import{_ as n,o as a,c as l,a as e,b as t,d as r,e as s,f as i,r as u}from"./app.a3485bf5.js";const d={},c={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.105.0",target:"_blank",rel:"noopener noreferrer"},p=i('<h1 id="what-is-new-in-1-105-0" tabindex="-1"><a class="header-anchor" href="#what-is-new-in-1-105-0" aria-hidden="true">#</a> What is new in 1.105.0?</h1><p>This newest release of Pulsar contains many changes, from new features, to security patches, to testing improvements, this release has it all, and we hope it shows!</p><p>A big milestone for this release, is since our initial fork from Atom, we have now created fully green (passing) tests! This hopefully means we can iterate new changes, both fixes and new features, faster than ever before!</p><p>Also on this release we ensured to put a focus on solving the issues reported by our wonderful community such as resolving an issue that would prevent installation of Pulsar on RPM systems, fixing localization issues in <code>settings-view</code> when browsing packages, or addressing memory leak issues within <code>second-mate</code>.</p><p>Even better this release also comes with some brand new features and improvements to existing ones! Such as the addition of new community package activation hooks, adding a new <code>bookmarks</code> service to the ServiceHub, and updating the internal <code>typescript</code> used to support advancements within that language for community packages to take advantage of.</p><p>But this summary can&#39;t possibly include everything, make sure to take a look through the changelog below to see everything this release has to offer!</p><p>As always, we want to say a huge thanks to everyone that contributes to Pulsar, from the much appreciated donations, the critical issue reports, or amazing pull requests we receive. We appreciate every single one of you, and couldn&#39;t do any of this without you!</p><p>Till next time, happy coding, and see you among the stars!</p><ul><li>The Pulsar Team</li></ul><hr><ul><li>Rebranded notifications, using our backend to find new versions of package, and our github repository to find issues on Pulsar. Also fixed the &quot;view issue&quot; and &quot;create issue&quot; buttons that were not working</li><li>Bumped to latest version of <code>second-mate</code>, fixing a memory usage issue in <code>vscode-oniguruma</code></li><li>Removed a cache for native modules - fix bugs where an user rebuilds a native module outside of Pulsar, but Pulsar refuses to load anyway</li><li>Removed <code>nslog</code> dependency</li><li>Fixed an error where the GitHub package tried to interact with a diff view after it was closed</li><li>Fixed RPM installation failure when Atom was installed on the same machine</li><li>Added a new set of Package <code>activationHooks</code>, <code>...:uri-opened</code> lets a package activate when any URI is opened within Pulsar, and <code>...:file-name-opened</code> lets a package activate when any specific filename is opened within Pulsar.</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',12),h=e("code",null,"...:uri-opened",-1),f=e("code",null,"...:file-name-opened",-1),m={href:"https://github.com/pulsar-edit/pulsar/pull/518",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"settings-view",-1),g={href:"https://github.com/pulsar-edit/pulsar/pull/526",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/pulsar-edit/pulsar/pull/525",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/pulsar-edit/pulsar/pull/529",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/pulsar-edit/pulsar/pull/530",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/pulsar-edit/pulsar/pull/528",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/pulsar-edit/pulsar/pull/523",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"second-mate",-1),A={href:"https://github.com/pulsar-edit/pulsar/pull/524",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/pulsar-edit/pulsar/pull/493",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/pulsar-edit/pulsar/pull/515",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/pulsar-edit/pulsar/pull/517",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/pulsar-edit/pulsar/pull/513",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"autocomplete-atom-api",-1),z={href:"https://github.com/pulsar-edit/pulsar/pull/476",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/pulsar-edit/pulsar/pull/505",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/pulsar-edit/pulsar/pull/502",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/pulsar-edit/pulsar/pull/477",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/pulsar-edit/pulsar/pull/501",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/pulsar-edit/pulsar/pull/495",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/pulsar-edit/pulsar/pull/456",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/pulsar-edit/pulsar/pull/496",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"nslog",-1),N={href:"https://github.com/pulsar-edit/pulsar/pull/494",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/pulsar-edit/pulsar/pull/469",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/pulsar-edit/pulsar/pull/481",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/pulsar-edit/pulsar/pull/480",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"typscript-simple",-1),L=e("code",null,"typescript",-1),U={href:"https://github.com/pulsar-edit/pulsar/pull/458",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/pulsar-edit/pulsar/pull/492",target:"_blank",rel:"noopener noreferrer"},K=e("h3",{id:"notifications",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notifications","aria-hidden":"true"},"#"),t(" notifications")],-1),O={href:"https://github.com/pulsar-edit/notifications/pull/1",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/pulsar-edit/notifications/pull/2",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/pulsar-edit/notifications/pull/3",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/pulsar-edit/notifications/pull/4",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/pulsar-edit/notifications/pull/5",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/pulsar-edit/notifications/pull/6",target:"_blank",rel:"noopener noreferrer"};function ee(te,oe){const o=u("ExternalLinkIcon");return a(),l("div",null,[e("p",null,[t("Welcome to a rad new release, Pulsar 1.105.0 is "),e("a",c,[t("available now!"),r(o)])]),s(" more "),p,e("ul",null,[e("li",null,[t("Added: Add new "),h,t(" && "),f,t(" Package Activation Hook "),e("a",m,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Properly localize Download/Stargazer Counts within "),_,t(),e("a",g,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Added: Add bookmarks service for consumption by other packages "),e("a",b,[t("@savetheclocktower"),r(o)])]),e("li",null,[t("Added: Bundle notifications "),e("a",k,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Fixed: Fix Ripgrep download issues in CirrusCI "),e("a",w,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Removed: Revert Incorrect Commit "),e("a",v,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Making CI green, hopefully "),e("a",y,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Bumped: Bump "),x,t(" to 96866771 "),e("a",A,[t("@savetheclocktower"),r(o)])]),e("li",null,[t("Removed: Remove cache of incompatible native packages "),e("a",T,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: Simplify and bundle fuzzy-finder "),e("a",B,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: Bundle find and replace "),e("a",P,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: Bundle tree view "),e("a",F,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Added: Bundle "),R,t(),e("a",z,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Added: Add FPM option to stop rpm buildid clash "),e("a",C,[t("@Daeraxa"),r(o)])]),e("li",null,[t("Bumped: chore(deps): update dependency minimist [security] "),e("a",D,[t("@renovate"),r(o)])]),e("li",null,[t("Fixed: Disable Failing Tests "),e("a",S,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Bumped: chore(deps): update dependency ajv to 6.12.3 [security] "),e("a",I,[t("@renovate"),r(o)])]),e("li",null,[t("Bumped: chore(deps): update dependency async to 3.2.2 [security] "),e("a",V,[t("@renovate"),r(o)])]),e("li",null,[t('Added: Add "icon only" class to settings view icon '),e("a",q,[t("@Daeraxa"),r(o)])]),e("li",null,[t("Bumped: chore(deps): update dependency minimatch [security] "),e("a",E,[t("@renovate"),r(o)])]),e("li",null,[t("Removed: Remove "),M,t(" dependency "),e("a",N,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Added: Setup Renovate "),e("a",H,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Don't mark diff ranges on a destroyed buffer "),e("a",W,[t("@savetheclocktower"),r(o)])]),e("li",null,[t("Added: First Architectural Design Records "),e("a",j,[t("@mauricioszabo"),r(o)])]),e("li",null,[t("Bumped: use pular's "),G,t(" fork, which bumps "),L,t(" to 5.0.3 "),e("a",U,[t("@Meadowsys"),r(o)])]),e("li",null,[t("Added: CI: cache and restore dependencies, plus skip rebuilding all over the place (saves a lot of time) "),e("a",J,[t("@DeeDeeG"),r(o)])])]),K,e("ul",null,[e("li",null,[t("Fixed: Cleanup and rename "),e("a",O,[t("@Sertonix"),r(o)])]),e("li",null,[t("Added: reject promise with Error instance "),e("a",Q,[t("@Sertonix"),r(o)])]),e("li",null,[t("Added: Add our Testing Action "),e("a",X,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Change atom strings to pulsar "),e("a",Y,[t("@mdibella-dev"),r(o)])]),e("li",null,[t("Bumped: Bump to v3.2 of action-pulsar-dependency "),e("a",Z,[t("@confused-Techie"),r(o)])]),e("li",null,[t("Fixed: Fix all Tests "),e("a",$,[t("@confused-Techie"),r(o)])])])])}const ne=n(d,[["render",ee],["__file","20230516-Daeraxa-v1.105.0.html.vue"]]);export{ne as default};
