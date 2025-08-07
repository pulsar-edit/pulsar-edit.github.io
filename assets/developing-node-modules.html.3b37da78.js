import{_ as e,o as n,c as i,f as d}from"./app.87197fef.js";const l={},a=d(`<h3 id="developing-node-modules" tabindex="-1"><a class="header-anchor" href="#developing-node-modules" aria-hidden="true">#</a> Developing Node Modules</h3><p>Atom contains a number of packages that are Node modules instead of Atom packages. If you want to make changes to the Node modules, for instance <code>atom-keymap</code>, you have to link them into the development environment differently than you would a normal Atom package.</p><h4 id="linking-a-node-module-into-your-atom-dev-environment" tabindex="-1"><a class="header-anchor" href="#linking-a-node-module-into-your-atom-dev-environment" aria-hidden="true">#</a> Linking a Node Module Into Your Atom Dev Environment</h4><p>Here are the steps to run a local version of a Node module within Atom. We&#39;re using <code>atom-keymap</code> as an example:</p><p>::: tab#developing-node-modules</p><template></template><template><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git clone https://github.com/atom/atom-keymap.git
$ cd atom-keymap
$ npm install
$ npm link
$ cd &lt;em&gt;WHERE YOU CLONED ATOM&lt;/em&gt;
$ npm link atom-keymap

# This is the special step, it makes the Node module work with Atom&#39;s version of Node
$ apm rebuild

# If you have cloned Atom in a different location than ~/github/atom
# you need to set the following environment variable
$ export ATOM_DEV_RESOURCE_PATH=&lt;em&gt;WHERE YOU CLONED ATOM&lt;/em&gt;

# Should work!
$ atom --dev .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template><template><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git clone https://github.com/atom/atom-keymap.git
$ cd atom-keymap
$ npm install
$ npm link
$ cd &lt;em&gt;WHERE YOU CLONED ATOM&lt;/em&gt;
$ npm link atom-keymap

# This is the special step, it makes the Node module work with Atom&#39;s version of Node
$ apm rebuild

# If you have cloned Atom in a different location than %USERPROFILE%\\github\\atom
# you need to set the following environment variable
$ setx ATOM_DEV_RESOURCE_PATH=&lt;em&gt;WHERE YOU CLONED ATOM&lt;/em&gt;

# Should work!
$ atom --dev .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>After you get the Node module linked and working, every time you make a change to the Node module&#39;s code, you will have to exit Atom and do the following:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ cd &lt;em&gt;WHERE YOU CLONED THE NODE MODULE&lt;/em&gt;
$ npm install
$ cd &lt;em&gt;WHERE YOU CLONED ATOM&lt;/em&gt;
$ apm rebuild
$ atom --dev .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>`,8),o=[a];function t(m,s){return n(),i("div",null,o)}const r=e(l,[["render",t],["__file","developing-node-modules.html.vue"]]);export{r as default};
