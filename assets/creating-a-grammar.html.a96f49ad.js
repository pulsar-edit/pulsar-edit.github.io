import{_ as o,o as i,c as r,a as e,b as n,d as a,f as t,r as l}from"./app.a3485bf5.js";const c={},p=e("h3",{id:"creating-a-grammar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-a-grammar","aria-hidden":"true"},"#"),n(" Creating a Grammar")],-1),d={href:"http://tree-sitter.github.io/tree-sitter",target:"_blank",rel:"noopener noreferrer"},u={href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree",target:"_blank",rel:"noopener noreferrer"},h=e("em",null,"syntax trees",-1),m=t('<p>This syntax tree gives Atom a comprehensive understanding of the structure of your code, which has several benefits:</p><ol><li>Syntax highlighting will not break because of formatting changes.</li><li>Code folding will work regardless of how your code is indented.</li><li>Editor features can operate on the syntax tree. For instance, the <code>Select Larger Syntax Node</code> and <code>Select Smaller Syntax Node</code> allow you to select conceptually larger and smaller chunks of your code.</li><li>Community packages can use the syntax tree to manipulate code intelligently.</li></ol><p>Tree-sitter grammars are relatively new. Many languages in Atom are still supported by <a href="../creating-a-legacy-textmate-grammar">TextMate grammars</a>, though we intend to phase these out over time.</p><p>If you&#39;re adding support for a new language, you&#39;re in the right place!</p><h4 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h4><p>There are two components required to use Tree-sitter in Atom: a <em>parser</em> and a <em>grammar</em> file.</p><h4 id="the-parser" tabindex="-1"><a class="header-anchor" href="#the-parser" aria-hidden="true">#</a> The Parser</h4>',7),g={href:"https://en.wikipedia.org/wiki/Context-free_grammar",target:"_blank",rel:"noopener noreferrer"},v={href:"http://tree-sitter.github.io/tree-sitter/creating-parsers",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/tree-sitter",target:"_blank",rel:"noopener noreferrer"},k={href:"https://npmjs.com",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"name",-1),y=e("code",null,"version",-1),_=e("code",null,"package.json",-1),x=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tree-sitter-mylanguage&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>then run the command <code>npm publish</code>.</p><h4 id="the-package" tabindex="-1"><a class="header-anchor" href="#the-package" aria-hidden="true">#</a> The Package</h4><p>Once you have a Tree-sitter parser that is available on npm, you can use it in your Atom package. Packages with grammars are, by convention, always named starting with <em>language</em>. You&#39;ll need a folder with a <code>package.json</code>, a <code>grammars</code> subdirectory, and a single <code>json</code> or <code>cson</code> file in the <code>grammars</code> directory, which can be named anything.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>language-mylanguage
\u251C\u2500\u2500 LICENSE
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 grammars
\u2502   \u2514\u2500\u2500 mylanguage.cson
\u2514\u2500\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="the-grammar-file" tabindex="-1"><a class="header-anchor" href="#the-grammar-file" aria-hidden="true">#</a> The Grammar File</h4><p>The <code>mylanguage.cson</code> file specifies how Atom should use the parser you created.</p><h4 id="basic-fields" tabindex="-1"><a class="header-anchor" href="#basic-fields" aria-hidden="true">#</a> Basic Fields</h4><p>It starts with some required fields:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">name</span><span class="token operator">:</span> <span class="token string">&#39;My Language&#39;</span>
<span class="token property">scopeName</span><span class="token operator">:</span> <span class="token string">&#39;mylanguage&#39;</span>
<span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;tree-sitter&#39;</span>
<span class="token property">parser</span><span class="token operator">:</span> <span class="token string">&#39;tree-sitter-mylanguage&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),w=e("li",null,[e("code",null,"scopeName"),n(" - A unique, stable identifier for the language. Atom users will use this in configuration files if they want to specify custom configuration based on the language.")],-1),T=e("li",null,[e("code",null,"name"),n(" - A human readable name for the language.")],-1),q=e("code",null,"parser",-1),S={href:"https://nodejs.org/api/modules.html#modules_require",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"require()",-1),A=e("li",null,[e("code",null,"type"),n(" - This should have the value "),e("code",null,"tree-sitter"),n(" to indicate to Atom that this is a Tree-sitter grammar and not a "),e("a",{href:"../creating-a-legacy-textmate-grammar"},"TextMate grammar"),n(".")],-1),C=t(`<h4 id="language-recognition" tabindex="-1"><a class="header-anchor" href="#language-recognition" aria-hidden="true">#</a> Language Recognition</h4><p>Next, the file should contain some fields that indicate to Atom <em>when</em> this language should be used. These fields are all optional.</p><ul><li><code>fileTypes</code> - An array of filename <em>suffixes</em>. The grammar will be used for files whose names end with one of these suffixes. Note that the suffix may be an entire filename.</li><li><code>firstLineRegex</code> - A regex pattern that will be tested against the first line of the file. The grammar will be used if this regex matches.</li><li><code>contentRegex</code> - A regex pattern that will be tested against the contents of the file in order to break ties in cases where <em>multiple</em> grammars matched the file using the above two criteria. If the <code>contentRegex</code> matches, this grammar will be preferred over another grammar with no <code>contentRegex</code>. If the <code>contentRegex</code> does <em>not</em> match, a grammar with no <code>contentRegex</code> will be preferred over this one.</li></ul><h4 id="syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#syntax-highlighting" aria-hidden="true">#</a> Syntax Highlighting</h4><p>The HTML classes that Atom uses for syntax highlighting do not correspond directly to nodes in the syntax tree. Instead, Tree-sitter grammar files specify <em>scope mappings</em> that specify which classes should be applied to which syntax nodes. The <code>scopes</code> object controls these scope mappings. Its keys are CSS selectors that select nodes in the syntax tree. Its values can be of several different types.</p><p>Here is a simple example:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">scopes</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;call_expression &gt; identifier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;entity.name.function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This entry means that, in the syntax tree, any <code>identifier</code> node whose parent is a <code>call_expression</code> should be highlighted using three classes: <code>syntax--entity</code>, <code>syntax--name</code>, and <code>syntax--function</code>.</p>`,8),I={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,">",-1),E=e("code",null,"'call_expression identifier'",-1),H=e("code",null,"identifier",-1),L=e("code",null,"call_expression",-1),M=t(`<h5 id="advanced-selectors" tabindex="-1"><a class="header-anchor" href="#advanced-selectors" aria-hidden="true">#</a> Advanced Selectors</h5><p>The keys of the <code>scopes</code> object can also contain <em>multiple</em> CSS selectors, separated by commas, similar to CSS files. The triple-quote syntax in CSON makes it convenient to write keys like this on multiple lines:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">scopes</span><span class="token operator">:</span>
  <span class="token multiline-string string">&#39;&#39;&#39;
  function_declaration &gt; identifier,
  call_expression &gt; identifier,
  call_expression &gt; field_expression &gt; field_identifier
  &#39;&#39;&#39;</span><span class="token operator">:</span> <span class="token string">&#39;entity.name.function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,":nth-child",-1),P=e("code",null,"identifier",-1),z=e("code",null,"singleton_method",-1),B=t(`<div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">scopes</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;singleton_method &gt; identifier:nth-child(3)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;entity.name.function&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),G=e("em",null,"anonymous",-1),J=e("code",null,"(",-1),O=e("code",null,":",-1),U={href:"http://tree-sitter.github.io/tree-sitter/using-parsers#named-vs-anonymous-nodes",target:"_blank",rel:"noopener noreferrer"},V=t('<div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">scopes</span><span class="token operator">:</span>\n  <span class="token multiline-string string">&#39;&#39;&#39;\n    &quot;*&quot;,\n    &quot;/&quot;,\n    &quot;+&quot;,\n    &quot;-&quot;\n  &#39;&#39;&#39;</span><span class="token operator">:</span> <span class="token string">&#39;keyword.operator&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="text-based-mappings" tabindex="-1"><a class="header-anchor" href="#text-based-mappings" aria-hidden="true">#</a> Text-based Mappings</h5><p>You can also apply different classes to a syntax node based on its text. Here are some examples:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">scopes</span><span class="token operator">:</span>\n\n  <span class="token comment"># Apply the classes `syntax--builtin` and `syntax--variable` to all</span>\n  <span class="token comment"># `identifier` nodes whose text is `require`.</span>\n  <span class="token string-property property">&#39;identifier&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">exact</span><span class="token operator">:</span> <span class="token string">&#39;require&#39;</span><span class="token punctuation">,</span> <span class="token property">scopes</span><span class="token operator">:</span> <span class="token string">&#39;builtin.variable&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment"># Apply the classes `syntax--type` and `syntax--integer` to all</span>\n  <span class="token comment"># `primitive_type` nodes whose text starts with `int` or `uint`.</span>\n  <span class="token string-property property">&#39;primitive_type&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">match</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^u?int</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token property">scopes</span><span class="token operator">:</span> <span class="token string">&#39;type.integer&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment"># Apply the classes `syntax--builtin`, `syntax--class`, and</span>\n  <span class="token comment"># `syntax--name` to `constant` nodes with the text `Array`,</span>\n  <span class="token comment"># `Hash` and `String`. For all other `constant` nodes, just</span>\n  <span class="token comment"># apply the classes `syntax--class` and `syntax--name`.</span>\n  <span class="token string-property property">&#39;constant&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span><span class="token property">match</span><span class="token operator">:</span> <span class="token string">&#39;^(Array|Hash|String)$&#39;</span><span class="token punctuation">,</span> <span class="token property">scopes</span><span class="token operator">:</span> <span class="token string">&#39;builtin.class.name&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;class.name&#39;</span>\n  <span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In total there are four types of values that can be associated with selectors in <code>scopes</code>:</p><ul><li>Strings - Each class name in the dot-separated string will be prefixed with <code>syntax--</code> and applied to the selected node.</li><li>Objects with the keys <code>exact</code> and <code>scopes</code> - If the node&#39;s text equals the <code>exact</code> string, the <code>scopes</code> string will be used as described above.</li><li>Objects with the keys <code>match</code> and <code>scopes</code> - If the node&#39;s text matches the <code>match</code> regex pattern, the <code>scopes</code> string will be used as described above.</li><li>Arrays - The elements of the array will be processed from beginning to end. The first element that matches the selected node will be used as describe above.</li></ul><h5 id="specificity" tabindex="-1"><a class="header-anchor" href="#specificity" aria-hidden="true">#</a> Specificity</h5>',7),W=e("code",null,"scopes",-1),Y={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"exact",-1),D=e("code",null,"match",-1),Z=e("em",null,"not",-1),K=e("code",null,"exact",-1),Q=e("code",null,"match",-1),X=t(`<div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">scopes</span><span class="token operator">:</span>
  <span class="token string-property property">&#39;call_expression &gt; identifier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;entity.name.function&#39;</span>

  <span class="token comment"># If we did not include the second selector here, then this rule</span>
  <span class="token comment"># would not apply to identifiers inside of call_expressions,</span>
  <span class="token comment"># because the selector \`call_expression &gt; identifier\` is more</span>
  <span class="token comment"># specific than the selector \`identifier\`.</span>
  <span class="token string-property property">&#39;identifier, call_expression &gt; identifier&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token property">exact</span><span class="token operator">:</span> <span class="token string">&#39;require&#39;</span><span class="token punctuation">,</span> <span class="token property">scopes</span><span class="token operator">:</span> <span class="token string">&#39;builtin.variable&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token property">match</span><span class="token operator">:</span> <span class="token string">&#39;^[A-Z]&#39;</span><span class="token punctuation">,</span> <span class="token property">scopes</span><span class="token operator">:</span> <span class="token string">&#39;constructor&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="language-injection" tabindex="-1"><a class="header-anchor" href="#language-injection" aria-hidden="true">#</a> Language Injection</h4><p>Sometimes, a source file can contain code written in several different languages. Tree-sitter grammars support this situation using a two-part process called <em>language injection</em>. First, an &#39;outer&#39; language must define an <em>injection point</em> - a set of syntax nodes whose text can be parsed using a different language, along with some logic for guessing the <em>name</em> of the other language that should be used. Second, an &#39;inner&#39; language must define an <code>injectionRegex</code> - a regex pattern that will be tested against the language name provided by the injection point.</p>`,3),ee={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates",target:"_blank",rel:"noopener noreferrer"},ne=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// HTML in a template literal</span>
<span class="token keyword">const</span> htmlContent <span class="token operator">=</span> html<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>tree-sitter-javascript</code> parser parses this tagged template literal as a <code>call_expression</code> with two children: an <code>identifier</code> and a <code>template_literal</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(call_expression
  (identifier)
  (template_literal
    (interpolation
      (identifier))))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an injection point that would allow syntax highlighting inside of template literals:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>atom<span class="token punctuation">.</span>grammars<span class="token punctuation">.</span><span class="token function">addInjectionPoint</span><span class="token punctuation">(</span><span class="token string">&quot;source.js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;call_expression&quot;</span><span class="token punctuation">,</span>

	<span class="token function">language</span><span class="token punctuation">(</span><span class="token parameter">callExpression</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">{</span> firstChild <span class="token punctuation">}</span> <span class="token operator">=</span> callExpression<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>firstChild<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;identifier&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> firstChild<span class="token punctuation">.</span>text<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">content</span><span class="token punctuation">(</span><span class="token parameter">callExpression</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">{</span> lastChild <span class="token punctuation">}</span> <span class="token operator">=</span> callExpression<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>lastChild<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&quot;template_string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> lastChild<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>language</code> callback would then be called with every <code>call_expression</code> node in the syntax tree. In the example above, it would retrieve the first child of the <code>call_expression</code>, which is an <code>identifier</code> with the name &quot;html&quot;. The callback would then return the string &quot;html&quot;.</p><p>The <code>content</code> callback would then be called with the same <code>call_expression</code> node and return the <code>template_string</code> node within the <code>call_expression</code> node.</p><p>In order to parse the HTML within the template string, the HTML grammar file would need to specify an <code>injectionRegex</code>:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">injectionRegex</span><span class="token operator">:</span> <span class="token string">&#39;html|HTML&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="code-folding" tabindex="-1"><a class="header-anchor" href="#code-folding" aria-hidden="true">#</a> Code Folding</h4><p>The next field in the grammar file, <code>folds</code>, controls code folding. Its value is an array of <em>fold pattern</em> objects. Fold patterns are used to decide whether or not a syntax node can be folded, and if so, where the fold should start and end. Here are some example fold patterns:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">folds</span><span class="token operator">:</span> <span class="token punctuation">[</span>

  <span class="token comment"># All \`comment\` nodes are foldable. By default, the fold starts at</span>
  <span class="token comment"># the end of the node&#39;s first line, and ends at the beginning</span>
  <span class="token comment"># of the node&#39;s last line.</span>
  <span class="token punctuation">{</span>
    <span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;comment&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># \`if_statement\` nodes are foldable if they contain an anonymous</span>
  <span class="token comment"># &quot;then&quot; token and either an \`elif_clause\` or \`else_clause\` node.</span>
  <span class="token comment"># The fold starts at the end of the &quot;then&quot; token and ends at the</span>
  <span class="token comment"># \`elif_clause\` or \`else_clause\`.</span>
  <span class="token punctuation">{</span>
    <span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;if_statement&#39;</span><span class="token punctuation">,</span>
    <span class="token property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;&quot;then&quot;&#39;</span><span class="token punctuation">}</span>
    <span class="token property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;elif_clause&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;else_clause&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># Any node that starts with an anonymous &quot;(&quot; token and ends with</span>
  <span class="token comment"># an anonymous &quot;)&quot; token is foldable. The fold starts after the</span>
  <span class="token comment"># &quot;(&quot; and ends before the &quot;)&quot;.</span>
  <span class="token punctuation">{</span>
    <span class="token property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;&quot;(&quot;&#39;</span><span class="token punctuation">,</span> <span class="token property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">end</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">type</span><span class="token operator">:</span> <span class="token string">&#39;&quot;)&quot;&#39;</span><span class="token punctuation">,</span> <span class="token property">index</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Fold patterns can have one or more of the following fields:</p><ul><li><code>type</code> - A string or array of strings. In order to be foldable according to this pattern, a syntax node&#39;s type must match one of these strings.</li><li><code>start</code> - An object that is used to identify a <em>child</em> node after which the fold should start. The object can have one or both of the following fields: <ul><li><code>type</code> - A string or array of strings. To start a fold, a child node&#39;s type must match one of these strings.</li><li><code>index</code> - a number that&#39;s used to select a specific child according to its index. Negative values are interpreted as indices relative the last child, so that <code>-1</code> means the last child.</li></ul></li><li><code>end</code> - An object that is used to identify a <em>child</em> node before which the fold should end. It has the same structure as the <code>start</code> object.</li></ul><h4 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h4><p>The last field in the grammar file, <code>comments</code>, controls the behavior of Atom&#39;s <code>Editor: Toggle Line Comments</code> command. Its value is an object with a <code>start</code> field and an optional <code>end</code> field. The start field is a string that should be prepended to or removed from lines in order to comment or un-comment them.</p><p>In JavaScript, it looks like this:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">comments</span><span class="token operator">:</span>
  <span class="token property">start</span><span class="token operator">:</span> <span class="token string">&#39;// &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>end</code> field should be used for languages that only support block comments, not line comments. If present, it will be appended to or removed from the end of the last selected line in order to comment or un-comment the selection.</p><p>In CSS, it would look like this:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token property">comments</span><span class="token operator">:</span>
  <span class="token property">start</span><span class="token operator">:</span> <span class="token string">&#39;/* &#39;</span>
  <span class="token property">end</span><span class="token operator">:</span> <span class="token string">&#39; */&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-packages" tabindex="-1"><a class="header-anchor" href="#example-packages" aria-hidden="true">#</a> Example Packages</h4><p>More examples of all of these features can be found in the Tree-sitter grammars bundled with Atom:</p>`,23),se={href:"https://github.com/atom/language-shellscript",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/atom/language-c",target:"_blank",rel:"noopener noreferrer"},te={href:"https://github.com/atom/language-go",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/atom/language-html",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://github.com/atom/language-javascript",target:"_blank",rel:"noopener noreferrer"},re={href:"https://github.com/atom/language-python",target:"_blank",rel:"noopener noreferrer"},le={href:"https://github.com/atom/language-ruby",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://github.com/atom/language-typescript",target:"_blank",rel:"noopener noreferrer"};function pe(de,ue){const s=l("ExternalLinkIcon");return i(),r("div",null,[p,e("p",null,[n("Atom's syntax highlighting and code folding system is powered by "),e("a",d,[n("Tree-sitter"),a(s)]),n(". Tree-sitter parsers create and maintain full "),e("a",u,[h,a(s)]),n(" representing your code.")]),m,e("p",null,[n("Tree-sitter generates parsers based on "),e("a",g,[n("context-free grammars"),a(s)]),n(" that are typically written in JavaScript. The generated parsers are C libraries that can be used in other applications as well as Atom.")]),e("p",null,[n("They can also be developed and tested at the command line, separately from Atom. Tree-sitter has "),e("a",v,[n("its own documentation page"),a(s)]),n(" on how to create these parsers. The "),e("a",f,[n("Tree-sitter GitHub organization"),a(s)]),n(" also contains a lot of example parsers that you can learn from, each in its own repository.")]),e("p",null,[n("Once you have created a parser, you need to publish it to "),e("a",k,[n("the NPM registry"),a(s)]),n(" to use it in Atom. To do this, make sure you have a "),b,n(" and "),y,n(" in your parser's "),_,n(":")]),x,e("ul",null,[w,T,e("li",null,[q,n(" - The name of the parser node module that will be used for parsing. This string will be passed directly to "),e("a",S,[j,a(s)]),n(" in order to load the parser.")]),A]),C,e("p",null,[n("Note that in this selector, we're using the "),e("a",I,[n("immediate child combinator"),a(s)]),n(" ("),N,n("). Arbitrary descendant selectors without this combinator (for example "),E,n(", which would match any "),H,n(" occurring anywhere within a "),L,n(") are currently not supported.")]),M,e("p",null,[n("You can use the "),e("a",R,[F,n(" pseudo-class"),a(s)]),n(" to select nodes based on their order within their parent. For example, this example selects "),P,n(" nodes which are the fourth (zero-indexed) child of a "),z,n(" node.")]),B,e("p",null,[n("Finally, you can use double-quoted strings in the selectors to select "),G,n(" tokens in the syntax tree, like "),J,n(" and "),O,n(". See "),e("a",U,[n("the Tree-sitter documentation"),a(s)]),n(" for more information about named vs anonymous tokens.")]),V,e("p",null,[n("If multiple selectors in the "),W,n(" object match a node, the node's classes will be decided based on the "),e("a",Y,[n("most specific"),a(s)]),n(" selector. Note that the "),$,n(" and "),D,n(" rules do "),Z,n(" affect specificity, so you may need to supply the same "),K,n(" or "),Q,n(" rules for multiple selectors to ensure that they take precedence over other selectors. You can use the same selector multiple times in a scope mapping, within different comma-separated keys:")]),X,e("p",null,[n("For example, in JavaScript, "),e("a",ee,[n("tagged template literals"),a(s)]),n(" sometimes contain code written in a different language, and the name of the language is often used in the 'tag' function, as shown in this example:")]),ne,e("ul",null,[e("li",null,[e("a",se,[n("Bash"),a(s)])]),e("li",null,[e("a",ae,[n("C"),a(s)])]),e("li",null,[e("a",te,[n("Go"),a(s)])]),e("li",null,[e("a",oe,[n("HTML"),a(s)])]),e("li",null,[e("a",ie,[n("JavaScript"),a(s)])]),e("li",null,[e("a",re,[n("Python"),a(s)])]),e("li",null,[e("a",le,[n("Ruby"),a(s)])]),e("li",null,[e("a",ce,[n("TypeScript"),a(s)])])])])}const me=o(c,[["render",pe],["__file","creating-a-grammar.html.vue"]]);export{me as default};
