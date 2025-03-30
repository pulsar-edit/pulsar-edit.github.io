import{_ as r}from"./detective.e7e89ed0.js";import{_ as i}from"./package.4e7449ae.js";import{_ as s}from"./spotlight.aba19e76.js";import{_ as l,o as h,c as d,e as u,a as t,b as e,d as a,f as n,r as c}from"./app.a3485bf5.js";const p="data:image/png;base64,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",g="/assets/fork.425ac14f.png",m="/assets/info.7c7632fc.png",f={},w=t("p",null,"How many roads must a man walk down? Not a clue, but what I do know is that this is the one and only Pulsar Community Update!",-1),A=n('<h1 id="welcome-to-the-august-community-update" tabindex="-1"><a class="header-anchor" href="#welcome-to-the-august-community-update" aria-hidden="true">#</a> Welcome to the August Community Update</h1><p>As always, a big, warm welcome to this month&#39;s update! This time around we have some interesting new features, some of which have been in the works for a while, so it is great to be able to report on their state as they will soon be making their way to a Pulsar near you! These updates include news on a new &quot;pulsar-updater&quot; package designed to help you keep up to date with our latest releases, a big new feature for one of our core packages for working with Markdown documents and bringing some of our dependencies up to date so you no longer have to keep around old toolchains.</p><p>So lets get on with it!</p><h2 id="update-to-markdown-preview-language-identifiers" tabindex="-1"><a class="header-anchor" href="#update-to-markdown-preview-language-identifiers" aria-hidden="true">#</a> Update to markdown-preview language identifiers</h2><img src="'+p+'" height="200">',5),b={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"markdown-preview",-1),v=t("code",null,"markdown-preview",-1),_=t("code",null,"markdown-preview",-1),k=n('<p>This is done by providing a &quot;language identifier&quot; to the codeblock in order to signal to Pulsar what language you want it to highlight. For example, if you wanted to embed some javascript in a document, you would need to start the code fence like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>```javascript\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>```js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The issue was that this list of identifiers had not been updated for a long time, and people used to other tools and applications with this same functionality (for example, within GitHub and various static site generators) were finding that identifiers they commonly used were not being correctly identified.</p>',5),x=t("em",null,"only",-1),P={href:"https://github.com/github-linguist/linguist/blob/master/lib/linguist/languages.yml",target:"_blank",rel:"noopener noreferrer"},D=t("code",null,"markdown-preview",-1),N=t("code",null,"Custom Syntax Highlighting Language Identifiers",-1),I={href:"https://web.pulsar-edit.dev/packages/language-pon",target:"_blank",rel:"noopener noreferrer"},B=t("code",null,"j",-1),G=t("code",null,"pon: source.pon, j: source.js",-1),Q={href:"https://pulsar-edit.dev/download.html#rolling-release",target:"_blank",rel:"noopener noreferrer"},E={href:"https://pulsar-edit.dev/download.html#regular-releases",target:"_blank",rel:"noopener noreferrer"},V=t("h2",{id:"moving-ppm-to-our-own-npm-fork",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#moving-ppm-to-our-own-npm-fork","aria-hidden":"true"},"#"),e(" Moving PPM to our own NPM fork")],-1),j=t("img",{src:g,height:"200"},null,-1),T={href:"https://github.com/nodejs/node-gyp/tree/main",target:"_blank",rel:"noopener noreferrer"},S=t("code",null,"node-gyp",-1),U={href:"https://github.com/pulsar-edit/ppm",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/DeeDeeG",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/pulsar-edit/ppm/pull/79",target:"_blank",rel:"noopener noreferrer"},F=t("code",null,"node-gyp",-1),H=t("h2",{id:"pulsar-updater-package-in-the-works",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pulsar-updater-package-in-the-works","aria-hidden":"true"},"#"),e(" pulsar-updater package in the works")],-1),O=t("img",{src:m,height:"200"},null,-1),R=t("p",null,'A comment that we see come up somewhat regularly from both our team and community members alike is how Pulsar should deal with updates. Atom has an auto-update module that (at least on Windows and macOS) would allow you to update Atom from within the application. Unfortunately, these existing auto-update methods are either incompatible or unfeasible to implement within Pulsar (for example, the requirement that we would need to pay large amounts of money to sign our binaries). We also support (and plan to support) a much larger set of distribution methods than Atom - various Linux, Windows and macOS package managers as well as our "standard" binary releases, which means accounting for all of these different methods.',-1),X={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/pulsar-edit/pulsar/pull/656",target:"_blank",rel:"noopener noreferrer"},Y=t("p",null,"The notifications generated by this package can be dismissed entirely or until the next launch in order to be as minimally intrusive as possible.",-1),J=t("p",null,"This feature is still something in the works so isn't available just yet, but you can be sure we will provide more details and an announcement once it is out in the wild.",-1),K=t("h2",{id:"pulsar-package-repository-feature-detection-is-now-live",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pulsar-package-repository-feature-detection-is-now-live","aria-hidden":"true"},"#"),e(" Pulsar Package Repository feature detection is now live!")],-1),z=t("p",null,[t("img",{src:r,height:"200"}),t("img",{src:i,height:"200"})],-1),Z={href:"https://pulsar-edit.dev/blog/20230601-Daeraxa-JuneUpdate.html#community-package-feature-detection",target:"_blank",rel:"noopener noreferrer"},L=t("p",null,"We don't currently have any implementations of this feature in Pulsar itself just yet, but we do have plans for it. For example, we could provide automatic detection of a community grammar for a language not installed on the system. This could easily be extended to all kinds of other features provided by community packages.",-1),W=t("h2",{id:"community-spotlight",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#community-spotlight","aria-hidden":"true"},"#"),e(" Community spotlight")],-1),$=t("img",{src:s,height:"200"},null,-1),ee={href:"https://github.com/arite",target:"_blank",rel:"noopener noreferrer"},te={href:"https://github.com/cat-master21",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/2colours",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/GuilleW",target:"_blank",rel:"noopener noreferrer"},ne=t("hr",null,null,-1),re={href:"https://pulsar-edit.dev/community.html",target:"_blank",rel:"noopener noreferrer"};function ie(se,le){const o=c("ExternalLinkIcon");return h(),d("div",null,[w,u(" more "),A,t("p",null,[t("a",b,[e("@confused-techie"),a(o)]),e(" has been working on a significant update to the way the "),y,e(" package handles the highlighting of code inside code fences. The "),v,e(' package is a package included with Pulsar that allows you to render Markdown documents directly within Pulsar without the need for any external tools. One of its features is the fact that it is able to perform syntax highlighting of code within "code fences" or "code blocks". That is, if you include a small snippet of javascript or shell script into your document, '),_,e(" can provide the same level of syntax highlighting to your snippet in the preview pane as in the main editor.")]),k,t("p",null,[e("This change adds some significant improvements to this system, not content with "),x,e(" updating the existing list of languages to match GitHub's "),t("a",P,[e("Linguist"),a(o)]),e(' library but massively extending the system to allow users to tailor the behaviour to suit their own needs. In addition to the "Linguist" (GitHub) mode, it adds in lists for other tools such as "Chroma" (Codeberg, Gitea, Hugo), "Rouge" (GitLab, Jekyll) and "HighlightJS" (Markdown-IT). In many cases, these will be identical and users can leave it on the existing default mode (Linguist). However, for those who rely on Pulsar and the '),D,e(" package to correctly display code as it will be used on the platform of their choice, this allows them to not have to modify the identifier between their editor and their production files.")]),t("p",null,[e("As if that wasn't enough, it also features a new feature that allows you to freely add and customise your own options in order to include non-default languages and to override your own options by way of a new setting within the package: \xA0"),N,e(". For example, if I wanted to have "),t("a",I,[e("PON"),a(o)]),e(" support or wanted to add "),B,e(' as an identifier for "javascript", I could add the following to that setting: '),G,e(".")]),t("p",null,[e("You can try out this feature right now in our "),t("a",Q,[e("rolling release"),a(o)]),e(" or you can wait until our next "),t("a",E,[e("regular release"),a(o)]),e(".")]),V,j,t("p",null,[e("One issue we have had crop up again and again that has frustrated contributors and users alike is that Pulsar was using some older versions of some tools, particularly "),t("a",T,[e("node-gyp"),a(o)]),e(" (a tool for compiling native modules for Node.js), which had some very particular requirements for development tooling on the machine. For example, it was very particular about which version of the Visual Studio tools would work and which versions of Python could be used (i.e. not the latest releases).")]),t("p",null,[e("This is a problem for Pulsar because "),S,e(" is used by NPM which is used as part of our "),t("a",U,[e("PPM"),a(o)]),e(" (Pulsar Package Manager) tool for installing Pulsar packages. Pulsar does not use a system NPM installation but instead has its own version bundled with the application.")]),t("p",null,[e("So "),t("a",C,[e("@DeeDeeG"),a(o)]),e(" has done some work to "),t("a",M,[e("migrate to our own fork of NPM"),a(o)]),e(" which changes our "),F,e(" dependency from the old 5.11 to the much newer 9.4.0 which should mean that Pulsar will soon properly support modern compiler toolchains and drop support for old, unsupported ones.")]),H,O,R,t("p",null,[e("So a first step towards a solution here is a new core package developed by "),t("a",X,[e("@confused-techie"),a(o)]),e(" called "),t("a",q,[e("pulsar-updater"),a(o)]),e(" which is designed to inform the user not only when a new version has been released but also how to install it based on what install method is detected on the system. For example, it might prompt you to visit the Pulsar website to download a new binary, or it can provide a command for your terminal to run.")]),Y,J,K,z,t("p",null,[e("A couple of months ago we announced that a "),t("a",Z,[e("new feature was coming to our package backend"),a(o)]),e('. The linked post goes into far more detail, but in a nutshell this is a feature that adds "feature detection" to our backend, allowing users and developers to have a much more cohesive experience when trying to install or develop new Pulsar packages that rely on features from other community packages.')]),L,W,$,t("p",null,[e("As we always say (because it is absolutely true), this project would be nothing if it weren't for our wonderful community members, and we want to make sure we provide proper attribution when people directly contribute to Pulsar, not only through our release notes but on our social channels as well. So in light of that, a big thank you to "),t("a",ee,[e("@arite"),a(o)]),e(", "),t("a",te,[e("@cat-master21"),a(o)]),e(", "),t("a",oe,[e("@2colors"),a(o)]),e(" and "),t("a",ae,[e("@GuilleW"),a(o)]),e(" who have made contributions to the project which we have recently included.")]),ne,t("p",null,[e("And just like that, we are done with yet another month's updates. As ever, if you want to get more involved in the community, please join in on our various "),t("a",re,[e("social channels"),a(o)]),e(". Hope to see you again this time next month!")])])}const pe=l(f,[["render",ie],["__file","20230801-Daeraxa-AugustUpdate.html.vue"]]);export{pe as default};
