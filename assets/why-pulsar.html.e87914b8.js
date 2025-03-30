import{_ as o,o as r,c as i,e as n,a as t,b as e,d as s,f as d,r as l}from"./app.a3485bf5.js";const h={},u=t("h2",{id:"why-pulsar",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#why-pulsar","aria-hidden":"true"},"#"),e(" Why Pulsar?")],-1),c=d('<p>There are a lot of text editors out there; why should you spend your time learning about and using Pulsar? Editors like Sublime and TextMate offer convenience but only limited extensibility. On the other end of the spectrum, Emacs and Vim offer extreme flexibility, but they aren&#39;t very approachable and can only be customized with special-purpose scripting languages.</p><p>We think we can do better. Our goal is a zero-compromise combination of hackability and usability: an editor that will be welcoming to an elementary school student on their first day learning to code, but also a tool they won&#39;t outgrow as they develop into seasoned hackers.</p><p>As we&#39;ve used Pulsar to build Pulsar, what began as an experiment has gradually matured into a tool we can&#39;t live without. On the surface, Pulsar is the modern desktop text editor you&#39;ve come to expect. Pop the hood, however, and you&#39;ll discover a system begging to be hacked on.</p><h3 id="the-nucleus-of-pulsar" tabindex="-1"><a class="header-anchor" href="#the-nucleus-of-pulsar" aria-hidden="true">#</a> The Nucleus of Pulsar</h3><p>The web is not without its faults, but two decades of development has forged it into an incredibly malleable and powerful platform. So when we set out to write a text editor that we ourselves would want to extend, web technology was the obvious choice. But first, we had to free it from its chains.</p><h3 id="the-native-web" tabindex="-1"><a class="header-anchor" href="#the-native-web" aria-hidden="true">#</a> The Native Web</h3><p>Web browsers are great for browsing web pages, but writing code is a specialized activity that warrants dedicated tools. More importantly, the browser severely restricts access to the local system for security reasons, and for us, a text editor that couldn&#39;t write files or run local sub-processes was a non-starter.</p><p>For this reason, we didn&#39;t build Pulsar as a traditional web application. Instead, Pulsar is a specialized variant of Chromium designed to be a text editor rather than a web browser. Every Pulsar window is essentially a locally-rendered web page.</p><p>All the APIs available to a typical Node.js application are also available to the code running in each window&#39;s JavaScript context. This hybrid provides a unique client-side development experience.</p><p>Since everything is local, you don&#39;t have to worry about asset pipelines, script concatenation, and asynchronous module definitions. If you want to load some code, just require it at the top of your file. Node&#39;s module system makes it easy to break the system down into lots of small, focused packages.</p><h3 id="javascript-meet-c" tabindex="-1"><a class="header-anchor" href="#javascript-meet-c" aria-hidden="true">#</a> JavaScript, Meet C++</h3><p>Interacting with native code is also really simple. For example, we wrote a wrapper around the Oniguruma regular expression engine for our TextMate grammar support. In a browser, that would have required adventures with NaCl or Esprima. Node integration made it easy.</p><p>In addition to the Node APIs, we also expose APIs for native dialogs, adding application and context menu items, manipulating the window dimensions, etc.</p><h3 id="web-tech-the-fun-parts" tabindex="-1"><a class="header-anchor" href="#web-tech-the-fun-parts" aria-hidden="true">#</a> Web Tech: The Fun Parts</h3><p>Another great benefit, that comes with writing code for Pulsar, is the guarantee that it&#39;s running on the newest version of Chromium. That means we can ignore issues like browser compatibility and polyfills. We can use all the web&#39;s shiny features of tomorrow, today.</p><p>For example, the layout of our workspace and panes is based on flexbox. It&#39;s an emerging standard and has gone through a lot of change since we started using it, but none of that mattered as long as it worked.</p><p>With the entire industry pushing web technology forward, we&#39;re confident that we&#39;re building Pulsar on fertile ground. Native UI technologies come and go, but the web is a standard that becomes more capable and ubiquitous with every passing year. We&#39;re excited to dig deeper into its toolbox.</p><h3 id="an-open-source-text-editor" tabindex="-1"><a class="header-anchor" href="#an-open-source-text-editor" aria-hidden="true">#</a> An Open-Source Text Editor</h3><p>We see Pulsar as a great replacement for Atom but we can&#39;t do it without your support going forward, since we know that we can&#39;t achieve our vision for Pulsar alone. As Emacs and Vim have demonstrated over the past three decades, if you want to build a thriving, long-lasting community around a text editor, it has to be open source.</p>',19),p={href:"https://github.com/pulsar-edit",target:"_blank",rel:"noopener noreferrer"};function w(b,m){const a=l("ExternalLinkIcon");return r(),i("div",null,[u,n('TODO: We probably want to make this our own, it is very "Atom" still'),c,t("p",null,[e("The entire Pulsar editor is free and open source and available under our "),t("a",p,[e("Organizational"),s(a)]),e(" repositories.")])])}const g=o(h,[["render",w],["__file","why-pulsar.html.vue"]]);export{g as default};
