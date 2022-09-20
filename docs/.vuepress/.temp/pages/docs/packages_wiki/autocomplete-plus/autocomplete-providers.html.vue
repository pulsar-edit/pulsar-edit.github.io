<template><div><h1 id="autocomplete-providers" tabindex="-1"><a class="header-anchor" href="#autocomplete-providers" aria-hidden="true">#</a> Autocomplete Providers</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Please note that its possible this is outdated, as its original version was published by @'percova' on Nov 12, 2019.</p>
</div>
<h2 id="built-in-providers" tabindex="-1"><a class="header-anchor" href="#built-in-providers" aria-hidden="true">#</a> Built-In Providers</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Grammar</th>
<th style="text-align:left">Selector</th>
<th style="text-align:left">Provider</th>
<th style="text-align:left">Status</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">All</td>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><code v-pre>SymbolProvider</code></td>
<td style="text-align:left"><code v-pre>Default Provider</code></td>
</tr>
<tr>
<td style="text-align:left">All</td>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><code v-pre>FuzzyProvider</code></td>
<td style="text-align:left"><code v-pre>Deprecated</code></td>
</tr>
</tbody>
</table>
<h2 id="providers-for-built-in-grammars" tabindex="-1"><a class="header-anchor" href="#providers-for-built-in-grammars" aria-hidden="true">#</a> Providers For Built-In Grammars</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Grammar</th>
<th style="text-align:left">Selector</th>
<th style="text-align:left">Provider</th>
<th style="text-align:left">API Status</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Null Grammar</td>
<td style="text-align:left"><code v-pre>.text.plain.null-grammar</code></td>
<td style="text-align:left"> </td>
<td style="text-align:left"> </td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-coffee-script" target="_blank" rel="noopener noreferrer">CoffeeScript (Literate)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.litcoffee</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-coffee-script" target="_blank" rel="noopener noreferrer">CoffeeScript<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.coffee</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-json" target="_blank" rel="noopener noreferrer">JSON<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.json</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-shellscript" target="_blank" rel="noopener noreferrer">Shell Session<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.shell-session</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-shellscript" target="_blank" rel="noopener noreferrer">Shell Script<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.shell</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-hyperlink" target="_blank" rel="noopener noreferrer">Hyperlink<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.hyperlink</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-todo" target="_blank" rel="noopener noreferrer">TODO<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.todo</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-c" target="_blank" rel="noopener noreferrer">C<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.c</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-clang" target="_blank" rel="noopener noreferrer">autocomplete-clang<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-c" target="_blank" rel="noopener noreferrer">C++<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.cpp</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-clang" target="_blank" rel="noopener noreferrer">autocomplete-clang<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-clojure" target="_blank" rel="noopener noreferrer">Clojure<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.clojure</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/proto-repl" target="_blank" rel="noopener noreferrer">proto-repl<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-css" target="_blank" rel="noopener noreferrer">CSS<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.css</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-css" target="_blank" rel="noopener noreferrer">autocomplete-css<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-gfm" target="_blank" rel="noopener noreferrer">GitHub Markdown<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.gfm</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-bibtex" target="_blank" rel="noopener noreferrer">autocomplete-bibtex<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.1.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-git" target="_blank" rel="noopener noreferrer">Git Config<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.git-config</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-git" target="_blank" rel="noopener noreferrer">Git Commit Message<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.git-commit</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-git" target="_blank" rel="noopener noreferrer">Git Rebase Message<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.git-rebase</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-go" target="_blank" rel="noopener noreferrer">HTML (Go)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.gohtml</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-go" target="_blank" rel="noopener noreferrer">Go<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.go</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/go-plus" target="_blank" rel="noopener noreferrer">go-plus<ExternalLinkIcon/></a>, <a href="https://atom.io/packages/autocomplete-go" target="_blank" rel="noopener noreferrer">autocomplete-go<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-go" target="_blank" rel="noopener noreferrer">Go Template<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.gotemplate</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-html" target="_blank" rel="noopener noreferrer">HTML<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.basic</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-html" target="_blank" rel="noopener noreferrer">autocomplete-html<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-javascript" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.js</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/atom-ternjs" target="_blank" rel="noopener noreferrer">atom-ternjs<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-java" target="_blank" rel="noopener noreferrer">Java Properties<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.java-properties</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-javascript" target="_blank" rel="noopener noreferrer">Regular Expressions (JavaScript)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.js.regexp</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-java" target="_blank" rel="noopener noreferrer">JavaServer Pages<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.jsp</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-jsp" target="_blank" rel="noopener noreferrer">autocomplete-jsp<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-java" target="_blank" rel="noopener noreferrer">Java<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.java</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-java-minus" target="_blank" rel="noopener noreferrer">autocomplete-java-minus<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-java" target="_blank" rel="noopener noreferrer">JUnit Test Report<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.junit-test-report</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-make" target="_blank" rel="noopener noreferrer">Makefile<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.makefile</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-less" target="_blank" rel="noopener noreferrer">LESS<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.css.less</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-mustache" target="_blank" rel="noopener noreferrer">SQL (Mustache)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.sql.mustache</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-mustache" target="_blank" rel="noopener noreferrer">HTML (Mustache)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.mustache</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-objective-c" target="_blank" rel="noopener noreferrer">Objective-C++<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.objcpp</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-clang" target="_blank" rel="noopener noreferrer">autocomplete-clang<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-objective-c" target="_blank" rel="noopener noreferrer">Strings File<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.strings</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-objective-c" target="_blank" rel="noopener noreferrer">Objective-C<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.objc</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-clang" target="_blank" rel="noopener noreferrer">autocomplete-clang<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-property-list" target="_blank" rel="noopener noreferrer">Property List (XML)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.xml.plist</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-property-list" target="_blank" rel="noopener noreferrer">Property List (Old-Style)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.plist</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-perl" target="_blank" rel="noopener noreferrer">Perl<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.perl</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-php" target="_blank" rel="noopener noreferrer">PHP<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.php</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">PHP</td>
<td style="text-align:left"><code v-pre>.source.php</code></td>
<td style="text-align:left"><a href="https://github.com/php-integrator/atom-autocompletion" target="_blank" rel="noopener noreferrer">php-integrator-autocomplete-plus<ExternalLinkIcon/></a>, <a href="https://github.com/Peekmo/atom-autocomplete-php" target="_blank" rel="noopener noreferrer">atom-autocomplete-php<ExternalLinkIcon/></a>, <a href="https://atom.io/packages/autocomplete-php" target="_blank" rel="noopener noreferrer">autocomplete-php<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-python" target="_blank" rel="noopener noreferrer">Python Console<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.python.console</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-python" target="_blank" rel="noopener noreferrer">Python Traceback<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.python.traceback</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-python" target="_blank" rel="noopener noreferrer">Regular Expressions (Python)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.regexp.python</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-python" target="_blank" rel="noopener noreferrer">Python<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.python</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-python" target="_blank" rel="noopener noreferrer">autocomplete-python<ExternalLinkIcon/></a>, <a href="https://atom.io/packages/autocomplete-python-jedi" target="_blank" rel="noopener noreferrer">autocomplete-python-jedi<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby-on-rails" target="_blank" rel="noopener noreferrer">Ruby on Rails (RJS)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.ruby.rails.rjs</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby" target="_blank" rel="noopener noreferrer">Ruby<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.ruby</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby" target="_blank" rel="noopener noreferrer">HTML (Ruby - ERB)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.erb</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby-on-rails" target="_blank" rel="noopener noreferrer">HTML (Rails)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.html.ruby</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby-on-rails" target="_blank" rel="noopener noreferrer">SQL (Rails)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.sql.ruby</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby-on-rails" target="_blank" rel="noopener noreferrer">JavaScript (Rails)<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.js.rails .source.js.jquery</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-ruby-on-rails" target="_blank" rel="noopener noreferrer">Ruby on Rails<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.ruby.rails</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-sass" target="_blank" rel="noopener noreferrer">Sass<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.sass</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-text" target="_blank" rel="noopener noreferrer">Plain Text<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.plain</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-sass" target="_blank" rel="noopener noreferrer">SCSS<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.css.scss</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-sql" target="_blank" rel="noopener noreferrer">SQL<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.sql</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-sql" target="_blank" rel="noopener noreferrer">autocomplete-sql<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-toml" target="_blank" rel="noopener noreferrer">TOML<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.toml</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-xml" target="_blank" rel="noopener noreferrer">XSL<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.xml.xsl</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-xml" target="_blank" rel="noopener noreferrer">XML<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.xml</code></td>
<td style="text-align:left"><a href="https://github.com/pleonex/atom-autocomplete-xml" target="_blank" rel="noopener noreferrer">autocomplete-xml<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-yaml" target="_blank" rel="noopener noreferrer">YAML<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.yaml</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h2 id="providers-for-third-party-grammars" tabindex="-1"><a class="header-anchor" href="#providers-for-third-party-grammars" aria-hidden="true">#</a> Providers For Third-Party Grammars</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Grammar</th>
<th style="text-align:left">Selector</th>
<th style="text-align:left">Provider</th>
<th style="text-align:left">API Status</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/mavensmate-atom" target="_blank" rel="noopener noreferrer">Apex<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.apex</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/mavensmate-atom" target="_blank" rel="noopener noreferrer">mavensmate-atom<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-asciidoc" target="_blank" rel="noopener noreferrer">AsciiDoc<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.asciidoc</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-asciidoc" target="_blank" rel="noopener noreferrer">autocomplete-asciidoc<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-csharp" target="_blank" rel="noopener noreferrer">C#<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.cs</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/omnisharp-atom" target="_blank" rel="noopener noreferrer">omnisharp-atom<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-computercraft" target="_blank" rel="noopener noreferrer">ComputerCraft<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.computercraft</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-computercraft" target="_blank" rel="noopener noreferrer">autocomplete-computercraft<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-curry" target="_blank" rel="noopener noreferrer">Curry<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.curry</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-curry" target="_blank" rel="noopener noreferrer">autocomplete-curry<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>4.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://github.com/radicaled/dart-tools" target="_blank" rel="noopener noreferrer">Dart<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.dart</code></td>
<td style="text-align:left"><a href="https://github.com/radicaled/dart-tools" target="_blank" rel="noopener noreferrer">dart-tools<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://github.com/dart-atom/dartlang" target="_blank" rel="noopener noreferrer">Dart<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.dart</code></td>
<td style="text-align:left"><a href="https://github.com/dart-atom/dartlang" target="_blank" rel="noopener noreferrer">dartlang<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-elixir" target="_blank" rel="noopener noreferrer">Elixir<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.elixir</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-elixir" target="_blank" rel="noopener noreferrer">autocomplete-elixir<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-erlang" target="_blank" rel="noopener noreferrer">Erlang<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.erlang</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-erlang" target="_blank" rel="noopener noreferrer">autocomplete-erlang<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-glsl" target="_blank" rel="noopener noreferrer">GLSL<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.glsl</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-glsl" target="_blank" rel="noopener noreferrer">autocomplete-glsl<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-hack" target="_blank" rel="noopener noreferrer">HackLang<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.hack</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-hack" target="_blank" rel="noopener noreferrer">autocomplete-hack<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-haskell" target="_blank" rel="noopener noreferrer">Haskell<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.haskell</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-haskell" target="_blank" rel="noopener noreferrer">autocomplete-haskell<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-haskell" target="_blank" rel="noopener noreferrer">Haskell<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.haskell</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/ide-haskell" target="_blank" rel="noopener noreferrer">ide-haskell<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-haxe" target="_blank" rel="noopener noreferrer">Haxe<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.haxe</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-haxe" target="_blank" rel="noopener noreferrer">autocomplete-haxe<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.1.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-latex" target="_blank" rel="noopener noreferrer">LaTeX<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.tex.latex</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-latex-cite" target="_blank" rel="noopener noreferrer">autocomplete-latex-cite<ExternalLinkIcon/></a>, <a href="https://atom.io/packages/autocomplete-latex-references" target="_blank" rel="noopener noreferrer">autocomplete-latex-references<ExternalLinkIcon/></a>, <a href="https://atom.io/packages/autocomplete-glossaries" target="_blank" rel="noopener noreferrer">autocomplete-glossaries<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://github.com/marko-js/atom-language-marko" target="_blank" rel="noopener noreferrer">Marko<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.text.marko</code></td>
<td style="text-align:left"><a href="https://github.com/marko-js/atom-autocomplete-marko" target="_blank" rel="noopener noreferrer">autocomplete-marko<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://github.com/alohaas/language-nunjucks" target="_blank" rel="noopener noreferrer">Nunjucks<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.nunjucks, .text.html.nunjucks</code></td>
<td style="text-align:left"><a href="https://github.com/puranjayjain/autocomplete-nunjucks" target="_blank" rel="noopener noreferrer">autocomplete-nunjucks<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/pig" target="_blank" rel="noopener noreferrer">Pig<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.pig</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/pig" target="_blank" rel="noopener noreferrer">pig<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-kdb-q" target="_blank" rel="noopener noreferrer">Q/K<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.q</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-kdb-q" target="_blank" rel="noopener noreferrer">autocomplete-kdb-q<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-rust" target="_blank" rel="noopener noreferrer">Rust<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.rust</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/racer" target="_blank" rel="noopener noreferrer">racer<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/language-rdf" target="_blank" rel="noopener noreferrer">Turtle<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.turtle</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/turtle-completer" target="_blank" rel="noopener noreferrer">turtle-completer<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/atom-typescript" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.source.ts</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/atom-typescript" target="_blank" rel="noopener noreferrer">atom-typescript<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>8.11.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://atom.io/packages/mavensmate-atom" target="_blank" rel="noopener noreferrer">Visualforce<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.visualforce</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/mavensmate-atom" target="_blank" rel="noopener noreferrer">mavensmate-atom<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.1.0</code></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki/Whitelisting-code-which-flags-errors" target="_blank" rel="noopener noreferrer">WordPress Coding Standard Whitelist Flags<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>.php .comment</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-wpcs-flags" target="_blank" rel="noopener noreferrer">autocomplete-wpcs-flags<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
</tbody>
</table>
<h2 id="providers-not-tied-to-a-specific-grammar" tabindex="-1"><a class="header-anchor" href="#providers-not-tied-to-a-specific-grammar" aria-hidden="true">#</a> Providers Not Tied To A Specific Grammar</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Selector</th>
<th style="text-align:left">Provider</th>
<th style="text-align:left">Status</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-emojis" target="_blank" rel="noopener noreferrer">autocomplete-emojis<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-snippets" target="_blank" rel="noopener noreferrer">autocomplete-snippets<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-paths" target="_blank" rel="noopener noreferrer">autocomplete-paths<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/atom-path-intellisense" target="_blank" rel="noopener noreferrer">atom-path-intellisense<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.2.1</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/atom-ctags" target="_blank" rel="noopener noreferrer">atom-ctags<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.source.js, .source.jsx</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/ide-flow" target="_blank" rel="noopener noreferrer">ide-flow<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.1.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.source.js, .source.jsx, .source.coffee</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-underdash" target="_blank" rel="noopener noreferrer">autocomplete-underdash<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>.source.css</code>, <code v-pre>.source.css.less</code>, <code v-pre>.source.sass</code>, <code v-pre>.source.css.scss</code>, <code v-pre>.source.stylus</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/project-palette-finder" target="_blank" rel="noopener noreferrer">project-palette-finder<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>1.1.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/you-complete-me" target="_blank" rel="noopener noreferrer">you-complete-me<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>English word autocompetion with the hint of explanation.</code></td>
<td style="text-align:left"><a href="https://atom.io/packages/autocomplete-en-en" target="_blank" rel="noopener noreferrer">autocomplete-en-en<ExternalLinkIcon/></a></td>
<td style="text-align:left"><code v-pre>2.0.0</code></td>
</tr>
</tbody>
</table>
<p>--</p>
<h2 id="providers-requested-by-the-community" tabindex="-1"><a class="header-anchor" href="#providers-requested-by-the-community" aria-hidden="true">#</a> Providers Requested By The Community</h2>
<p>If you'd like to contribute and are interested in learning how to write an <code v-pre>autocomplete-plus</code> <RouterLink to="/packages_wiki/autocomplete-plus/provider-api.html"><code v-pre>Provider</code></RouterLink>, start here:</p>
<ul>
<li>Emmet: https://github.com/atom-community/autocomplete-plus/issues/156</li>
<li>LESS: https://github.com/atom-community/autocomplete-plus/issues/151</li>
</ul>
<h2 id="packages-that-claim-autocomplete-but-are-not-api-1-0-0-compatible" tabindex="-1"><a class="header-anchor" href="#packages-that-claim-autocomplete-but-are-not-api-1-0-0-compatible" aria-hidden="true">#</a> Packages That Claim Autocomplete, But Are Not API 1.0.0 Compatible</h2>
<ul>
<li>https://github.com/maun/atom-rust-plus (never published, uses <a href="https://atom.io/packages/autocomplete-plus-async" target="_blank" rel="noopener noreferrer">autocomplete-plus-async<ExternalLinkIcon/></a>)</li>
<li>https://atom.io/packages/ios (doesn't make use of autocomplete-plus)</li>
<li>https://atom.io/packages/language-hn (see: https://github.com/ignaciocases/language-hn/issues/1 for API 1.0.0 compatibility)</li>
<li>https://atom.io/packages/rsense (see: https://github.com/rsense/atom-rsense/issues/1 for API 1.0.0 compatibility)</li>
</ul>
<h2 id="deprecated-providers" tabindex="-1"><a class="header-anchor" href="#deprecated-providers" aria-hidden="true">#</a> Deprecated Providers</h2>
<p>If you are using one of these providers, please uninstall the package as it is no longer maintained.</p>
<ul>
<li>https://github.com/vito/atom-autocomplete-gocode (deprecated, use <a href="https://atom.io/packages/go-plus" target="_blank" rel="noopener noreferrer">go-plus<ExternalLinkIcon/></a> instead)</li>
<li>https://github.com/tinloaf/autocomplete-plus-python-jedi (deprecated, use <a href="https://atom.io/packages/autocomplete-python" target="_blank" rel="noopener noreferrer">autocomplete-python<ExternalLinkIcon/></a> instead)</li>
</ul>
<h2 id="other-forks-of-autocomplete" tabindex="-1"><a class="header-anchor" href="#other-forks-of-autocomplete" aria-hidden="true">#</a> Other Forks Of Autocomplete</h2>
<ul>
<li>https://github.com/xumingthepoet/autocomplete-plus-elixir (never published)</li>
<li>https://atom.io/packages/autocomplete-jedi (fork of <code v-pre>autocomplete</code>)</li>
<li>https://atom.io/packages/rubymotion (extends default autocomplete package)</li>
</ul>
</div></template>


