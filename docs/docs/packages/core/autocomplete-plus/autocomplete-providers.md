---
lang: en-us
title: Autocomplete Providers
---

# Autocomplete Providers 

::: warning
Please note that its possible this is outdated, as its original version was published by @'percova' on Nov 12, 2019.
:::

## Built-In Providers

| Grammar | Selector | Provider         | Status                               |
|:--------|:---------|:-----------------|:-------------------------------------|
| All     | `*`      | `SymbolProvider` | `Default Provider`                   |
| All     | `*`      | `FuzzyProvider`  | `Deprecated`                         |

## Providers For Built-In Grammars

| Grammar                                                                          | Selector                             | Provider                                                            | API Status |
|:---------------------------------------------------------------------------------|:-------------------------------------|:--------------------------------------------------------------------|:-----------|
| Null Grammar                                                                     | `.text.plain.null-grammar`           | &nbsp;                                                              | &nbsp;     |
| [CoffeeScript (Literate)](https://atom.io/packages/language-coffee-script)       | `.source.litcoffee`                  |                                                                     |            |
| [CoffeeScript](https://atom.io/packages/language-coffee-script)                  | `.source.coffee`                     |                                                                     |            |
| [JSON](https://atom.io/packages/language-json)                                   | `.source.json`                       |                                                                     |            |
| [Shell Session](https://atom.io/packages/language-shellscript)                   | `.text.shell-session`                |                                                                     |            |
| [Shell Script](https://atom.io/packages/language-shellscript)                    | `.source.shell`                      |                                                                     |            |
| [Hyperlink](https://atom.io/packages/language-hyperlink)                         | `.text.hyperlink`                    |                                                                     |            |
| [TODO](https://atom.io/packages/language-todo)                                   | `.text.todo`                         |                                                                     |            |
| [C](https://atom.io/packages/language-c)                                         | `.source.c`                          | [autocomplete-clang](https://atom.io/packages/autocomplete-clang)   |
| [C++](https://atom.io/packages/language-c)                                       | `.source.cpp`                        | [autocomplete-clang](https://atom.io/packages/autocomplete-clang)   | `2.0.0`    |
| [Clojure](https://atom.io/packages/language-clojure)                             | `.source.clojure`                    | [proto-repl](https://atom.io/packages/proto-repl)                   |            |
| [CSS](https://atom.io/packages/language-css)                                     | `.source.css`                        | [autocomplete-css](https://atom.io/packages/autocomplete-css)       | `2.0.0`    |
| [GitHub Markdown](https://atom.io/packages/language-gfm)                         | `.source.gfm`                        | [autocomplete-bibtex](https://atom.io/packages/autocomplete-bibtex) | `1.1.0`    |
| [Git Config](https://atom.io/packages/language-git)                              | `.source.git-config`                 |                                                                     |            |
| [Git Commit Message](https://atom.io/packages/language-git)                      | `.text.git-commit`                   |                                                                     |            |
| [Git Rebase Message](https://atom.io/packages/language-git)                      | `.text.git-rebase`                   |                                                                     |            |
| [HTML (Go)](https://atom.io/packages/language-go)                                | `.text.html.gohtml`                  |                                                                     |            |
| [Go](https://atom.io/packages/language-go)                                       | `.source.go`                         | [go-plus](https://atom.io/packages/go-plus), [autocomplete-go](https://atom.io/packages/autocomplete-go) | `2.0.0` |
| [Go Template](https://atom.io/packages/language-go)                              | `.source.gotemplate`                 |                                                                     |            |
| [HTML](https://atom.io/packages/language-html)                                   | `.text.html.basic`                   | [autocomplete-html](https://atom.io/packages/autocomplete-html)     | `2.0.0`    |
| [JavaScript](https://atom.io/packages/language-javascript)                       | `.source.js`                         | [atom-ternjs](https://atom.io/packages/atom-ternjs)                 | `2.0.0`    |
| [Java Properties](https://atom.io/packages/language-java)                        | `.source.java-properties`            |                                                                     |            |
| [Regular Expressions (JavaScript)](https://atom.io/packages/language-javascript) | `.source.js.regexp`                  |                                                                     |            |
| [JavaServer Pages](https://atom.io/packages/language-java)                       | `.text.html.jsp`                     | [autocomplete-jsp](https://atom.io/packages/autocomplete-jsp)       | `2.0.0`    | 
| [Java](https://atom.io/packages/language-java)                                   | `.source.java`                       | [autocomplete-java-minus](https://atom.io/packages/autocomplete-java-minus) | `2.0.0` |
| [JUnit Test Report](https://atom.io/packages/language-java)                      | `.text.junit-test-report`            |                                                                     |            |
| [Makefile](https://atom.io/packages/language-make)                               | `.source.makefile`                   |                                                                     |            |
| [LESS](https://atom.io/packages/language-less)                                   | `.source.css.less`                   |                                                                     |            |
| [SQL (Mustache)](https://atom.io/packages/language-mustache)                     | `.source.sql.mustache`               |                                                                     |            |
| [HTML (Mustache)](https://atom.io/packages/language-mustache)                    | `.text.html.mustache`                |                                                                     |            |
| [Objective-C++](https://atom.io/packages/language-objective-c)                   | `.source.objcpp`                     | [autocomplete-clang](https://atom.io/packages/autocomplete-clang)   |            |
| [Strings File](https://atom.io/packages/language-objective-c)                    | `.source.strings`                    |                                                                     |            |
| [Objective-C](https://atom.io/packages/language-objective-c)                     | `.source.objc`                       | [autocomplete-clang](https://atom.io/packages/autocomplete-clang)   |            |
| [Property List (XML)](https://atom.io/packages/language-property-list)           | `.text.xml.plist`                    |                                                                     |            |
| [Property List (Old-Style)](https://atom.io/packages/language-property-list)     | `.source.plist`                      |                                                                     |            |
| [Perl](https://atom.io/packages/language-perl)                                   | `.source.perl`                       |                                                                     |            |
| [PHP](https://atom.io/packages/language-php)                                     | `.text.html.php`                     |                                                                     |            |
| PHP                                                                              | `.source.php`                        | [php-integrator-autocomplete-plus](https://github.com/php-integrator/atom-autocompletion), [atom-autocomplete-php](https://github.com/Peekmo/atom-autocomplete-php), [autocomplete-php](https://atom.io/packages/autocomplete-php) | `2.0.0`    |
| [Python Console](https://atom.io/packages/language-python)                       | `.text.python.console`               |                                                                     |            |
| [Python Traceback](https://atom.io/packages/language-python)                     | `.text.python.traceback`             |                                                                     |            |
| [Regular Expressions (Python)](https://atom.io/packages/language-python)         | `.source.regexp.python`              |                                                                     |            |
| [Python](https://atom.io/packages/language-python)                               | `.source.python`                     | [autocomplete-python](https://atom.io/packages/autocomplete-python), [autocomplete-python-jedi](https://atom.io/packages/autocomplete-python-jedi) |            |
| [Ruby on Rails (RJS)](https://atom.io/packages/language-ruby-on-rails)           | `.source.ruby.rails.rjs`             |                                                                     |            |
| [Ruby](https://atom.io/packages/language-ruby)                                   | `.source.ruby`                       |                                                                     |            |
| [HTML (Ruby - ERB)](https://atom.io/packages/language-ruby)                      | `.text.html.erb`                     |                                                                     |            |
| [HTML (Rails)](https://atom.io/packages/language-ruby-on-rails)                  | `.text.html.ruby`                    |                                                                     |            |
| [SQL (Rails)](https://atom.io/packages/language-ruby-on-rails)                   | `.source.sql.ruby`                   |                                                                     |            |
| [JavaScript (Rails)](https://atom.io/packages/language-ruby-on-rails)            | `.source.js.rails .source.js.jquery` |                                                                     |            |
| [Ruby on Rails](https://atom.io/packages/language-ruby-on-rails)                 | `.source.ruby.rails`                 |                                                                     |            |
| [Sass](https://atom.io/packages/language-sass)                                   | `.source.sass`                       |                                                                     |            |
| [Plain Text](https://atom.io/packages/language-text)                             | `.text.plain`                        |                                                                     |            |
| [SCSS](https://atom.io/packages/language-sass)                                   | `.source.css.scss`                   |                                                                     |            |
| [SQL](https://atom.io/packages/language-sql)                                     | `.source.sql`                        | [autocomplete-sql](https://atom.io/packages/autocomplete-sql)       | `2.0.0`    |
| [TOML](https://atom.io/packages/language-toml)                                   | `.source.toml`                       |                                                                     |            |
| [XSL](https://atom.io/packages/language-xml)                                     | `.text.xml.xsl`                      |                                                                     |            |
| [XML](https://atom.io/packages/language-xml)                                     | `.text.xml`                          | [autocomplete-xml](https://github.com/pleonex/atom-autocomplete-xml) | `2.0.0`   |
| [YAML](https://atom.io/packages/language-yaml)                                   | `.source.yaml`                       |                                                                     |            |

## Providers For Third-Party Grammars

| Grammar                                                    | Selector           | Provider                                                                | API Status            |
|:-----------------------------------------------------------|:-------------------|:------------------------------------------------------------------------|:----------------------|
| [Apex](https://atom.io/packages/mavensmate-atom)           | `.source.apex`     | [mavensmate-atom](https://atom.io/packages/mavensmate-atom)             | `1.0.0`               |
| [AsciiDoc](https://atom.io/packages/language-asciidoc)     | `.source.asciidoc` | [autocomplete-asciidoc](https://atom.io/packages/autocomplete-asciidoc) | `2.0.0`               |
| [C#](https://atom.io/packages/language-csharp)             | `.source.cs`       | [omnisharp-atom](https://atom.io/packages/omnisharp-atom)               | `2.0.0`               |
| [ComputerCraft](https://atom.io/packages/language-computercraft) | `.source.computercraft` | [autocomplete-computercraft](https://atom.io/packages/autocomplete-computercraft) |  `1.0.0` |
| [Curry](https://atom.io/packages/language-curry) | `.source.curry` | [autocomplete-curry](https://atom.io/packages/autocomplete-curry) | `4.0.0` |
| [Dart](https://github.com/radicaled/dart-tools)            | `.source.dart`     | [dart-tools](https://github.com/radicaled/dart-tools)                   |
| [Dart](https://github.com/dart-atom/dartlang)              | `.source.dart`     | [dartlang](https://github.com/dart-atom/dartlang)                       |
| [Elixir](https://atom.io/packages/language-elixir)         | `.source.elixir`   | [autocomplete-elixir](https://atom.io/packages/autocomplete-elixir)     | `2.0.0`               |
| [Erlang](https://atom.io/packages/language-erlang)         | `.source.erlang`   | [autocomplete-erlang](https://atom.io/packages/autocomplete-erlang)     | `2.0.0`               |
| [GLSL](https://atom.io/packages/language-glsl)             | `.source.glsl`     | [autocomplete-glsl](https://atom.io/packages/autocomplete-glsl)         | `2.0.0`               |
| [HackLang](https://atom.io/packages/language-hack)         | `.source.hack`     | [autocomplete-hack](https://atom.io/packages/autocomplete-hack)         | `2.0.0`               |
| [Haskell](https://atom.io/packages/language-haskell)       | `.source.haskell`  | [autocomplete-haskell](https://atom.io/packages/autocomplete-haskell)   | `1.0.0`               |
| [Haskell](https://atom.io/packages/language-haskell)       | `.source.haskell`  | [ide-haskell](https://atom.io/packages/ide-haskell)                     | `1.0.0`               |
| [Haxe](https://atom.io/packages/language-haxe)             | `.source.haxe`     | [autocomplete-haxe](https://atom.io/packages/autocomplete-haxe)         | `1.1.0`               |
| [LaTeX](https://atom.io/packages/language-latex)             | `.text.tex.latex`     | [autocomplete-latex-cite](https://atom.io/packages/autocomplete-latex-cite), [autocomplete-latex-references](https://atom.io/packages/autocomplete-latex-references), [autocomplete-glossaries](https://atom.io/packages/autocomplete-glossaries)       | `2.0.0`               |
| [Marko](https://github.com/marko-js/atom-language-marko)   | `.text.marko`      | [autocomplete-marko](https://github.com/marko-js/atom-autocomplete-marko) | `2.0.0`             |
| [Nunjucks](https://github.com/alohaas/language-nunjucks)   | `.source.nunjucks, .text.html.nunjucks` | [autocomplete-nunjucks](https://github.com/puranjayjain/autocomplete-nunjucks) | `2.0.0` |
| [Pig](https://atom.io/packages/pig)                        | `.source.pig`      | [pig](https://atom.io/packages/pig)                                     | `2.0.0`               |
| [Q/K](https://atom.io/packages/language-kdb-q)             | `.source.q`        | [autocomplete-kdb-q](https://atom.io/packages/autocomplete-kdb-q)       | `2.0.0`               |
| [Rust](https://atom.io/packages/language-rust)             | `.source.rust`     | [racer](https://atom.io/packages/racer)                                 | `2.0.0`               |
| [Turtle](https://atom.io/packages/language-rdf)            | `.source.turtle`   | [turtle-completer](https://atom.io/packages/turtle-completer)         | `2.0.0`               |
| [TypeScript](https://atom.io/packages/atom-typescript)     | `.source.ts`       | [atom-typescript](https://atom.io/packages/atom-typescript)             | `8.11.0`              |
| [Visualforce](https://atom.io/packages/mavensmate-atom)    | `.visualforce`     | [mavensmate-atom](https://atom.io/packages/mavensmate-atom)             | `1.1.0`               |
| [WordPress Coding Standard Whitelist Flags](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/wiki/Whitelisting-code-which-flags-errors) | `.php .comment` | [autocomplete-wpcs-flags](https://atom.io/packages/autocomplete-wpcs-flags) | `2.0.0` |

## Providers Not Tied To A Specific Grammar

| Selector                                                                                | Provider                                                                  | Status  |
|:----------------------------------------------------------------------------------------|:--------------------------------------------------------------------------|:--------|
| `*`                                                                                     | [autocomplete-emojis](https://atom.io/packages/autocomplete-emojis)       | `1.0.0` |
| `*`                                                                                     | [autocomplete-snippets](https://atom.io/packages/autocomplete-snippets)   | `2.0.0` |
| `*`                                                                                     | [autocomplete-paths](https://atom.io/packages/autocomplete-paths)         | `1.0.0` |
| `*`                                                                                     | [atom-path-intellisense](https://atom.io/packages/atom-path-intellisense)         | `1.2.1` |
| `*`                                                                                     | [atom-ctags](https://atom.io/packages/atom-ctags)                         | `2.0.0` |
| `.source.js, .source.jsx`                                                               | [ide-flow](https://atom.io/packages/ide-flow)                             | `1.1.0` |
| `.source.js, .source.jsx, .source.coffee`                                               | [autocomplete-underdash](https://atom.io/packages/autocomplete-underdash) | `2.0.0` |
| `.source.css`, `.source.css.less`, `.source.sass`, `.source.css.scss`, `.source.stylus` | [project-palette-finder](https://atom.io/packages/project-palette-finder) | `1.1.0` |
| `*`                                                                                     | [you-complete-me](https://atom.io/packages/you-complete-me)               | `2.0.0` |
| `English word autocompetion with the hint of explanation.`                              | [autocomplete-en-en](https://atom.io/packages/autocomplete-en-en)         | `2.0.0` |

--

## Providers Requested By The Community

If you'd like to contribute and are interested in learning how to write an `autocomplete-plus` [`Provider`](/packages_wiki/autocomplete-plus/provider-api.md), start here:

* Emmet: https://github.com/atom-community/autocomplete-plus/issues/156
* LESS: https://github.com/atom-community/autocomplete-plus/issues/151

## Packages That Claim Autocomplete, But Are Not API 1.0.0 Compatible

* https://github.com/maun/atom-rust-plus (never published, uses [autocomplete-plus-async](https://atom.io/packages/autocomplete-plus-async))
* https://atom.io/packages/ios (doesn't make use of autocomplete-plus)
* https://atom.io/packages/language-hn (see: https://github.com/ignaciocases/language-hn/issues/1 for API 1.0.0 compatibility)
* https://atom.io/packages/rsense (see: https://github.com/rsense/atom-rsense/issues/1 for API 1.0.0 compatibility)

## Deprecated Providers

If you are using one of these providers, please uninstall the package as it is no longer maintained.

* https://github.com/vito/atom-autocomplete-gocode (deprecated, use [go-plus](https://atom.io/packages/go-plus) instead)
* https://github.com/tinloaf/autocomplete-plus-python-jedi (deprecated, use [autocomplete-python](https://atom.io/packages/autocomplete-python) instead)

## Other Forks Of Autocomplete

* https://github.com/xumingthepoet/autocomplete-plus-elixir (never published)
* https://atom.io/packages/autocomplete-jedi (fork of `autocomplete`)
* https://atom.io/packages/rubymotion (extends default autocomplete package)
