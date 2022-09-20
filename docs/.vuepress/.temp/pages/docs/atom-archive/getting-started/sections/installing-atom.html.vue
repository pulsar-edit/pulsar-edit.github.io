<template><div><h3 id="installing-atom" tabindex="-1"><a class="header-anchor" href="#installing-atom" aria-hidden="true">#</a> Installing Atom</h3>
<p>To get started with Atom, we'll need to get it on your system. This section will go over installing Atom on your system as well as the basics of how to build it from source.</p>
<p>Installing Atom should be fairly simple. Generally, you can go to https://atom.io and you should see a download button as shown here:</p>
<p>{{#mac}}</p>
<p><img src="@source/docs/atom-archive/images/mac-downloads.png" alt="Download buttons on https://atom.io" title="Download buttons on https://atom.io"></p>
<p>{{/mac}}</p>
<p>{{#windows}}</p>
<p><img src="@source/docs/atom-archive/images/windows-downloads.png" alt="Download buttons on https://atom.io" title="Download buttons on https://atom.io"></p>
<p>{{/windows}}</p>
<p>{{#linux}}</p>
<p><img src="@source/docs/atom-archive/images/linux-downloads.png" alt="Download buttons on https://atom.io" title="Download buttons on https://atom.io"></p>
<p>{{/linux}}</p>
<p>The button or buttons should be specific to your platform and the download package should be easily installable. However, let's go over them here in a bit of detail.</p>
<p>{{#mac}}</p>
<h4 id="installing-atom-on-mac" tabindex="-1"><a class="header-anchor" href="#installing-atom-on-mac" aria-hidden="true">#</a> Installing Atom on Mac</h4>
<p>Atom follows the standard Mac zip installation process. You can either press the download button from the https://atom.io site or you can go to the <a href="https://github.com/atom/atom/releases/latest" target="_blank" rel="noopener noreferrer">Atom releases page<ExternalLinkIcon/></a> to download the <code v-pre>atom-mac.zip</code> file explicitly. Once you have that file, you can click on it to extract the application and then drag the new <code v-pre>Atom</code> application into your &quot;Applications&quot; folder.</p>
<p>When you first open Atom, it will try to install the <code v-pre>atom</code> and <code v-pre>apm</code> commands for use in the terminal. In some cases, Atom might not be able to install these commands because it needs an administrator password. To check if Atom was able to install the <code v-pre>atom</code> command, for example, open a terminal window and type <code v-pre>which atom</code>. If the <code v-pre>atom</code> command has been installed, you'll see something like this:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ which atom
&gt; /usr/local/bin/atom
$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the <code v-pre>atom</code> command wasn't installed, the <code v-pre>which</code> command won't return anything:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ which atom
$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To install the <code v-pre>atom</code> and <code v-pre>apm</code> commands, run &quot;Window: Install Shell Commands&quot; from the <a href="/getting-started/sections/atom-basics#command-palette">Command Palette</a>, which will prompt you for an administrator password.</p>
<p>{{/mac}}</p>
<p>{{#windows}}</p>
<h4 id="installing-atom-on-windows" tabindex="-1"><a class="header-anchor" href="#installing-atom-on-windows" aria-hidden="true">#</a> Installing Atom on Windows</h4>
<p>Atom is available with Windows installers that can be downloaded from https://atom.io or from the <a href="https://github.com/atom/atom/releases/latest" target="_blank" rel="noopener noreferrer">Atom releases page<ExternalLinkIcon/></a>.  Use <code v-pre>AtomSetup.exe</code> for 32-bit systems and <code v-pre>AtomSetup-x64.exe</code> for 64-bit systems. This setup program will install Atom, add the <code v-pre>atom</code> and <code v-pre>apm</code> commands to your <code v-pre>PATH</code>, and create shortcuts on the desktop and in the start menu.</p>
<p><img src="@source/docs/atom-archive/images/windows-system-settings.png" alt="Atom on Windows"></p>
<p>The context menu <code v-pre>Open with Atom</code> in File Explorer, and the option to make Atom available for file association using <code v-pre>Open with...</code>, is controlled by the System Settings panel as seen above.</p>
<p>With Atom open, click on <code v-pre>File &gt; Settings</code>, and then the <code v-pre>System</code> tab on the left. Check the boxes next to <code v-pre>Show in file context menus</code>, as well as <code v-pre>Show in folder context menus</code>. And you’re all set.</p>
<p>{{/windows}}</p>
<p>{{#linux}}</p>
<h4 id="installing-atom-on-linux" tabindex="-1"><a class="header-anchor" href="#installing-atom-on-linux" aria-hidden="true">#</a> Installing Atom on Linux</h4>
<p>You can install Atom on Linux using your distribution's package manager by configuring it to use one of our official package repositories. This will also enable you to update Atom when new releases are published.</p>
<h5 id="debian-and-ubuntu-deb-apt" tabindex="-1"><a class="header-anchor" href="#debian-and-ubuntu-deb-apt" aria-hidden="true">#</a> Debian and Ubuntu (deb/apt)</h5>
<p>To install Atom on Debian, Ubuntu, or related distributions, add our official
package repository to your system by running the following commands:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-key add -
$ sudo sh -c 'echo &quot;deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main&quot; &gt; /etc/apt/sources.list.d/atom.list'
$ sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now install Atom using <code v-pre>apt-get</code> (or <code v-pre>apt</code> on Ubuntu):</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code># Install Atom
$ sudo apt-get install atom

# Install Atom Beta
$ sudo apt-get install atom-beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively, you can download the <a href="https://atom.io/download/deb" target="_blank" rel="noopener noreferrer">Atom .deb package<ExternalLinkIcon/></a> and install it directly:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code># Install Atom
$ sudo apt install ./atom-amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="red-hat-and-centos-yum-or-fedora-dnf" tabindex="-1"><a class="header-anchor" href="#red-hat-and-centos-yum-or-fedora-dnf" aria-hidden="true">#</a> Red Hat and CentOS (YUM), or Fedora (DNF)</h5>
<p>To install Atom on CentOS, Oracle Linux, Red Hat Enterprise Linux, Scientific Linux, Fedora, or related distributions that use the YUM or DNF package managers, add our official package repository to your system by running the following commands:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ sudo rpm --import https://packagecloud.io/AtomEditor/atom/gpgkey
$ sudo sh -c 'echo -e &quot;[Atom]\nname=Atom Editor\nbaseurl=https://packagecloud.io/AtomEditor/atom/el/7/\$basearch\nenabled=1\ngpgcheck=0\nrepo_gpgcheck=1\ngpgkey=https://packagecloud.io/AtomEditor/atom/gpgkey&quot; &gt; /etc/yum.repos.d/atom.repo'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now install Atom using <code v-pre>dnf</code> (or <code v-pre>yum</code> depending on your distribution):</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code># Install Atom
$ sudo dnf install atom

# Install Atom Beta
$ sudo dnf install atom-beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively, you can download the <a href="https://atom.io/download/rpm" target="_blank" rel="noopener noreferrer">Atom .rpm package<ExternalLinkIcon/></a> and install it directly:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code># On YUM-based distributions
$ sudo yum install -y atom.x86_64.rpm

# On DNF-based distributions
$ sudo dnf install -y atom.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="suse-zypp" tabindex="-1"><a class="header-anchor" href="#suse-zypp" aria-hidden="true">#</a> SUSE (zypp)</h5>
<p>To install Atom on openSUSE or other distributions that use the Zypp package manager, add our official package repository to your system by running the following commands:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ sudo sh -c 'echo -e &quot;[Atom]\nname=Atom Editor\nbaseurl=https://packagecloud.io/AtomEditor/atom/el/7/\$basearch\nenabled=1\ntype=rpm-md\ngpgcheck=0\nrepo_gpgcheck=1\ngpgkey=https://packagecloud.io/AtomEditor/atom/gpgkey&quot; &gt; /etc/zypp/repos.d/atom.repo'
$ sudo zypper --gpg-auto-import-keys refresh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now install Atom using <code v-pre>zypper</code>:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code># Install Atom
$ sudo zypper install atom

# Install Atom Beta
$ sudo zypper install atom-beta
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively, you can download the <a href="https://atom.io/download/rpm" target="_blank" rel="noopener noreferrer">Atom .rpm package<ExternalLinkIcon/></a> and install it directly:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ sudo zypper in -y atom.x86_64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>{{/linux}}</p>
<h4 id="updating-atom" tabindex="-1"><a class="header-anchor" href="#updating-atom" aria-hidden="true">#</a> Updating Atom</h4>
<p>You should consider updating Atom periodically for the latest improvements to the software.  Additionally, When Atom receives hotfixes for security vulnerabilities you will want to update your version of Atom as soon as possible.</p>
<p>{{#mac}}</p>
<p>&quot;Automatically Update&quot; is enabled by default in Core Settings of the <a href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences" target="_blank" rel="noopener noreferrer">Settings View<ExternalLinkIcon/></a>, which will allow Atom to check for updates automatically. If you disable this setting you can update Atom manually.</p>
<p>To perform a manual update:</p>
<ul>
<li>Click on the <code v-pre>Atom &gt; Check for Update</code> menu item in the menu bar.</li>
<li>Search for <code v-pre>Application: About</code> in the <a href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette" target="_blank" rel="noopener noreferrer">Command Palette<ExternalLinkIcon/></a> and click the <code v-pre>Check now</code> button.</li>
</ul>
<p>Atom will begin to update if an update is available.</p>
<p>{{/mac}}</p>
<p>{{#windows}}</p>
<p>&quot;Automatically Update&quot; is enabled by default in Core Settings of the <a href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences" target="_blank" rel="noopener noreferrer">Settings View<ExternalLinkIcon/></a>, which will allow Atom to check for updates automatically. If you disable this setting you can update Atom manually.</p>
<p>To perform a manual update:</p>
<ul>
<li>Click on the <code v-pre>Help &gt; Check for Update</code> menu item in the menu bar.</li>
<li>Search for <code v-pre>Application: About</code> in the <a href="https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette" target="_blank" rel="noopener noreferrer">Command Palette<ExternalLinkIcon/></a> and click the <code v-pre>Check now</code> button.</li>
</ul>
<p>Atom will begin to update if an update is available.</p>
<p>{{/windows}}</p>
<p>{{#linux}}</p>
<p>If you are using Atom's official package repositories, use your distribution's package manager to update Atom.  Otherwise, you will need to manually download and install the latest <code v-pre>.rpm</code> or <code v-pre>.deb</code> package from https://atom.io. For more details, see <a href="https://flight-manual.atom.io/getting-started/sections/installing-atom/#installing-atom-on-linux" target="_blank" rel="noopener noreferrer">Installing Atom on Linux.<ExternalLinkIcon/></a></p>
<p>{{/linux}}</p>
<h4 id="portable-mode" tabindex="-1"><a class="header-anchor" href="#portable-mode" aria-hidden="true">#</a> Portable Mode</h4>
<p>Atom stores configuration and state in a <code v-pre>.atom</code> directory usually located in your home directory <span class="platform-windows">(<code v-pre>%userprofile%</code> on Windows)</span>. You can however run Atom in portable mode where both the app and the configuration are stored together such as on a removable storage device.</p>
<p>To setup Atom in portable mode download the <a href="https://github.com/atom/atom/releases/latest" target="_blank" rel="noopener noreferrer">zip/tar.gz package for your system<ExternalLinkIcon/></a> and extract it to your removable storage.</p>
<p>{{#windows}}</p>
<p>Then create a <code v-pre>.atom</code> directory alongside the directory that contains atom.exe, for example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>e:\atom-1.14\atom.exe
e:\.atom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>{{/windows}}</p>
<p>{{#mac}}</p>
<p>Then create a <code v-pre>.atom</code> directory alongside the Atom.app application, for example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/MyUSB/Atom.app
/MyUSB/.atom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>{{/mac}}</p>
<p>{{#linux}}</p>
<p>Then create a <code v-pre>.atom</code> directory alongside the directory that contains the Atom binary, for example:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/media/myusb/atom-1.14/atom
/media/myusb/.atom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>{{/linux}}</p>
<h5 id="portable-notes" tabindex="-1"><a class="header-anchor" href="#portable-notes" aria-hidden="true">#</a> Portable Notes</h5>
<ul>
<li>The <code v-pre>.atom</code> directory must be writeable</li>
<li>You can move an existing <code v-pre>.atom</code> directory to your portable device</li>
<li>Atom can also store its Electron user data in your <code v-pre>.atom</code> directory - just create a subdirectory called <code v-pre>electronUserData</code> inside <code v-pre>.atom</code></li>
<li>Alternatively you can set the <code v-pre>ATOM_HOME</code> environment variable to point wherever you want (you can write a .sh or .cmd script to temporarily set it and launch it from that)</li>
<li>Portable mode installations will not automatically update</li>
</ul>
<h4 id="building-atom-from-source" tabindex="-1"><a class="header-anchor" href="#building-atom-from-source" aria-hidden="true">#</a> Building Atom from Source</h4>
<p>The <RouterLink to="/hacking-atom/sections/hacking-on-atom-core/">Hacking on Atom Core</RouterLink> section of the flight manual covers instructions on how to clone and build the source code if you prefer that option.</p>
<h4 id="proxy-and-firewall-settings" tabindex="-1"><a class="header-anchor" href="#proxy-and-firewall-settings" aria-hidden="true">#</a> Proxy and Firewall Settings</h4>
<h5 id="behind-a-firewall" tabindex="-1"><a class="header-anchor" href="#behind-a-firewall" aria-hidden="true">#</a> Behind a Firewall?</h5>
<p>If you are behind a firewall and seeing SSL errors when installing packages you can disable strict SSL by running:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ apm config set strict-ssl false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="using-a-proxy" tabindex="-1"><a class="header-anchor" href="#using-a-proxy" aria-hidden="true">#</a> Using a Proxy?</h5>
<p>If you are using a HTTP(S) proxy you can configure <code v-pre>apm</code> to use it by running:</p>
<div class="language-command-line ext-command-line line-numbers-mode"><pre v-pre class="language-command-line"><code>$ apm config set https-proxy &lt;em&gt;YOUR_PROXY_ADDRESS&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can run <code v-pre>apm config get https-proxy</code> to verify it has been set correctly.</p>
</div></template>


