import{_ as o,o as i,c as l,a as s,b as e,d as a,f as t,r as c}from"./app.a3485bf5.js";const d={},r=t('<div class="custom-container danger"><p class="custom-container-title">STOP</p><p>This is being kept for archival purposes only from the original Atom documentation. As this may no longer be relevant to Pulsar, use this at your own risk. Current Pulsar documentation is found at <a href="/docs/launch-manual/getting-started">documentation home</a>.</p></div><h2 id="shadow-dom" tabindex="-1"><a class="header-anchor" href="#shadow-dom" aria-hidden="true">#</a> Shadow DOM</h2><p>In Atom <code>1.13</code> the Shadow DOM got removed from text editors. Find a guide how to migrate your theme or package in this appendix.</p><h3 id="removing-shadow-dom-styles" tabindex="-1"><a class="header-anchor" href="#removing-shadow-dom-styles" aria-hidden="true">#</a> Removing Shadow DOM styles</h3>',4),p=s("code",null,"1.13",-1),u={href:"https://github.com/atom/atom/pull/12903",target:"_blank",rel:"noopener noreferrer"},m=t(`<h4 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h4><p>Here is a quick summary to see all the changes at a glance:</p><table><thead><tr><th>Before</th><th>+/-</th><th>After</th></tr></thead><tbody><tr><td><code>atom-text-editor::shadow {}</code></td><td>- <code>::shadow</code></td><td><code>atom-text-editor {}</code></td></tr><tr><td><code>.class /deep/ .class {}</code></td><td>- <code>/deep/</code></td><td><code>.class .class {}</code></td></tr><tr><td><code>atom-text-editor, :host {}</code></td><td>- <code>:host</code></td><td><code>atom-text-editor {}</code></td></tr><tr><td><code>.comment {}</code></td><td>+ <code>.syntax--</code></td><td><code>.syntax--comment {}</code></td></tr></tbody></table><p>Below you&#39;ll find more detailed examples.</p><h4 id="ui-themes-and-packages" tabindex="-1"><a class="header-anchor" href="#ui-themes-and-packages" aria-hidden="true">#</a> UI themes and packages</h4><h5 id="shadow" tabindex="-1"><a class="header-anchor" href="#shadow" aria-hidden="true">#</a> <code>::shadow</code></h5><p>Remove the <code>::shadow</code> pseudo-element selector from <code>atom-text-editor</code>.</p><p>Before:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor::shadow .cursor</span> <span class="token punctuation">{</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor .cursor</span> <span class="token punctuation">{</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="deep" tabindex="-1"><a class="header-anchor" href="#deep" aria-hidden="true">#</a> <code>/deep/</code></h5><p>Remove the <code>/deep/</code> combinator selector. It didn&#39;t get used that often, mainly to customize the scrollbars.</p><p>Before:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.scrollbars-visible-always /deep/ ::-webkit-scrollbar</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.scrollbars-visible-always ::-webkit-scrollbar</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="syntax-themes" tabindex="-1"><a class="header-anchor" href="#syntax-themes" aria-hidden="true">#</a> Syntax themes</h4><h5 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> <code>:host</code></h5><p>Remove the <code>:host</code> pseudo-element selector. To scope any styles to the text editor, using <code>atom-text-editor</code> is already enough.</p><p>Before:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor,
:host</span> <span class="token punctuation">{</span>
	<span class="token selector">.cursor</span> <span class="token punctuation">{</span>
		<span class="token property">border-color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor</span> <span class="token punctuation">{</span>
	<span class="token selector">.cursor</span> <span class="token punctuation">{</span>
		<span class="token property">border-color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> <code>syntax--</code></h5><p>Add a <code>syntax--</code> prefix to all grammar selectors used by language packages. It looks a bit verbose, but it will protect all the grammar selectors from accidental style pollution.</p><p>Before:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.comment</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mono-3</span><span class="token punctuation">;</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>

	<span class="token selector">.markup.link</span> <span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mono-3</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">.syntax--comment</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mono-3</span><span class="token punctuation">;</span>
	<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>

	<span class="token selector">.syntax--markup.syntax--link</span> <span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@mono-3</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong>: Selectors like the <code>.gutter</code>, <code>.indent-guide</code>, <code>.cursor</code> among others, that are also part of Syntax themes, don&#39;t need a prefix. <strong>Only</strong> grammar selectors that get used by language packages. For example <code>.syntax--keyword</code>, <code>.syntax--keyword.syntax--operator.syntax--js</code>.</p><h4 id="context-targeted-style-sheets" tabindex="-1"><a class="header-anchor" href="#context-targeted-style-sheets" aria-hidden="true">#</a> Context-Targeted Style Sheets</h4><p>Atom also allowed you to target a specific shadow DOM context with an entire style sheet by adding <code>.atom-text-editor</code> to the file name. This is now not necessary anymore and can be removed.</p><p>Before:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>my-ui-theme/
  styles/
    index.atom-text-editor.less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>my-ui-theme/
  styles/
    index.less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="i-followed-the-guide-but-now-my-styling-is-broken" tabindex="-1"><a class="header-anchor" href="#i-followed-the-guide-but-now-my-styling-is-broken" aria-hidden="true">#</a> I followed the guide, but now my styling is broken!</h4><p>By replacing <code>atom-text-editor::shadow</code> with <code>atom-text-editor.editor</code>, specificity might have changed. This can cause the side effect that some of your properties won&#39;t be strong enough. To fix that, you can increase specificity on your selector. A simple way is to just repeat your class (in the example below it&#39;s <code>.my-class</code>):</p><p>Before:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor::shadow .my-class</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After:</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor .my-class.my-class</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="when-should-i-migrate-my-theme-package" tabindex="-1"><a class="header-anchor" href="#when-should-i-migrate-my-theme-package" aria-hidden="true">#</a> When should I migrate my theme/package?</h4>`,44),h=s("li",null,[e("If you already want to test the migration on master or Beta channel, make sure to change your "),s("code",null,"package.json"),e(" file to "),s("code",null,'"engines": { "atom": ">=1.13.0 <2.0.0" }'),e(". This will prevent Atom from updating your theme or package before the user also updates Atom to version "),s("code",null,"1.13"),e(".")],-1),v=s("code",null,"1.13",-1),b=s("strong",null,"Stable",-1),k={href:"https://blog.atom.io/",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"1.13",-1),y={href:"https://github.com/atom/deprecation-cop",target:"_blank",rel:"noopener noreferrer"};function x(f,w){const n=c("ExternalLinkIcon");return i(),l("div",null,[r,s("p",null,[e("In Atom "),p,e(" the Shadow DOM got removed from text editors. For more background on the reasoning, check out the "),s("a",u,[e("Pull Request"),a(n)]),e(" where it was removed. In this guide you will learn how to migrate your theme or package.")]),m,s("ul",null,[h,s("li",null,[e("Or you can wait until Atom "),v,e(" reaches "),b,e(". Check "),s("a",k,[e("blog.atom.io"),a(n)]),e(" to see if "),g,e(" already has been released. Don't worry if you're a bit late, Atom will transform the deprecated selectors automatically to avoid breaking any themes or packages. But users will start to see a deprecation warning in "),s("a",y,[e("deprecation-cop"),a(n)]),e(".")])])])}const A=o(d,[["render",x],["__file","index.html.vue"]]);export{A as default};
