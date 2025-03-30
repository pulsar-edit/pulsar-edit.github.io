import{_ as i}from"./iconography.bf3cea92.js";import{_ as c,o as r,c as l,a as t,b as e,d as a,w as d,f as p,r as n}from"./app.a3485bf5.js";const h={},u=t("h3",{id:"iconography",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#iconography","aria-hidden":"true"},"#"),e(" Iconography")],-1),m={href:"https://github.com/github/octicons/tree/v4.4.0",target:"_blank",rel:"noopener noreferrer"},g=t("blockquote",null,[t("p",null,[e("NOTE: Some older icons from version "),t("code",null,"2.1.2"),e(" are still kept for backwards compatibility.")])],-1),_=t("h4",{id:"overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),e(" Overview")],-1),f=p('<p><img src="'+i+`" alt="Octicons in the Styleguide" title="Octicons in the Styleguide"></p><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h4><p>Octicons can be added with simple CSS classes in your markup. Prefix the icon names with <code>icon icon-</code>.</p><p>As an example, to add a monitor icon (<code>device-desktop</code>), use the <code>icon icon-device-desktop</code> classes:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon icon-device-desktop<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> Size</h4><p>Octicons look best with a <code>font-size</code> of <code>16px</code>. It&#39;s already used as the default, so you don&#39;t need to worry about it. In case you prefer a different icon size, try to use multiples of 16 (<code>32px</code>, <code>48px</code> etc.) for the sharpest result. Sizes in between are ok too, but might look a bit blurry for icons with straight lines.</p><h4 id="usability" tabindex="-1"><a class="header-anchor" href="#usability" aria-hidden="true">#</a> Usability</h4>`,8),b={href:"https://atom.io/docs/api/latest/TooltipManager",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,'title="label"',-1);function v(y,x){const o=n("ExternalLinkIcon"),s=n("RouterLink");return r(),l("div",null,[u,t("p",null,[e("Atom comes bundled with the "),t("a",m,[e("Octicons 4.4.0"),a(o)]),e(" icon set. Use them to add icons to your packages.")]),g,_,t("p",null,[e("In the "),a(s,{to:"/hacking-atom/sections/creating-a-theme/#atom-styleguide"},{default:d(()=>[e("Styleguide")]),_:1}),e(` under the "Icons" section you'll find all the Octicons that are available.`)]),f,t("p",null,[e("Although icons can make your UI visually appealing, when used without a text label, it can be hard to guess its meaning. In cases where space for a text label is insufficient, consider adding a "),t("a",b,[e("tooltip"),a(o)]),e(" that appears on hover. Or a more subtle "),k,e(" attribute would help as well.")])])}const O=c(h,[["render",v],["__file","iconography.html.vue"]]);export{O as default};
