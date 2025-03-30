import{_ as a,o as n,c as l,a as e,b as o,d as r,e as i,f as s,r as c}from"./app.a3485bf5.js";const d={},u={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.119.0",target:"_blank",rel:"noopener noreferrer"},h=s('<h2 id="pulsar-v1-119-0-is-live" tabindex="-1"><a class="header-anchor" href="#pulsar-v1-119-0-is-live" aria-hidden="true">#</a> Pulsar v1.119.0 is live!</h2><p>While a smaller release this time around, v1.119.0 still manages to pack a punch.</p><p>For macOS, we&#39;ve gone to great lengths to ensure Pulsar should build just fine on macOS 13+, while our Linux users get greater compatibility for DevTools on various platforms. For our programmers, there&#39;s been more of the constant incremental improvements to various languages&#39; built-in syntax highlighting and code folding this time around, with a focus on PHP, Python, Javascript, Typescript, Shell script, and C.</p><p>As always thanks a ton to all of those that support the project and keep it moving forward, we appreciate you all, and look forward to seeing you amongst the stars.</p><p>- The Pulsar Team</p><div class="custom-container info"><p class="custom-container-title">Notice</p><p>Originally, the binaries from our normal &quot;Pull Request&quot; CI build (which produces unsigned binaries) were accidentally uploaded to this release, instead of the binaries from the special &quot;tag push&quot; CI build (which signs the macOS binaries). In order to provide you with signed Intel macOS binaries, we have re-uploaded them and updated <code>SHA256SUMS.txt</code> to reflect this. The following binaries have been swapped out for the correct versions and the checksums updated:</p><ul><li><code>Intel.Mac.Pulsar-1.119.0-mac.zip</code></li><li><code>Intel.Mac.Pulsar-1.119.0.dmg</code></li></ul></div><hr><ul><li>Changed <code>language-php</code> to continue syntax-highlighting even when encountering unbalanced PHP tags. (Avoid throwing a syntax error)</li><li>Indentation, fold, and highlighting fixes in <code>language-python</code>, <code>language-javascript</code>, <code>language-typescript</code>, <code>language-shell</code> and <code>language-c</code>.</li><li>Worked around API breakage (FreeBSD <code>libiconv</code> vs GNU <code>libiconv</code>) in the <code>iconv</code> library shipped in macOS 13+</li><li>Fix <code>--no-sandbox</code> flag not being applied to the <code>.desktop</code> launcher on Linux (Fixes Dev Tools)</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',9),p={href:"https://github.com/pulsar-edit/pulsar/pull/1028",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"tree-view.js",-1),f={href:"https://github.com/pulsar-edit/pulsar/pull/1052",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"libiconv",-1),m={href:"https://github.com/pulsar-edit/pulsar/pull/1051",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"libiconv",-1),v={href:"https://github.com/pulsar-edit/pulsar/pull/1039",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/pulsar-edit/pulsar/pull/1035",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/pulsar-edit/pulsar/pull/1029",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"superstring",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#superstring","aria-hidden":"true"},"#"),o(" superstring")],-1),y=e("code",null,"master",-1),P={href:"https://github.com/pulsar-edit/superstring/pull/15",target:"_blank",rel:"noopener noreferrer"};function S(I,T){const t=c("ExternalLinkIcon");return n(),l("div",null,[e("p",null,[o("Pulsar "),e("a",u,[o("1.119.0"),r(t)]),o(" is available now!")]),i(" more "),h,e("ul",null,[e("li",null,[o("Tree-sitter rolling fixes, 1.119.0 edition "),e("a",p,[o("@savetheclocktower"),r(t)])]),e("li",null,[o("Rewrite "),g,o(),e("a",f,[o("@savetheclocktower"),r(t)])]),e("li",null,[o("Fix macOS binaries by vendorizing "),_,o(),e("a",m,[o("@savetheclocktower"),r(t)])]),e("li",null,[o("Link to Homebrew version of "),b,o("... "),e("a",v,[o("@savetheclocktower"),r(t)])]),e("li",null,[o('Revert "Merge pull request #810 from pulsar-edit/fix-on-change-cursor-pos" '),e("a",k,[o("@savetheclocktower"),r(t)])]),e("li",null,[o("electron-builder: Add '--no-sandbox' launch arg for Linux build targets "),e("a",w,[o("@DeeDeeG"),r(t)])])]),x,e("ul",null,[e("li",null,[o("Candidate for new "),y,o(),e("a",P,[o("@savetheclocktower"),r(t)])])])])}const N=a(d,[["render",S],["__file","20240717-confused-Techie-v1.119.0.html.vue"]]);export{N as default};
