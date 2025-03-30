import{_ as a,o as r,c as s,e as i,a as e,b as t,d as n,r as h}from"./app.a3485bf5.js";const l={},d=e("p",null,"What has the Pulsar team and community been up to lately?",-1),c=e("h1",{id:"community-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-update","aria-hidden":"true"},"#"),t(" Community Update")],-1),u=e("p",null,[t("Hi everyone, welcome to our first post in what we hope will be a regular (or at least semi-regular) set of updates from the Pulsar team to let you know what is going on in the background. We see updates, work and improvements to the entire Pulsar ecosystem nearly every single day but many of these either aren't very obvious or requires a very close following of the various communication channels."),e("br"),t(" This update format is designed to let people know of our major wins and exciting updates of things we are working on so you can share in the progress we are making."),e("br"),t(" We hope you enjoy reading this and getting to know what is going on with the project and as ever we will see you among the stars!")],-1),p=e("h2",{id:"tree-sitter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tree-sitter","aria-hidden":"true"},"#"),t(" Tree-sitter")],-1),g={href:"https://tree-sitter.github.io/tree-sitter/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"Ultimately Tree-sitter moved on from Atom leaving it with a different implementation and one which is difficult to use with the changes in newer Electron versions.",-1),m={href:"https://github.com/tree-sitter/tree-sitter/blob/master/lib/binding_web/README.md",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/mauricioszabo",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"package-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#package-repository","aria-hidden":"true"},"#"),t(" Package repository")],-1),_=e("p",null,"There has been an awful lot of work going on in this area and it is mostly work that, in theory, should be pretty invisible to most users of Pulsar if all goes well.",-1),y={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Digitalone1",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/spiker985",target:"_blank",rel:"noopener noreferrer"},x={href:"https://api.pulsar-edit.dev/swagger-ui/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/confused-Techie",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/pulsar-edit/package-backend/blob/main/ARCHITECTURE.md",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"In terms of some package related housekeeping, one of our main goals was to preserve as many of the Atom packages as possible. So when we found that some packages had some ambiguous or missing licences we have made the effort to contact the owner of each package and ask for permission to host them. The good news is that this has been well received and we have managed to preserve more than a few of them.",-1),S=e("h2",{id:"donations-and-binary-signing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#donations-and-binary-signing","aria-hidden":"true"},"#"),t(" Donations and binary signing")],-1),C=e("p",null,[t("We have had an awful lot of generous donations sent to us recently. In particular we have to give a massive shout out to "),e("strong",null,[e("em",null,"@SubAtomic")]),t(" who has donated more money to the project alone than we thought we get in a whole year.")],-1),D=e("strong",null,[e("em",null,"@anonCoffee")],-1),P={href:"https://github.com/sponsors/pulsar-edit",target:"_blank",rel:"noopener noreferrer"},j={href:"https://opencollective.com/pulsar-edit",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,[t("We also now have a webhook set up for the GitHub sponsors so now when we get a donation we can properly thank them as it pops up on our Discord "),e("code",null,"#donations"),t(" channel.")],-1),I=e("p",null,"A huge thank you to literally all of our other donators on both platforms, we appreciate everything you give and make so much of what we want to do, possible.",-1),W={href:"https://github.com/Meadowsys",target:"_blank",rel:"noopener noreferrer"},U=e("h2",{id:"matrix-space",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#matrix-space","aria-hidden":"true"},"#"),t(" Matrix space")],-1),H={href:"https://github.com/kaosine",target:"_blank",rel:"noopener noreferrer"},O={href:"https://matrix.org/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://discord.gg/7aEbB9dGRT",target:"_blank",rel:"noopener noreferrer"};function N(R,V){const o=h("ExternalLinkIcon");return r(),s("div",null,[d,i(" more "),c,u,p,e("p",null,[t("Those who have been keeping up with the development of Pulsar know that one of our major goals is to upgrade to newer versions of Electron. Unfortunately this comes with quite a few challenges, one of which is the implementation of "),e("a",g,[t("Tree-sitter"),n(o)]),t(", a library used for syntax highlighting who's history is entwined with Atom's.")]),f,e("p",null,[t("So instead of trying to fix the old one, the current goal is to look at using the "),e("a",m,[t("WASM version"),n(o)]),t(" and "),e("a",w,[t("@Maur\xEDcio Szabo"),n(o)]),t(` has been doing some fantastic work on getting this implemented into Pulsar. This post isn't for the specifics of this work save to say we have seen "interesting" issues and challenges with this but the work is looking very promising and if all works out then our main barrier to a major Electron upgrade will be out of our way.`)]),b,_,e("p",null,[e("a",y,[t("@confused-techie"),n(o)]),t(" and "),e("a",k,[t("@Digitalone1"),n(o)]),t(" have been doing some amazing work to improve this area with updates to the way it handles versioning and a refactoring of the git and github interactions so hopefully we might support other platforms in the future.")]),e("p",null,[e("a",v,[t("@Spiker985"),n(o)]),t(" has been creating and updating the "),e("a",x,[t("Swagger/OpenAPI definition"),n(o)]),t(" for the backend API so we have a proper definition and validation of it and "),e("a",T,[t("@confused-techie"),n(o)]),t(" started the "),e("a",A,[t("Architecture document"),n(o)]),t(" which explains how everything works at a high level to allow people to more easily contribute to the project. We hope to include more of these in other repositories as time goes on.")]),E,S,C,e("p",null,[D,t(" also gave us a very generous donation and was also the first sponsor on our new "),e("a",P,[t("GitHub Sponsorship"),n(o)]),t(" which is an alternative should you want to donate by a platform other than our existing "),e("a",j,[t("Open Collective"),n(o)]),t(".")]),M,I,e("p",null,[t("Our first big expenditure we voted for (outside of ongoing hosting costs) will be to pay for Code Signing Certificates from Apple and Microsoft so that we can finally sign our binaries to prevent the issue of new users being told that they are broken, dangerous or may contain harmful code. "),e("a",W,[t("@Meadowsys"),n(o)]),t(" has already started on the macOS process of this so with any luck the need to run a special command just to run our software will be a thing of the past.")]),U,e("p",null,[e("a",H,[t("@kaosine"),n(o)]),t(" has been working to set us up a "),e("a",O,[t("Matrix"),n(o)]),t(" space for an alternative for people who would prefer to use an open source alternative to our main "),e("a",B,[t("Discord Server"),n(o)]),t(". However, we do not want to split the community in this way so before we start publicising it and providing links we would rather get our Discord bridge set up first so that all messages can be seen on both platforms seamlessly. Once it is up and live we will update the community with all the info that could be needed.")])])}const G=a(l,[["render",N],["__file","20230201-Daeraxa-FebUpdate.html.vue"]]);export{G as default};
