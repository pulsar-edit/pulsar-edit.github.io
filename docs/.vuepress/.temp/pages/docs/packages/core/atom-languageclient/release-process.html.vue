<template><div><h1 id="release-process" tabindex="-1"><a class="header-anchor" href="#release-process" aria-hidden="true">#</a> Release Process</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Please note that its possible this is outdated, as its original version was published by @'David Wilson' on Jan 22, 2018.</p>
</div>
<h2 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h2>
<ol>
<li>Pull down the latest changes from <code v-pre>master</code>.</li>
<li>Edit <a href="https://github.com/pulsar-edit/atom-languageclient/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">CHANGELOG.md<ExternalLinkIcon/></a> to add relevant release notes for changes wince the previous release with a corresponding <code v-pre>## N.N.N</code> section header.</li>
<li>Add and commit CHANGELOG.md with message &quot;Updated CHANGELOG for [version in format N.N.N]&quot;.</li>
<li>Run <code v-pre>npm run test</code> and verify that no tests failed.</li>
<li>Run <code v-pre>npm run flow</code> and verify that there are no errors.</li>
<li>Run <code v-pre>npm version [version type]</code> where the version type is <code v-pre>major</code>, <code v-pre>minor</code>, or <code v-pre>path</code> depending on the <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">semantic versioning<ExternalLinkIcon/></a> impact of the changes.</li>
<li>Run <code v-pre>git log -1</code> and make sure a commit was made for the new version (double-check version in package.json if you like).</li>
<li>If all looks good, run <code v-pre>npm publish</code> to publish the package.</li>
<li>Run <code v-pre>git push --tags</code> to push the new version tag to GitHub.</li>
<li>Go to the atom-languageclient <a href="https://github.com/pulsar-edit/atom-languageclient/tags" target="_blank" rel="noopener noreferrer">tags page<ExternalLinkIcon/></a> and click &quot;Add Release Notes&quot; for the tag corresponding to the release you just published.</li>
<li>Paste the contents of your new CHANGELOG.md section, sans version header, into the &quot;Describe this release&quot; box.</li>
<li>Click the &quot;Publish release&quot; button.</li>
<li>🎉</li>
</ol>
</div></template>


