<template><div><h1 id="june-2017-monthly-planning" tabindex="-1"><a class="header-anchor" href="#june-2017-monthly-planning" aria-hidden="true">#</a> June 2017 - Monthly Planning</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Please note that its possible this is outdated, as its original version was published by @'Katrina Uychaco' on Jun 14, 2017.</p>
</div>
<h2 id="looking-back" tabindex="-1"><a class="header-anchor" href="#looking-back" aria-hidden="true">#</a> Looking Back</h2>
<ul>
<li>Beta launch went very well</li>
<li>Relatively few problems</li>
<li>Performance work @smashwilson and @kuychaco did is ✨</li>
<li>GPG/credential helper work that @smashwilson shipped was solid</li>
<li>Feeling good about shipping to stable</li>
</ul>
<h2 id="this-month" tabindex="-1"><a class="header-anchor" href="#this-month" aria-hidden="true">#</a> This Month</h2>
<ul>
<li>Ensure room to triage and fix issues that may arise after shipping to stable</li>
<li>File change notification service @smashwilson</li>
<li>GitHub integration @BinaryMuse @kuychaco
<ul>
<li>Create new PR</li>
<li>Fill out existing functionality (timeline item types, new fields, etc.)</li>
<li>Add mechanism for manual/auto refreshing</li>
<li>Continue to investigate possibility of real-time updates</li>
</ul>
</li>
<li>Git integration @kuychaco
<ul>
<li>Add &quot;last commit(s)&quot; view under commit box</li>
<li>Investigate removing amend checkbox in favor of more robust HEAD management</li>
</ul>
</li>
</ul>
<h2 id="other-topics-discussed" tabindex="-1"><a class="header-anchor" href="#other-topics-discussed" aria-hidden="true">#</a> Other Topics Discussed</h2>
<ul>
<li>Web Workers
<ul>
<li>Wait to see if issues arise with current implementation</li>
</ul>
</li>
<li>Better remote/branch management
<ul>
<li>Existing UI mocks are relatively old and pre-docks</li>
<li>Want to ensure what we ship is close to what we'll want long term to ensure UI/UX stability over time</li>
<li>Resume conversation around design and pick this up in coming months</li>
</ul>
</li>
<li><code v-pre>core:undo</code> support
<ul>
<li>Undo support is a misnomer in a system where there's not a linear set of edits</li>
<li>Want to design a system where any action is recoverable (different from undoable)</li>
<li>Really talking about UI Git porcelain at this point</li>
<li>Start deeper conversations now, talk about more at mini-summit</li>
</ul>
</li>
<li>Git log / graph
<ul>
<li>We could do something simple now very quickly but would it be up to the standards we want?</li>
<li>Decided to work on &quot;last commit(s)&quot; view for June, talk about this more at mini-summit</li>
</ul>
</li>
<li>Stash support
<ul>
<li>Start talking about UI/UX</li>
</ul>
</li>
<li>Additional GitHub PR work
<ul>
<li>&quot;Checking out&quot; a PR from the GH pane is a great first step toward implementing a full code review flow</li>
</ul>
</li>
</ul>
</div></template>


