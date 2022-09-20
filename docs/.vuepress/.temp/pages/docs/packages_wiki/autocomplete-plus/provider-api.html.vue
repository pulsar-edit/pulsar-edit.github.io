<template><div><h1 id="provider-api" tabindex="-1"><a class="header-anchor" href="#provider-api" aria-hidden="true">#</a> Provider API</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Please note that its possible this is outdated, as its original version was published by @'Nathan Sobo' on Jan 3, 2018.</p>
</div>
<p>The Provider API allows you to make autocomplete+ awesome. The Pulsar community will ultimately judge the quality of Pulsar's autocomplete experience by the breadth and depth of the provider ecosystem. We're so excited that you're here reading about how to make Pulsar awesome.</p>
<blockquote>
<p>The following examples are in CoffeeScript. If you would like to add JavaScript examples, please feel free to edit this page!</p>
</blockquote>
<h2 id="defining-a-provider" tabindex="-1"><a class="header-anchor" href="#defining-a-provider" aria-hidden="true">#</a> Defining A Provider</h2>
<div class="language-coffee ext-coffee line-numbers-mode"><pre v-pre class="language-coffee"><code>provider <span class="token operator">=</span>
  <span class="token comment"># This will work on JavaScript and CoffeeScript files, but not in js comments.</span>
  <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.source.js, .source.coffee'</span>
  <span class="token property">disableForSelector</span><span class="token operator">:</span> <span class="token string">'.source.js .comment'</span>

  <span class="token comment"># This will take priority over the default provider, which has an inclusionPriority of 0.</span>
  <span class="token comment"># `excludeLowerPriority` will suppress any providers with a lower priority</span>
  <span class="token comment"># i.e. The default provider will be suppressed</span>
  <span class="token property">inclusionPriority</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token property">excludeLowerPriority</span><span class="token operator">:</span> <span class="token keyword">true</span>

  <span class="token comment"># This will be suggested before the default provider, which has a suggestionPriority of 1.</span>
  <span class="token property">suggestionPriority</span><span class="token operator">:</span> <span class="token number">2</span>

  <span class="token comment"># Let autocomplete+ filter and sort the suggestions you provide.</span>
  <span class="token property">filterSuggestions</span><span class="token operator">:</span> <span class="token keyword">true</span>

  <span class="token comment"># Required: Return a promise, an array of suggestions, or null.</span>
  <span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">,</span> scopeDescriptor<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> activatedManually<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token property">text</span><span class="token operator">:</span> <span class="token string">'something'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token comment"># (optional): (*experimental*) called when user the user selects a suggestion for the purpose of loading additional information about the suggestion.</span>
  <span class="token property">getSuggestionDetailsOnSelect</span><span class="token operator">:</span> <span class="token punctuation">(</span>suggestion<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>newSuggestion<span class="token punctuation">)</span>

  <span class="token comment"># (optional): called _after_ the suggestion `replacementPrefix` is replaced</span>
  <span class="token comment"># by the suggestion `text` in the buffer</span>
  <span class="token property">onDidInsertSuggestion</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> triggerPosition<span class="token punctuation">,</span> suggestion<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>

  <span class="token comment"># (optional): called when your provider needs to be cleaned up. Unsubscribe</span>
  <span class="token comment"># from things, kill any processes, etc.</span>
  <span class="token property">dispose</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The properties of a provider:</p>
