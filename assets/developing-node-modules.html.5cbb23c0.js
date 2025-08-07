import{_ as i,o as c,c as r,d as u,w as e,a as n,b as s,f as d,r as p}from"./app.87197fef.js";const m={},v=n("h2",{id:"developing-node-modules",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#developing-node-modules","aria-hidden":"true"},"#"),s(" Developing Node Modules")],-1),b=n("p",null,[s("Pulsar contains a number of packages that are Node modules instead of Pulsar packages. If you want to make changes to the Node modules, for instance "),n("code",null,"atom-keymap"),s(", you have to link them into the development environment differently than you would a normal Pulsar package.")],-1),k=n("h3",{id:"linking-a-node-module-into-your-pulsar-dev-environment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linking-a-node-module-into-your-pulsar-dev-environment","aria-hidden":"true"},"#"),s(" Linking a Node Module Into Your Pulsar Dev Environment")],-1),h=n("p",null,[s("Here are the steps to run a local version of a Node module within Pulsar. We're using "),n("code",null,"atom-keymap"),s(" as an example:")],-1),f=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s("$ "),n("span",{class:"token function"},"git"),s(` clone https://github.com/pulsar-edit/atom-keymap.git
$ `),n("span",{class:"token builtin class-name"},"cd"),s(` atom-keymap
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(`
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"link"),s(`
$ `),n("span",{class:"token builtin class-name"},"cd"),s(),n("span",{class:"token operator"},"<"),s("WHERE YOU CLONED PULSAR"),n("span",{class:"token operator"},">"),s(`
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"link"),s(` atom-keymap

`),n("span",{class:"token comment"},"# This is the special step, it makes the Node module work with Pulsar's version of Node"),s(`
$ pulsar `),n("span",{class:"token parameter variable"},"-p"),s(` rebuild

`),n("span",{class:"token comment"},"# If you have cloned Pulsar in a different location than ~/github/pulsar"),s(`
`),n("span",{class:"token comment"},"# you need to set the following environment variable"),s(`
$ `),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"ATOM_DEV_RESOURCE_PATH"),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},"<"),s("WHERE YOU CLONED PULSAR"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token comment"},"# Should work!"),s(`
$ pulsar `),n("span",{class:"token parameter variable"},"--dev"),s(),n("span",{class:"token builtin class-name"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s("$ "),n("span",{class:"token function"},"git"),s(` clone https://github.com/pulsar-edit/atom-keymap.git
$ `),n("span",{class:"token builtin class-name"},"cd"),s(` atom-keymap
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(`
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"link"),s(`
$ `),n("span",{class:"token builtin class-name"},"cd"),s(),n("span",{class:"token operator"},"<"),s("WHERE YOU CLONED PULSAR"),n("span",{class:"token operator"},">"),s(`
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"link"),s(` atom-keymap

`),n("span",{class:"token comment"},"# This is the special step, it makes the Node module work with Pulsar's version of Node"),s(`
$ pulsar `),n("span",{class:"token parameter variable"},"-p"),s(` rebuild

`),n("span",{class:"token comment"},"# If you have cloned Pulsar in a different location than ~/github/pulsar"),s(`
`),n("span",{class:"token comment"},"# you need to set the following environment variable"),s(`
$ `),n("span",{class:"token builtin class-name"},"export"),s(),n("span",{class:"token assign-left variable"},"ATOM_DEV_RESOURCE_PATH"),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},"<"),s("WHERE YOU CLONED PULSAR"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token comment"},"# Should work!"),s(`
$ pulsar `),n("span",{class:"token parameter variable"},"--dev"),s(),n("span",{class:"token builtin class-name"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s("$ "),n("span",{class:"token function"},"git"),s(` clone https://github.com/pulsar-edit/atom-keymap.git
$ `),n("span",{class:"token builtin class-name"},"cd"),s(` atom-keymap
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(`
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"link"),s(`
$ `),n("span",{class:"token builtin class-name"},"cd"),s(),n("span",{class:"token operator"},"<"),s("WHERE YOU CLONED PULSAR"),n("span",{class:"token operator"},">"),s(`
$ `),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"link"),s(` atom-keymap

`),n("span",{class:"token comment"},"# This is the special step, it makes the Node module work with Pulsar's version of Node"),s(`
$ pulsar `),n("span",{class:"token parameter variable"},"-p"),s(` rebuild

`),n("span",{class:"token comment"},"# If you have cloned Pulsar in a different location than %USERPROFILE%\\github\\pulsar"),s(`
`),n("span",{class:"token comment"},"# you need to set the following environment variable"),s(`
$ setx `),n("span",{class:"token assign-left variable"},"ATOM_DEV_RESOURCE_PATH"),n("span",{class:"token operator"},"="),n("span",{class:"token operator"},"<"),s("WHERE YOU CLONED PULSAR"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token comment"},"# Should work!"),s(`
$ pulsar `),n("span",{class:"token parameter variable"},"--dev"),s(),n("span",{class:"token builtin class-name"},"."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=d(`<p>After you get the Node module linked and working, every time you make a change to the Node module&#39;s code, you will have to exit Pulsar and do the following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>WHERE YOU CLONED THE NODE MODULE<span class="token operator">&gt;</span>
$ <span class="token function">npm</span> <span class="token function">install</span>
$ <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>WHERE YOU CLONED PULSAR<span class="token operator">&gt;</span>
$ pulsar <span class="token parameter variable">-p</span> rebuild
$ pulsar <span class="token parameter variable">--dev</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function $(y,N){const o=p("Tabs");return c(),r("div",null,[v,b,k,h,u(o,{id:"12",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"behind-pulsar"},{tab0:e(({title:a,value:l,isActive:t})=>[f]),tab1:e(({title:a,value:l,isActive:t})=>[g]),tab2:e(({title:a,value:l,isActive:t})=>[E]),_:1}),_])}const P=i(m,[["render",$],["__file","developing-node-modules.html.vue"]]);export{P as default};
