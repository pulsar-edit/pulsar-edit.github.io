import{_ as r,o as c,c as l,a as o,b as e,d as a,w as d,f as i,r as n}from"./app.a3485bf5.js";const h={},u=o("h3",{id:"publishing",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#publishing","aria-hidden":"true"},"#"),e(" Publishing")],-1),p=o("code",null,"apm",-1),m=o("code",null,"apm",-1),g=o("h4",{id:"prepare-your-package",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#prepare-your-package","aria-hidden":"true"},"#"),e(" Prepare Your Package")],-1),b=o("p",null,"There are a few things you should double check before publishing:",-1),_=i("<li>Your <code>package.json</code> file has <code>name</code>, <code>description</code>, and <code>repository</code> fields.</li><li>Your <code>package.json</code> file has a <code>version</code> field with a value of <code>&quot;0.0.0&quot;</code>.</li><li>Your <code>package.json</code> file has an <code>engines</code> field that contains an entry for Atom such as: <code>&quot;engines&quot;: {&quot;atom&quot;: &quot;&gt;=1.0.0 &lt;2.0.0&quot;}</code>.</li><li>Your package has a <code>README.md</code> file at the root.</li><li>Your <code>repository</code> URL in the <code>package.json</code> file is the same as the URL of your repository.</li>",5),f={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},k={href:"https://help.github.com/articles/importing-a-git-repository-using-the-command-line/",target:"_blank",rel:"noopener noreferrer"},y=o("h4",{id:"publish-your-package",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#publish-your-package","aria-hidden":"true"},"#"),e(" Publish Your Package")],-1),v={href:"https://atom.io/packages",target:"_blank",rel:"noopener noreferrer"},w=o("code",null,"https://atom.io/packages/your-package-name",-1),x=o("p",null,[e("Now let's review what the "),o("code",null,"apm publish"),e(" command does:")],-1),Y=o("li",null,"Registers the package name on atom.io if it is being published for the first time.",-1),G=o("li",null,[e("Updates the "),o("code",null,"version"),e(" field in the "),o("code",null,"package.json"),e(" file and commits it.")],-1),q={href:"https://git-scm.com/book/en/Git-Basics-Tagging",target:"_blank",rel:"noopener noreferrer"},T=o("li",null,"Pushes the tag and current branch up to GitHub.",-1),j=o("li",null,"Updates atom.io with the new version being published.",-1),L=i(`<p>Now run the following commands to publish your package:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ cd path-to-your-package
$ apm publish minor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),U=o("code",null,"apm publish",-1),N={href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://en.wikipedia.org/wiki/Keychain_(Apple)",target:"_blank",rel:"noopener noreferrer"},R=i(`<p>Your package is now published and available on atom.io. Head on over to <code>https://atom.io/packages/your-package-name</code> to see your package&#39;s page.</p><p>With <code>apm publish</code>, you can bump the version and publish by using</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm publish &lt;em&gt;version-type&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where <code>version-type</code> can be <code>major</code>, <code>minor</code> and <code>patch</code>.</p><p>The <code>major</code> option to the publish command tells apm to increment the first number of the version before publishing so the published version will be <code>1.0.0</code> and the Git tag created will be <code>v1.0.0</code>.</p><p>The <code>minor</code> option to the publish command tells apm to increment the second number of the version before publishing so the published version will be <code>0.1.0</code> and the Git tag created will be <code>v0.1.0</code>.</p><p>The <code>patch</code> option to the publish command tells apm to increment the third number of the version before publishing so the published version will be <code>0.0.1</code> and the Git tag created will be <code>v0.0.1</code>.</p>`,7),A=o("code",null,"major",-1),B=o("code",null,"minor",-1),C=o("code",null,"patch",-1),E={href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"},H=o("p",null,[e("You can also run "),o("code",null,"apm help publish"),e(" to see all the available options and "),o("code",null,"apm help"),e(" to see all the other available commands.")],-1);function I(V,$){const s=n("RouterLink"),t=n("ExternalLinkIcon");return c(),l("div",null,[u,o("p",null,[e("Atom bundles a command line utility called "),p,e(" which we first used back in "),a(s,{to:"/using-atom/sections/atom-packages/#command-line"},{default:d(()=>[e("Command Line")]),_:1}),e(" to search for and install packages via the command line. The "),m,e(" command can also be used to publish Atom packages to the public registry and update them.")]),g,b,o("ul",null,[_,o("li",null,[e("Your package is in a Git repository that has been pushed to "),o("a",f,[e("GitHub"),a(t)]),e(". Follow "),o("a",k,[e("this guide"),a(t)]),e(" if your package isn't already on GitHub.")])]),y,o("p",null,[e("Before you publish a package it is a good idea to check ahead of time if a package with the same name has already been published to "),o("a",v,[e("the atom.io package registry"),a(t)]),e(". You can do that by visiting "),w,e(" to see if the package already exists. If it does, update your package's name to something that is available before proceeding.")]),x,o("ol",null,[Y,G,o("li",null,[e("Creates a new "),o("a",q,[e("Git tag"),a(t)]),e(" for the version being published.")]),T,j]),L,o("p",null,[e("If this is the first package you are publishing, the "),U,e(" command may prompt you for your GitHub username and password. If you have two-factor authentication enabled, use a "),o("a",N,[e("personal access token"),a(t)]),e(" in lieu of a password. This is required to publish and you only need to enter this information the first time you publish. The credentials are stored securely in your "),o("a",P,[e("keychain"),a(t)]),e(" once you login.")]),R,o("p",null,[e("Use "),A,e(" when you make a change that breaks backwards compatibility, like changing defaults or removing features. Use "),B,e(" when adding new functionality or options, but without breaking backwards compatibility. Use "),C,e(" when you've changed the implementation of existing features, but without changing the behaviour or options of your package. Check out "),o("a",E,[e("semantic versioning"),a(t)]),e(" to learn more about best practices for versioning your package releases.")]),H])}const F=r(h,[["render",I],["__file","publishing.html.vue"]]);export{F as default};