<ul>
<li><code v-pre>selector</code> (required): Defines the scope selector(s) (can be comma-separated) for which your provider should receive suggestion requests</li>
<li><code v-pre>getSuggestions</code> (required): Is called when a suggestion request has been dispatched by <code v-pre>autocomplete+</code> to your provider. Return an array of suggestions (if any) in the order you would like them displayed to the user. Returning a Promise of an array of suggestions is also supported.</li>
<li><code v-pre>getSuggestionDetailsOnSelect</code> (optional): (<strong>experimental</strong>) Is called when a suggestion is selected by the user for the purpose of loading more information about the suggestion. Return a Promise of the new suggestion to replace it with or return <code v-pre>null</code> if no change is needed.</li>
<li><code v-pre>disableForSelector</code> (optional): Defines the scope selector(s) (can be comma-separated) for which your provider should not be used</li>
<li><code v-pre>inclusionPriority</code> (optional): A number to indicate its priority to be included in a suggestions request. The default provider has an inclusion priority of <code v-pre>0</code>. Higher priority providers can suppress lower priority providers with <code v-pre>excludeLowerPriority</code>.</li>
<li><code v-pre>excludeLowerPriority</code> (optional): Will not use lower priority providers when this provider is used.</li>
<li><code v-pre>suggestionPriority</code> (optional): A number to determine the sort order of suggestions. The default provider has an suggestion priority of <code v-pre>1</code></li>
<li><code v-pre>filterSuggestions</code> (optional): If set to <code v-pre>true</code>, <code v-pre>autocomplete+</code> will perform fuzzy filtering and sorting on the list of matches returned by <code v-pre>getSuggestions</code>.</li>
<li><code v-pre>dispose</code> (optional): Will be called if your provider is being destroyed by <code v-pre>autocomplete+</code></li>
<li><code v-pre>onDidInsertSuggestion</code> (optional): Function that is called when a suggestion from your provider was inserted into the buffer
<ul>
<li><code v-pre>editor</code>: the <a href="https://atom.io/docs/api/latest/TextEditor" target="_blank" rel="noopener noreferrer">TextEditor<ExternalLinkIcon/></a> your suggestion was inserted in</li>
<li><code v-pre>triggerPosition</code>: A <a href="https://atom.io/docs/api/latest/Point" target="_blank" rel="noopener noreferrer">Point<ExternalLinkIcon/></a> where autocomplete was triggered</li>
<li><code v-pre>suggestion</code>: The suggestion object that was inserted.</li>
</ul>
</li>
</ul>
<h2 id="support-for-asynchronous-request-handling" tabindex="-1"><a class="header-anchor" href="#support-for-asynchronous-request-handling" aria-hidden="true">#</a> Support For Asynchronous Request Handling</h2>
<p>Some providers satisfy a suggestion request in an asynchronous way (e.g. it may need to dispatch requests to an external process to get suggestions). To asynchronously provide suggestions, simply return a <code v-pre>Promise</code> from your <code v-pre>getSuggestions</code>:</p>
<div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre v-pre class="language-coffeescript"><code><span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
    <span class="token comment"># Build your suggestions here asynchronously...</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>suggestions<span class="token punctuation">)</span> <span class="token comment"># When you are done, call resolve and pass your suggestions to it</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-suggestion-request-s-options-object" tabindex="-1"><a class="header-anchor" href="#the-suggestion-request-s-options-object" aria-hidden="true">#</a> The Suggestion Request's Options Object</h2>
<p>An <code v-pre>options</code> object will be passed to your <code v-pre>getSuggestions</code> function, with the following properties:</p>
<ul>
<li><code v-pre>editor</code>: The current <code v-pre>TextEditor</code></li>
<li><code v-pre>bufferPosition</code>: The position of the cursor</li>
<li><code v-pre>scopeDescriptor</code>: The <a href="http://flight-manual.atom.io/behind-atom/sections/scoped-settings-scopes-and-scope-descriptors/#scope-descriptors" target="_blank" rel="noopener noreferrer">scope descriptor<ExternalLinkIcon/></a> for the current cursor position</li>
<li><code v-pre>prefix</code>: The word characters immediately preceding the current cursor position</li>
<li><code v-pre>activatedManually</code>: Whether the autocomplete request was initiated by the user (e.g. with ctrl+space)</li>
</ul>
<h2 id="suggestions" tabindex="-1"><a class="header-anchor" href="#suggestions" aria-hidden="true">#</a> Suggestions</h2>
<div class="language-coffee ext-coffee line-numbers-mode"><pre v-pre class="language-coffee"><code>provider <span class="token operator">=</span>
  <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.source.js, .source.coffee'</span>
  <span class="token property">disableForSelector</span><span class="token operator">:</span> <span class="token string">'.source.js .comment'</span>

  <span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">,</span> scopeDescriptor<span class="token punctuation">,</span> prefix<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
      <span class="token comment"># Find your suggestions here</span>
      suggestion <span class="token operator">=</span>
        <span class="token property">text</span><span class="token operator">:</span> <span class="token string">'someText'</span> <span class="token comment"># OR</span>
        <span class="token property">snippet</span><span class="token operator">:</span> <span class="token string">'someText(${1:myArg})'</span>
        <span class="token property">displayText</span><span class="token operator">:</span> <span class="token string">'someText'</span> <span class="token comment"># (optional)</span>
        <span class="token property">replacementPrefix</span><span class="token operator">:</span> <span class="token string">'so'</span> <span class="token comment"># (optional)</span>
        <span class="token property">type</span><span class="token operator">:</span> <span class="token string">'function'</span> <span class="token comment"># (optional)</span>
        <span class="token property">leftLabel</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">leftLabelHTML</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">rightLabel</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">rightLabelHTML</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">className</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">iconHTML</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">description</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">descriptionMoreURL</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token comment"># (optional)</span>
        <span class="token property">characterMatchIndices</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment"># (optional)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>suggestion<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your suggestions should be returned from <code v-pre>getSuggestions</code> as an array of objects with the following properties:</p>
