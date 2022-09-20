<template><div><h1 id="symbolprovider-config-api" tabindex="-1"><a class="header-anchor" href="#symbolprovider-config-api" aria-hidden="true">#</a> SymbolProvider Config API</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Please note that its possible this is outdated, as its original version was published by @'Phil' on Jan 24, 2017.</p>
</div>
<p>The builtin <code v-pre>SymbolProvider</code> allows showing the types of symbols in the suggestion list.</p>
<p><img src="@source/docs/packages_wiki/autocomplete-plus/symbol-provider-notes.jpg" alt="symbol-provider-notes"></p>
<p>The icon colors are intended to match the syntax color of the symbol type. e.g. functions are blue in this theme, so the function icon is also blue.</p>
<p>Each language can tune how the <code v-pre>SymbolProvider</code> tags symbols by modifying the <a href="https://github.com/pulsar-edit/language-coffee-script/blob/d86c8963dcee0ab811da05a175b2218045d0c124/settings/language-coffee-script.cson#L5" target="_blank" rel="noopener noreferrer">config of the language package<ExternalLinkIcon/></a>.</p>
<div class="language-coffee ext-coffee line-numbers-mode"><pre v-pre class="language-coffee"><code><span class="token comment"># An example for the CoffeeScript language</span>
<span class="token string-property property">'.source.coffee'</span><span class="token operator">:</span>
  <span class="token property">autocomplete</span><span class="token operator">:</span>
    <span class="token property">symbols</span><span class="token operator">:</span>
      <span class="token property">class</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.class.name, .inherited-class, .instance.type'</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">4</span>
      <span class="token property">function</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.function.name'</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">3</span>
      <span class="token property">variable</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.variable'</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token string-property property">''</span><span class="token operator">:</span> <span class="token comment"># the catch-all</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.source'</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token property">builtin</span><span class="token operator">:</span>
        <span class="token property">suggestions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'one'</span>
          <span class="token string">'two'</span>
        <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A more generic example:</p>
<div class="language-coffee ext-coffee line-numbers-mode"><pre v-pre class="language-coffee"><code>
<span class="token string-property property">'.source.language'</span><span class="token operator">:</span>
  <span class="token property">autocomplete</span><span class="token operator">:</span>
    <span class="token property">symbols</span><span class="token operator">:</span>
      <span class="token property">typename1</span><span class="token operator">:</span>
        <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.some, .selectors'</span>
        <span class="token property">typePriority</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token property">typename2</span><span class="token operator">:</span>
        <span class="token property">suggestions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
      <span class="token property">typename3</span><span class="token operator">:</span>
        <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Any number of Typename objects are supported, and <code v-pre>typename</code> can be anything you choose. However, you are encouraged to use one of the predefined <code v-pre>typenames</code>. There are predefined styles for the following types:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>builtin
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typename-objects" tabindex="-1"><a class="header-anchor" href="#typename-objects" aria-hidden="true">#</a> Typename Objects</h2>
<p>Typename objects support the following properties:</p>
<ul>
<li><code v-pre>selector</code>: The selector that matches your symbol types. e.g. <code v-pre>'.variable.name'</code>. You can also have several selectors separated by commas, just like in CSS <code v-pre>'.variable.name, .storage.variable'</code></li>
<li><code v-pre>typePriority</code>: The priority this Typename object has over others. e.g. in our CoffeeScript example above, if a symbol is tagged with the <code v-pre>function</code> type in one part of the code, but <code v-pre>class</code> in another part of the code, it will be displayed to the user as a <code v-pre>class</code> because <code v-pre>class</code> has a higher <code v-pre>typePriority</code></li>
<li><code v-pre>suggestions</code>: This allows you to specify explicit completions for some scope. A good use is builtins: e.g. <code v-pre>['Math', 'Array', ...]</code> in JavaScript
<ul>
<li>Items in the <code v-pre>suggestions</code> list can also objects using any of the <RouterLink to="/docs/packages_wiki/autocomplete-plus/provider-api.html#suggestions">properties</RouterLink> from the provider API.</li>
</ul>
</li>
</ul>
<h2 id="finding-scope-selectors" tabindex="-1"><a class="header-anchor" href="#finding-scope-selectors" aria-hidden="true">#</a> Finding Scope Selectors</h2>
<p>Coming up with the selectors for a given Typename object might be the hardest part of defining the <code v-pre>autocomplete.symbols</code> config. Fortunately there is a tool to help</p>
<p>Open the <a href="https://atom.io/docs/latest/getting-started-atom-basics#command-palette" target="_blank" rel="noopener noreferrer">command palette<ExternalLinkIcon/></a>, then search for <code v-pre>log cursor scope</code>. You will be presented with a blue box like the following:</p>
<p><img src="@source/docs/packages_wiki/autocomplete-plus/scopename.png" alt="scopenames"></p>
<p>Each bullet in the box is a node. The last bullet is the symbol itself, and each preceding line is a parent of the symbol — just like CSS. With this information, you can see that the symbol can be matched with several selectors: <code v-pre>'.variable'</code>, <code v-pre>'.variable.assignment'</code>, <code v-pre>'.source.coffee .variable'</code>, etc.</p>
</div></template>


