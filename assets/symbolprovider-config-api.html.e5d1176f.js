import{_ as r,o as l,c as p,a as e,b as s,d as n,w as c,f as a,r as t}from"./app.87197fef.js";const d="/assets/symbol-provider-notes.0753ac08.jpg",u="/assets/scopename.20d826fe.png",m={},v=a('<h1 id="symbolprovider-config-api" tabindex="-1"><a class="header-anchor" href="#symbolprovider-config-api" aria-hidden="true">#</a> SymbolProvider Config API</h1><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please note that its possible this is outdated, as its original version was published by @&#39;Phil&#39; on Jan 24, 2017.</p></div><p>The builtin <code>SymbolProvider</code> allows showing the types of symbols in the suggestion list.</p><p><img src="'+d+'" alt="symbol-provider-notes"></p><p>The icon colors are intended to match the syntax color of the symbol type. e.g. functions are blue in this theme, so the function icon is also blue.</p>',5),b=e("code",null,"SymbolProvider",-1),h={href:"https://github.com/pulsar-edit/language-coffee-script/blob/d86c8963dcee0ab811da05a175b2218045d0c124/settings/language-coffee-script.cson#L5",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token comment"># An example for the CoffeeScript language</span>
<span class="token string-property property">&#39;.source.coffee&#39;</span><span class="token operator">:</span>
  <span class="token property">autocomplete</span><span class="token operator">:</span>
    <span class="token property">symbols</span><span class="token operator">:</span>
      <span class="token property">class</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.class.name, .inherited-class, .instance.type&#39;</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token property">function</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.function.name&#39;</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token property">variable</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.variable&#39;</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token string-property property">&#39;&#39;</span><span class="token operator">:</span> <span class="token comment"># the catch-all</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.source&#39;</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token property">builtin</span><span class="token operator">:</span>
        <span class="token property">suggestions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;one&#39;</span>
          <span class="token string">&#39;two&#39;</span>
        <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A more generic example:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>
<span class="token string-property property">&#39;.source.language&#39;</span><span class="token operator">:</span>
  <span class="token property">autocomplete</span><span class="token operator">:</span>
    <span class="token property">symbols</span><span class="token operator">:</span>
      <span class="token property">typename1</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">&#39;.some, .selectors&#39;</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token property">typename2</span><span class="token operator">:</span>
        <span class="token property">suggestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
      <span class="token property">typename3</span><span class="token operator">:</span>
        <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Any number of Typename objects are supported, and <code>typename</code> can be anything you choose. However, you are encouraged to use one of the predefined <code>typenames</code>. There are predefined styles for the following types:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>builtin
class
constant
function
import
keyword
method
module
mixin
package
property
require
snippet
tag
type
value
variable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typename-objects" tabindex="-1"><a class="header-anchor" href="#typename-objects" aria-hidden="true">#</a> Typename Objects</h2><p>Typename objects support the following properties:</p>`,7),g=a("<li><code>selector</code>: The selector that matches your symbol types. e.g. <code>&#39;.variable.name&#39;</code>. You can also have several selectors separated by commas, just like in CSS <code>&#39;.variable.name, .storage.variable&#39;</code></li><li><code>typePriority</code>: The priority this Typename object has over others. e.g. in our CoffeeScript example above, if a symbol is tagged with the <code>function</code> type in one part of the code, but <code>class</code> in another part of the code, it will be displayed to the user as a <code>class</code> because <code>class</code> has a higher <code>typePriority</code></li>",2),k=e("code",null,"suggestions",-1),f=e("code",null,"['Math', 'Array', ...]",-1),_=e("code",null,"suggestions",-1),x=e("h2",{id:"finding-scope-selectors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#finding-scope-selectors","aria-hidden":"true"},"#"),s(" Finding Scope Selectors")],-1),w=e("p",null,[s("Coming up with the selectors for a given Typename object might be the hardest part of defining the "),e("code",null,"autocomplete.symbols"),s(" config. Fortunately there is a tool to help")],-1),P={href:"https://atom.io/docs/latest/getting-started-atom-basics#command-palette",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"log cursor scope",-1),T=e("p",null,[e("img",{src:u,alt:"scopenames"})],-1),j=e("p",null,[s("Each bullet in the box is a node. The last bullet is the symbol itself, and each preceding line is a parent of the symbol \u2014 just like CSS. With this information, you can see that the symbol can be matched with several selectors: "),e("code",null,"'.variable'"),s(", "),e("code",null,"'.variable.assignment'"),s(", "),e("code",null,"'.source.coffee .variable'"),s(", etc.")],-1);function C(A,E){const o=t("ExternalLinkIcon"),i=t("RouterLink");return l(),p("div",null,[v,e("p",null,[s("Each language can tune how the "),b,s(" tags symbols by modifying the "),e("a",h,[s("config of the language package"),n(o)]),s(".")]),y,e("ul",null,[g,e("li",null,[k,s(": This allows you to specify explicit completions for some scope. A good use is builtins: e.g. "),f,s(" in JavaScript "),e("ul",null,[e("li",null,[s("Items in the "),_,s(" list can also objects using any of the "),n(i,{to:"/docs/packages/core/autocomplete-plus/provider-api.html#suggestions"},{default:c(()=>[s("properties")]),_:1}),s(" from the provider API.")])])])]),x,w,e("p",null,[s("Open the "),e("a",P,[s("command palette"),n(o)]),s(", then search for "),S,s(". You will be presented with a blue box like the following:")]),T,j])}const L=r(m,[["render",C],["__file","symbolprovider-config-api.html.vue"]]);export{L as default};