<ul>
<li><code v-pre>text</code> (required; or <code v-pre>snippet</code>): The text which will be inserted into the editor, in place of the prefix</li>
<li><code v-pre>snippet</code> (required; or <code v-pre>text</code>): A snippet string. This will allow users to tab through function arguments or other options. e.g. <code v-pre>'myFunction(${1:arg1}, ${2:arg2})'</code>. See the <a href="https://github.com/pulsar-edit/snippets" target="_blank" rel="noopener noreferrer">snippets<ExternalLinkIcon/></a> package for more information.</li>
<li><code v-pre>displayText</code> (optional): A string that will show in the UI for this suggestion. When not set, <code v-pre>snippet || text</code> is displayed. This is useful when <code v-pre>snippet</code> or <code v-pre>text</code> displays too much, and you want to simplify. e.g. <code v-pre>{type: 'attribute', snippet: 'class=&quot;$0&quot;$1', displayText: 'class'}</code></li>
<li><code v-pre>replacementPrefix</code> (optional): The text immediately preceding the cursor, which will be replaced by the <code v-pre>text</code>. If not provided, the prefix passed into <code v-pre>getSuggestions</code> will be used.</li>
<li><code v-pre>type</code> (optional): The suggestion type. It will be converted into an icon shown against the suggestion. <a href="https://github.com/atom-community/autocomplete-plus/pull/334" target="_blank" rel="noopener noreferrer">screenshot<ExternalLinkIcon/></a>. Predefined styles exist for <code v-pre>variable</code>, <code v-pre>constant</code>, <code v-pre>property</code>, <code v-pre>value</code>, <code v-pre>method</code>, <code v-pre>function</code>, <code v-pre>class</code>, <code v-pre>type</code>, <code v-pre>keyword</code>, <code v-pre>tag</code>, <code v-pre>snippet</code>, <code v-pre>import</code>, <code v-pre>require</code>. This list represents nearly everything being colorized.</li>
<li><code v-pre>leftLabel</code> (optional): This is shown before the suggestion. Useful for return values. <a href="https://github.com/atom-community/autocomplete-plus/pull/334" target="_blank" rel="noopener noreferrer">screenshot<ExternalLinkIcon/></a></li>
<li><code v-pre>leftLabelHTML</code> (optional): Use this instead of <code v-pre>leftLabel</code> if you want to use html for the left label.</li>
<li><code v-pre>rightLabel</code> (optional): An indicator (e.g. <code v-pre>function</code>, <code v-pre>variable</code>) denoting the &quot;kind&quot; of suggestion this represents</li>
<li><code v-pre>rightLabelHTML</code> (optional): Use this instead of <code v-pre>rightLabel</code> if you want to use html for the right label.</li>
<li><code v-pre>className</code> (optional): Class name for the suggestion in the suggestion list. Allows you to style your suggestion via CSS, if desired</li>
<li><code v-pre>iconHTML</code> (optional): If you want complete control over the icon shown against the suggestion. e.g. <code v-pre> iconHTML: '&lt;i class=&quot;icon-move-right&quot;&gt;&lt;/i&gt;'</code> <a href="https://github.com/atom-community/autocomplete-plus/pull/334" target="_blank" rel="noopener noreferrer">screenshot<ExternalLinkIcon/></a>. The background color of the icon will still be determined (by default) from the <code v-pre>type</code>.</li>
<li><code v-pre>description</code> (optional): A doc-string summary or short description of the suggestion. When specified, it will be displayed at the bottom of the suggestions list.</li>
<li><code v-pre>descriptionMoreURL</code> (optional): A url to the documentation or more information about this suggestion. When specified, a <code v-pre>More..</code> link will be displayed in the description area.
<img src="@source/docs/packages_wiki/autocomplete-plus/autocomplete-description.jpg" alt="autocomplete-description"></li>
<li><code v-pre>characterMatchIndices</code> (optional): A list of indexes where the characters in the prefix appear in this suggestion's text. e.g. &quot;foo&quot; in &quot;foo_bar&quot; would be <code v-pre>[0, 1, 2]</code>.</li>
</ul>
<h2 id="registering-your-provider-with-autocomplete" tabindex="-1"><a class="header-anchor" href="#registering-your-provider-with-autocomplete" aria-hidden="true">#</a> Registering Your Provider With <code v-pre>autocomplete+</code></h2>
<h3 id="api-4-0-0" tabindex="-1"><a class="header-anchor" href="#api-4-0-0" aria-hidden="true">#</a> API 4.0.0</h3>
<p>In your <code v-pre>package.json</code>, add:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"providedServices"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"autocomplete.provider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"versions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"4.0.0"</span><span class="token operator">:</span> <span class="token string">"provide"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, in your <code v-pre>main.coffee</code> (or whatever file you define as your <code v-pre>main</code> in <code v-pre>package.json</code> i.e. <code v-pre>&quot;main&quot;: &quot;./lib/your-main&quot;</code> would imply <code v-pre>your-main.coffee</code>), add the following:</p>
<p>For a single provider:</p>
<div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre v-pre class="language-coffeescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
  <span class="token property">provide</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token class-member variable">@yourProviderHere</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>For multiple providers, just return an array:</p>
