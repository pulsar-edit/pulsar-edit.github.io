import{_ as o,o as i,c as r,a,b as e,d as n,f as t,r as p}from"./app.a3485bf5.js";const c={},l=a("h3",{id:"atom-package-server-api",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#atom-package-server-api","aria-hidden":"true"},"#"),e(" Atom package server API")],-1),d={href:"https://github.com/atom/apm",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"apm",-1),h=a("code",null,"package.json",-1),g=a("code",null,"apm",-1),k=a("code",null,"apm",-1),m={href:"https://github.com/atom/settings-view/blob/master/lib/package-manager.coffee",target:"_blank",rel:"noopener noreferrer"},v=a("code",null,"settings-view",-1),b=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"WARNING"),a("p",null,[a("strong",null,"Warning:"),e(" This API should be considered pre-release and is subject to change.")])],-1),q=a("h4",{id:"authorization",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#authorization","aria-hidden":"true"},"#"),e(" Authorization")],-1),f={href:"https://atom.io/account",target:"_blank",rel:"noopener noreferrer"},y=a("code",null,"Authorization",-1),_=t(`<h4 id="media-type" tabindex="-1"><a class="header-anchor" href="#media-type" aria-hidden="true">#</a> Media type</h4><p>All requests that take parameters require <code>application/json</code>.</p><h4 id="api-resources" tabindex="-1"><a class="header-anchor" href="#api-resources" aria-hidden="true">#</a> API Resources</h4><h5 id="packages" tabindex="-1"><a class="header-anchor" href="#packages" aria-hidden="true">#</a> Packages</h5><h6 id="listing-packages" tabindex="-1"><a class="header-anchor" href="#listing-packages" aria-hidden="true">#</a> Listing packages</h6><h6 id="get-api-packages" tabindex="-1"><a class="header-anchor" href="#get-api-packages" aria-hidden="true">#</a> GET /api/packages</h6><p>Parameters:</p><ul><li><strong>page</strong> (optional)</li><li><strong>sort</strong> (optional) - One of <code>downloads</code>, <code>created_at</code>, <code>updated_at</code>, <code>stars</code>. Defaults to <code>downloads</code></li><li><strong>direction</strong> (optional) - <code>asc</code> or <code>desc</code>. Defaults to <code>desc</code>. <code>stars</code> can only be ordered <code>desc</code></li></ul><p>Returns a list of all packages in the following format:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;releases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;latest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.6.0&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thedaniel-test-package&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/thedaniel/test-package&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    ...
  <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Results are paginated 30 at a time, and links to the next and last pages are provided in the <code>Link</code> header:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Link: &lt;https://www.atom.io/api/packages?page=1&gt;; rel=&quot;self&quot;,
      &lt;https://www.atom.io/api/packages?page=41&gt;; rel=&quot;last&quot;,
      &lt;https://www.atom.io/api/packages?page=2&gt;; rel=&quot;next&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, results are sorted by download count, descending.</p><h5 id="searching-packages" tabindex="-1"><a class="header-anchor" href="#searching-packages" aria-hidden="true">#</a> Searching packages</h5><h6 id="get-api-packages-search" tabindex="-1"><a class="header-anchor" href="#get-api-packages-search" aria-hidden="true">#</a> GET /api/packages/search</h6><p>Parameters:</p><ul><li><strong>q</strong> (required) - Search query</li><li><strong>page</strong> (optional)</li><li><strong>sort</strong> (optional) - One of <code>downloads</code>, <code>created_at</code>, <code>updated_at</code>, <code>stars</code>. Defaults to the relevance of the search query.</li><li><strong>direction</strong> (optional) - <code>asc</code> or <code>desc</code>. Defaults to <code>desc</code>.</li></ul><p>Returns results in the same format as <a href="#listing-packages">listing packages</a>.</p><h5 id="showing-package-details" tabindex="-1"><a class="header-anchor" href="#showing-package-details" aria-hidden="true">#</a> Showing package details</h5><h6 id="get-api-packages-package-name" tabindex="-1"><a class="header-anchor" href="#get-api-packages-package-name" aria-hidden="true">#</a> GET /api/packages/:package_name</h6><p>Returns package details and versions for a single package</p><p>Parameters:</p>`,22),x=a("strong",null,"engine",-1),w={href:"http://semver.org",target:"_blank",rel:"noopener noreferrer"},j=t(`<p>Returns:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">&quot;releases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;latest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.6.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thedaniel-test-package&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/thedaniel/test-package&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;versions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      (see single version output below)
      ...<span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="creating-a-package" tabindex="-1"><a class="header-anchor" href="#creating-a-package" aria-hidden="true">#</a> Creating a package</h5><h6 id="post-api-packages" tabindex="-1"><a class="header-anchor" href="#post-api-packages" aria-hidden="true">#</a> POST /api/packages</h6><p>Create a new package; requires authentication.</p><p>The name and version will be fetched from the <code>package.json</code> file in the specified repository. The authenticating user <em>must</em> have access to the indicated repository.</p><p>Parameters:</p><ul><li><strong>repository</strong> - String. The repository containing the plugin, in the form &quot;owner/repo&quot;</li></ul><p>Returns:</p><ul><li><strong>201</strong> - Successfully created, returns created package.</li><li><strong>400</strong> - Repository is inaccessible, nonexistent, not an atom package. Possible error messages include: <ul><li>That repo does not exist, isn&#39;t an atom package, or atombot does not have access</li><li>The package.json at owner/repo isn&#39;t valid</li></ul></li><li><strong>409</strong> - A package by that name already exists</li></ul><h5 id="deleting-a-package" tabindex="-1"><a class="header-anchor" href="#deleting-a-package" aria-hidden="true">#</a> Deleting a package</h5><h6 id="delete-api-packages-package-name" tabindex="-1"><a class="header-anchor" href="#delete-api-packages-package-name" aria-hidden="true">#</a> DELETE /api/packages/:package_name</h6><p>Delete a package; requires authentication.</p><p>Returns:</p><ul><li><strong>204</strong> - Success</li><li><strong>400</strong> - Repository is inaccessible</li><li><strong>401</strong> - Unauthorized</li></ul><h5 id="renaming-a-package" tabindex="-1"><a class="header-anchor" href="#renaming-a-package" aria-hidden="true">#</a> Renaming a package</h5><p>Packages are renamed by publishing a new version with the name changed in <code>package.json</code>. See <a href="#creating-a-new-package-version">Creating a new package version</a> for details.</p><p>Requests made to the previous name will forward to the new name.</p><h5 id="package-versions" tabindex="-1"><a class="header-anchor" href="#package-versions" aria-hidden="true">#</a> Package Versions</h5><h6 id="get-api-packages-package-name-versions-version-name" tabindex="-1"><a class="header-anchor" href="#get-api-packages-package-name-versions-version-name" aria-hidden="true">#</a> GET /api/packages/:package_name/versions/:version_name</h6><p>Returns <code>package.json</code> with <code>dist</code> key added for e.g. tarball download:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;bugs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/thedaniel/test-package/issues&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;async&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~0.2.6&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;pegjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~0.7.0&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;season&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~0.13.0&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Expand snippets matching the current prefix with \`tab\`.&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;dist&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;tarball&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://codeload.github.com/...&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;engines&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;atom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/snippets&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;thedaniel-test-package&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;publishConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;registry&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://...&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;repository&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;git&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://github.com/thedaniel/test-package.git&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.6.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="creating-a-new-package-version" tabindex="-1"><a class="header-anchor" href="#creating-a-new-package-version" aria-hidden="true">#</a> Creating a new package version</h5><h6 id="post-api-packages-package-name-versions" tabindex="-1"><a class="header-anchor" href="#post-api-packages-package-name-versions" aria-hidden="true">#</a> POST /api/packages/:package_name/versions</h6><p>Creates a new package version from a git tag; requires authentication. If <code>rename</code> is not <code>true</code>, the <code>name</code> field in <code>package.json</code> <em>must</em> match the current package name.</p><p>Parameters:</p><ul><li><strong>tag</strong> - A git tag for the version you&#39;d like to create. It&#39;s important to note that the version name will not be taken from the tag, but from the <code>version</code> key in the <code>package.json</code> file at that ref. The authenticating user <em>must</em> have access to the package repository.</li><li><strong>rename</strong> - Boolean indicating whether this version contains a new name for the package.</li></ul><p>Returns:</p><ul><li><strong>201</strong> - Successfully created. Returns created version.</li><li><strong>400</strong> - Git tag not found / Repository inaccessible / package.json invalid</li><li><strong>409</strong> - Version exists</li></ul><h5 id="deleting-a-version" tabindex="-1"><a class="header-anchor" href="#deleting-a-version" aria-hidden="true">#</a> Deleting a version</h5><h6 id="delete-api-packages-package-name-versions-version-name" tabindex="-1"><a class="header-anchor" href="#delete-api-packages-package-name-versions-version-name" aria-hidden="true">#</a> DELETE /api/packages/:package_name/versions/:version_name</h6><p>Deletes a package version; requires authentication.</p><p>Note that a version cannot be republished with a different tag if it is deleted. If you need to delete the latest version of a package for example for security reasons, you&#39;ll need to increment the version when republishing.</p><p>Returns 204 No Content</p><h4 id="stars" tabindex="-1"><a class="header-anchor" href="#stars" aria-hidden="true">#</a> Stars</h4><h5 id="listing-user-stars" tabindex="-1"><a class="header-anchor" href="#listing-user-stars" aria-hidden="true">#</a> Listing user stars</h5><h6 id="get-api-users-login-stars" tabindex="-1"><a class="header-anchor" href="#get-api-users-login-stars" aria-hidden="true">#</a> GET /api/users/:login/stars</h6><p>List a user&#39;s starred packages.</p><p>Return value is similar to <code>GET /api/packages</code></p><h6 id="get-api-stars" tabindex="-1"><a class="header-anchor" href="#get-api-stars" aria-hidden="true">#</a> GET /api/stars</h6><p>List the authenticated user&#39;s starred packages; requires authentication.</p><p>Return value is similar to <code>GET /api/packages</code></p><h5 id="starring-a-package" tabindex="-1"><a class="header-anchor" href="#starring-a-package" aria-hidden="true">#</a> Starring a package</h5><h6 id="post-api-packages-name-star" tabindex="-1"><a class="header-anchor" href="#post-api-packages-name-star" aria-hidden="true">#</a> POST /api/packages/:name/star</h6><p>Star a package; requires authentication.</p><p>Returns a package.</p><h5 id="unstarring-a-package" tabindex="-1"><a class="header-anchor" href="#unstarring-a-package" aria-hidden="true">#</a> Unstarring a package</h5><h6 id="delete-api-packages-name-star" tabindex="-1"><a class="header-anchor" href="#delete-api-packages-name-star" aria-hidden="true">#</a> DELETE /api/packages/:name/star</h6><p>Unstar a package; requires authentication.</p><p>Returns 204 No Content.</p><h5 id="listing-a-package-s-stargazers" tabindex="-1"><a class="header-anchor" href="#listing-a-package-s-stargazers" aria-hidden="true">#</a> Listing a package&#39;s stargazers</h5><h6 id="get-api-packages-name-stargazers" tabindex="-1"><a class="header-anchor" href="#get-api-packages-name-stargazers" aria-hidden="true">#</a> GET /api/packages/:name/stargazers</h6><p>List the users that have starred a package.</p><p>Returns a list of user objects:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;login&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aperson&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">&quot;login&quot;</span><span class="token operator">:</span> <span class="token string">&quot;anotherperson&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,55);function T(R,E){const s=p("ExternalLinkIcon");return i(),r("div",null,[l,a("p",null,[e("This guide describes the web API used by "),a("a",d,[e("apm"),n(s)]),e(" and Atom. The vast majority of use cases are met by the "),u,e(" command-line tool, which does other useful things like incrementing your version in "),h,e(" and making sure you have pushed your git tag. In fact, Atom itself shells out to "),g,e(" rather than hitting the API directly. If you're curious about how Atom uses "),k,e(", see the "),a("a",m,[e("PackageManager class"),n(s)]),e(" in the "),v,e(" package.")]),b,q,a("p",null,[e("For calls to the API that require authentication, provide a valid token from your "),a("a",f,[e("atom.io account page"),n(s)]),e(" in the "),y,e(" header.")]),_,a("ul",null,[a("li",null,[x,e(" (optional) - Only show packages with versions compatible with this Atom version. Must be valid "),a("a",w,[e("SemVer"),n(s)]),e(".")])]),j])}const A=o(c,[["render",T],["__file","atom-package-server-api.html.vue"]]);export{A as default};
