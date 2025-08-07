import{_ as t,o,c as d,a as n,b as e,d as a,f as s,r as l}from"./app.87197fef.js";const c={},r=s(`<h2 id="file-organization" tabindex="-1"><a class="header-anchor" href="#file-organization" aria-hidden="true">#</a> File Organization</h2><p>One of the most important things to take note of when adding new documentation is where it should go within the website layout.</p><p>The generalized overall layout of the website looks like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docs
\u251C\u2500\u2500 root level .md files
\u2514\u2500\u2500 section folder
    \u251C\u2500\u2500 sections
    \u2514\u2500\u2500 index.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The general idea is that for files that can stand by themselves (for example the <code>About Us</code> page, <code>Repositories</code> etc.) they exist at the <code>docs/</code> &quot;root&quot; level.</p><p>For anything that is more complex it needs to have a section directory named appropriately, an <code>index.md</code> file within it and a <code>sections</code> directory.</p><h3 id="index-md" tabindex="-1"><a class="header-anchor" href="#index-md" aria-hidden="true">#</a> <code>index.md</code></h3><p>This index file needs to have a YAML frontmatter to define, at a minimum, the title of the document. This is displayed as an <code>H1</code> header for the page (note: subsequent <code>H1</code> headers will be ignored so always start at <code>H2</code>).</p><p>The rest of this index file will be used to display the actual content you want to show. This is done in a number of ways.</p><p>First of all you can just include standard markdown. This is often used for introducing the section or adding one of our reusable components (e.g. a <code>danger</code> container).</p><p>The rest of the file should consist of <code>@includes</code> which take data from other folders on the website and integrates it automatically. Usually this will be the <code>sections</code> files which will be covered next.</p><p>e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
File not found

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),u=n("code",null,"@include",-1),p={href:"https://github.com/pulsar-edit/.github",target:"_blank",rel:"noopener noreferrer"},h=s(`<p>This is done by having a value defined on the <code>config.js</code> file which will provide an alias for us to use:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;@orgdocs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> file<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>
		<span class="token string">&quot;@orgdocs&quot;</span><span class="token punctuation">,</span>
		path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;../../node_modules/.github/&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This allows us to include org-level docs by using this special alias.</p><p>e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@include-push(/home/runner/work/pulsar-edit.github.io/pulsar-edit.github.io/node_modules/.github)
# Pulsar tooling

Here you will find a list of tools used by the Pulsar team and information about them.

## Continuous Integration

### [Cirrus CI](https://cirrus-ci.com/github/pulsar-edit/pulsar)

Cirrus CI is used for Pulsar&#39;s continuous integration as well as for building application binaries.

### [Codacy](https://app.codacy.com/gh/pulsar-edit/repositories)

Codacy is used to scan committed code for any issues that may have been missed.

Currently though Codacy is only used on the following repositories:

* [ppm](https://app.codacy.com/gh/pulsar-edit/ppm/dashboard)
* [pulsar](https://app.codacy.com/gh/pulsar-edit/pulsar/dashboard)
* [background-tips](https://app.codacy.com/gh/pulsar-edit/background-tips/dashboard)
* [autocomplete-plus](https://app.codacy.com/gh/pulsar-edit/autocomplete-plus/dashboard)

## i18n (Internationalization)

### [Crowdin](https://crowdin.pulsar-edit.dev/)

Crowdin will be used for Pulsar&#39;s internationalization efforts but exact details on this are still pending.

## Package Managers

While most repositories you can easily tell what Package Manager is being used by checking for a specific lock file, there are some execptions to this that should be noted.

* [pulsar](https://github.com/pulsar-edit/pulsar) uses \`yarn\` as its Package Manager.
* [pulsar-edit.github.io](https://github.com/pulsar-edit/pulsar-edit.github.io) uses \`pnpm\` as its Package Manager.

## Cloud Database

The [package-backend](https://github.com/pulsar-edit/package-backend) currently uses DigitalOcean to host the PostgreSQL Pulsar Package Repositories data in the cloud.

## Cloud Compute

Both the [package-backend](https://github.com/pulsar-edit/package-backend) and [package-frontend](https://github.com/pulsar-edit/package-frontend) use Google App Engine to host the compute instance of these websites in the cloud.

## Additional Testing tools

### [Action Pulsar Dependency Tester](https://github.com/marketplace/actions/action-pulsar-dependency-tester)

Pulsar Dependency Tester is a GitHub action used to test changes of a core Pulsar Dependency if you need to determine how your core package dependency will run on the current version of the Pulsar Editor.

This GitHub Action is a direct Pulsar replacement of the previous Action to test Atom Dependencies [Setup Atom](https://github.com/marketplace/actions/setup-atom).

@include-pop()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sections" tabindex="-1"><a class="header-anchor" href="#sections" aria-hidden="true">#</a> Sections</h3><p>The <code>sections</code> directory is where we include the rest of the documents broken down by section. These should be self contained files which can be used alone but are designed to be included on the section page. This approach allows us flexibility with ordering as well as including these files in other places without needing to duplicate the material.</p><p>Files here can be navigated to directly on the website but should not be linked to directly.</p><p>These files shoud <em>not</em> have any YAML frontmatter as they will be included and shown as text.</p><h3 id="assets" tabindex="-1"><a class="header-anchor" href="#assets" aria-hidden="true">#</a> Assets</h3>`,10),v={href:"https://github.com/pulsar-edit/.github/tree/main/images/",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>An alias for this exists in <code>config.js</code> to access files from this repository.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;@images&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../../node_modules/.github/images&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>So to include an image you simply need to use the standard markdown image link along with the alias:</p><p>e.g.</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">MyImage</span>](<span class="token url">@images/path/to/image.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function b(g,f){const i=l("ExternalLinkIcon");return o(),d("div",null,[r,n("p",null,[e("However you can also use "),u,e(" to feature files from a different section of the website or even files from outside the main site. We use this to include files which are maintained on the organization "),n("a",p,[e(".github repo"),a(i)]),e(" for org-level documents.")]),h,n("p",null,[e("Assets should be uploaded to the "),n("a",v,[e(".github repo"),a(i)]),e(" repository so they can be used org-wide.")]),m])}const y=t(c,[["render",b],["__file","file-organization.html.vue"]]);export{y as default};