<div class="language-coffeescript ext-coffeescript line-numbers-mode"><pre v-pre class="language-coffeescript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
  <span class="token property">provide</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">></span> <span class="token punctuation">[</span><span class="token class-member variable">@yourProviderHere</span><span class="token punctuation">,</span> <span class="token class-member variable">@yourOtherProviderHere</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="provider-examples" tabindex="-1"><a class="header-anchor" href="#provider-examples" aria-hidden="true">#</a> Provider Examples</h2>
<p>We've taken to making each provider its own clean repo:</p>
<ul>
<li><a href="https://github.com/pulsar-edit/autocomplete-css" target="_blank" rel="noopener noreferrer">Autocomplete CSS<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/pular-edit/autocomplete-html" target="_blank" rel="noopener noreferrer">Autocomplete HTML<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/pulsar-edit/autocomplete-snippets" target="_blank" rel="noopener noreferrer">Autocomplete Snippets<ExternalLinkIcon/></a></li>
</ul>
<p>Check out the lib directory in each of these for the code!</p>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h2>
<h3 id="generating-a-new-prefix" tabindex="-1"><a class="header-anchor" href="#generating-a-new-prefix" aria-hidden="true">#</a> Generating a new prefix</h3>
<p>The <code v-pre>prefix</code> passed to <code v-pre>getSuggestions</code> may not be sufficient for your language. You may need to generate your own prefix. Here is a pattern to use your own prefix:</p>
<div class="language-coffee ext-coffee line-numbers-mode"><pre v-pre class="language-coffee"><code>provider <span class="token operator">=</span>
  <span class="token property">selector</span><span class="token operator">:</span> <span class="token string">'.source.js, .source.coffee'</span>

  <span class="token property">getSuggestions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
    prefix <span class="token operator">=</span> @<span class="token function">getPrefix</span><span class="token punctuation">(</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">)</span>

    <span class="token keyword">new</span> <span class="token class-name">Promise</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
      suggestion <span class="token operator">=</span>
        <span class="token property">text</span><span class="token operator">:</span> <span class="token string">'someText'</span>
        <span class="token property">replacementPrefix</span><span class="token operator">:</span> prefix
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>suggestion<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token property">getPrefix</span><span class="token operator">:</span> <span class="token punctuation">(</span>editor<span class="token punctuation">,</span> bufferPosition<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>
    <span class="token comment"># Whatever your prefix regex might be</span>
    regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[\w0-9_-]+$</span><span class="token regex-delimiter">/</span></span>

    <span class="token comment"># Get the text for the line up to the triggered buffer position</span>
    line <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getTextInRange</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>bufferPosition<span class="token punctuation">.</span>row<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> bufferPosition<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment"># Match the regex to the line, and return the match</span>
    line<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>regex<span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">or</span> <span class="token string">''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


