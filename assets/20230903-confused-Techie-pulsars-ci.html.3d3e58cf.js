import{_ as s,o as a,c as n,e as l,a as t,b as e,d as r,f as i,r as d}from"./app.a3485bf5.js";const h={},u=t("p",null,"How Pulsar's CI has recently changed.",-1),c=i('<p>CI, or Continuous Integration, is a rather broad term used to describe the DevOps process of continuously (oftentimes on every change) building and testing a piece of software. In Pulsar&#39;s case this means two big things:</p><ul><li>Testing Pulsar and all of its core packages</li><li>Building Pulsar binaries and then running tests using those built binaries.</li></ul><p>To better understand how drastically things have changed, let&#39;s quickly take a look how Pulsar&#39;s CI has looked up until this month since nearly the beginning of the project.</p><h2 id="how-it-was" tabindex="-1"><a class="header-anchor" href="#how-it-was" aria-hidden="true">#</a> How it was</h2><p>Whenever someone made a Pull Request to Pulsar, their code changes would be run through a gauntlet of processes:</p><ul><li>The entirety of the Pulsar codebase would have its tests run on GitHub Actions.</li><li>Every single core package (those that come with Pulsar) would also be tested via GitHub Actions.</li><li>A Pulsar binary was built for every single platform we support, this means Windows, Linux, macOS (Intel), macOS (Apple silicon), and ARM Linux.</li></ul><p>The big point of interest today is the process of building the Pulsar binaries.</p>',7),p={href:"https://github.com/mauricioszabo",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/pulsar-edit/pulsar/commit/64427f41782ae4a2ab72a81762dc8f2bcb3f2f7e",target:"_blank",rel:"noopener noreferrer"},f={href:"https://cirrus-ci.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://opencollective.com/pulsar-edit",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/sponsors/pulsar-edit",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cirrus-ci.org/blog/2023/07/17/limiting-free-usage-of-cirrus-ci/",target:"_blank",rel:"noopener noreferrer"},y=t("h2",{id:"how-it-is-and-how-it-got-there",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#how-it-is-and-how-it-got-there","aria-hidden":"true"},"#"),e(" How it is, and how it got there")],-1),v=t("p",null,"Now, I don't want to come across as ungrateful to the fantastic service that Cirrus offers, so when this price change was first announced, we had originally intended to figure out if we could afford these price changes reasonably.",-1),_={href:"https://github.com/DeeDeeG",target:"_blank",rel:"noopener noreferrer"},k=i("<p>Keeping in mind that we trigger the same amount of runs per platform, the difference here is how slow or fast any given platform is during the build process:</p><table><thead><tr><th>Month</th><th>Windows Credits/Hours</th><th>Linux Credits/Hours</th><th>macOS Credits/Hours</th></tr></thead><tbody><tr><td>May</td><td>66 credits / 273 hours</td><td>72 credits / 396 hours</td><td>490 credits / 544 hours</td></tr><tr><td>July</td><td>55 credits / 229 hours</td><td>39 credits / 213 hours</td><td>305 credits / 339 hours</td></tr></tbody></table><p>Using this data, where we consider 1 credit = $1 USD, minus the novel 50 free credits, July would&#39;ve cost $349 USD. We could then realistically estimate that building Pulsar binaries will cost ~$350 USD a month.</p><p>Which when we consider that&#39;s a higher price than anything the Pulsar team spends any money on for Pulsar, it&#39;s a bit of a tough pill to swallow. But especially because Cirrus isn&#39;t the only service out there, no one on the team could justify spending our sponsor&#39;s money on such a large expense. At this point, we had to determine a way to lower our usage or move off the platform.</p><p>But to move off Cirrus, we had to consider everything it currently does for us:</p><ul><li>Builds binaries on every Pull Request</li><li>Builds our Regular Release Binaires</li><li>Builds our Rolling Release Binaries (on every commit to <code>master</code>)</li><li>Acts as a CDN for our Rolling Release Binaries (The <code>download</code> microservice redirects downloads directly to Cirrus)</li></ul><p>At this point, with the above knowledge, we had several different solutions to jugle and consider:</p><ul><li>We could move to another CI platform, but Cirrus is one of the cheaper ones</li><li>We could move most of our process to GitHub Actions</li><li>We could move everything to non-CI services, such as cloud hosted VMs</li><li>We could store binaires in other cloud storage services, such as GCP or Digital Ocean</li><li>We could slim down our Cirrus usage as much as possible</li></ul>",8),C={href:"https://github.com/pulsar-edit/pulsar/pull/682",target:"_blank",rel:"noopener noreferrer"},A=t("p",null,"While this did solve a few of our needs from above, it didn't solve all of them, and introduced its own issues.",-1),S={href:"https://github.com/orgs/github/projects/4247",target:"_blank",rel:"noopener noreferrer"},P=i("<p>In finding a solution to our platform support issue, we looked at quite a few possibilities, at a point we were even considering purchasing an Apple Silicon Mac, second hand, and using GitHub Self Hosted Runners to build there. But of course the simplest answer, would be to only build Apple Silicon on Cirrus, but we had to consider what that would actually come out to. Looking at using all 50 free credits for building only Apple Silicon binaries, would mean getting up to 833.333 minutes within Cirrus, but we had to compare those minutes into what we could acheive:</p><p><strong>Typical Apple Silicon task run lengths</strong></p><table><thead><tr><th>Run Type</th><th>Length in Minutes</th><th>Task runs/month</th></tr></thead><tbody><tr><td>Shortest Recorded</td><td>14.35</td><td>58</td></tr><tr><td>Average</td><td>17.947</td><td>46</td></tr><tr><td>Median</td><td>17.292</td><td>48</td></tr><tr><td>Longest Recorded</td><td>26.6</td><td>31</td></tr></tbody></table><p>So we could estimate to say we could have anywhere from 31-58 macOS runs per month (including re-runs for failures), but that shooting for ~30 macOS runs per month is a safer conservative estimate.</p><p>But, all of this above doesn&#39;t account for our ARM Linux runs, that also must stay at Cirrus CI. So we had to consider, within our 50 free credits per month that would get us 8333.333 minutes of Linux builds per month (Which that is not a typo, we are able to get 10x the amount of real-world macOS minutes compared to ARM Linux):</p><p><strong>Typical ARM Linux task run lengths</strong></p><table><thead><tr><th>Run Type</th><th>Length in Minutes</th><th>Task runs/month</th></tr></thead><tbody><tr><td>Shortest Recorded</td><td>28.367</td><td>293</td></tr><tr><td>Median</td><td>30.208</td><td>275</td></tr><tr><td>Average</td><td>32.114</td><td>259</td></tr><tr><td>Longest Recorded</td><td>45.883</td><td>181</td></tr></tbody></table><p>So while it seems we could build these platforms on Cirrus, there was temporarily a concern about if we could choose only one, to keep at our current pace, at this point we had to try and find if we should give any specific platform any priority, to which we turned to our install numbers (gathered from the logs of the <code>download</code> microservice):</p><p><strong>Rolling Release Download count by Platform over the past 30 days</strong>:</p><table><thead><tr><th>Platform</th><th>Download Count</th><th>Download Percentage</th></tr></thead><tbody><tr><td>Apple Silicon</td><td>860</td><td>15.59%</td></tr><tr><td>ARM Linux</td><td>109</td><td>1.97%</td></tr><tr><td>Windows</td><td>2,370</td><td>42.98%</td></tr><tr><td>Intel Mac</td><td>550</td><td>9.97%</td></tr><tr><td>Linux</td><td>1,624</td><td>29.45%</td></tr></tbody></table><p>With this, we could easily see that if one platform must be prioritized, the numbers say that priority should be given to Apple Silicon, even though, we knew we didn&#39;t want to play favourites with platforms.</p><p>It was at this point, we had to break down how many runs we could do for both platforms. If we assume each <strong>build</strong> is one Apple Silicon macOS run and one ARM Linux run:</p><table><thead><tr><th>Credit-Cost Build Type</th><th>Credits</th><th>Builds/month</th></tr></thead><tbody><tr><td>Lowest Recorded</td><td>1.032</td><td>48</td></tr><tr><td>Median</td><td>1.256</td><td>39</td></tr><tr><td>Average</td><td>1.269</td><td>39</td></tr><tr><td>Highest Recorded</td><td>1.766</td><td>28</td></tr></tbody></table><p>With these exact numbers of our current trends, we could then assume we have an allotment of 28 builds per month for these platforms. But consdering the possible need of retries, or a build erroring out, we had settled on building Apple Silicon, and ARM Linux once every other day. Which should give us about 15 builds per month minimum. This would give us a healthy buffer zone, or any retries needed, and the ability to do another run for the regular release every month.</p><p>But even though we now knew what we needed to do, there was still a long list of things we had to change to get there, especially now considering our deadline to do so was only a few days away.</p><p>After a flurry of PRs and lots of testing, the Pulsar team was able to accomplish all of the following in just under our 5 day limit:</p><ul><li>Migrated all other platforms over to GitHub Actions</li><li>Ensure binaries are easily downloadable via GitHub Actions for testing purposes</li><li>Configure CRON jobs within Cirrus to build these platforms every two days</li><li>Minimize the amount of times Cirrus would run, ensuring to only run if changes were present, and disallow any other type of run that may occur</li><li>Setup a brand new repository <code>pulsar-rolling-releases</code> to act as the CDN for every single rolling release</li><li>Nearly completely rewrite the <code>download</code> microservice to now use this new repository to retreive the newest rolling release</li></ul>",17),R={href:"https://github.com/pulsar-edit/pulsar-rolling-releases",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"download",-1),L=t("code",null,"pulsar-rolling-releases",-1),T=t("h2",{id:"summary",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),e(" Summary")],-1),I={href:"https://github.com/DeeDeeG",target:"_blank",rel:"noopener noreferrer"};function M(B,D){const o=d("ExternalLinkIcon");return a(),n("div",null,[u,l(" more "),c,t("p",null,[e("On August 17, 2022 "),t("a",p,[e("@mauricioszabo"),r(o)]),e(),t("a",g,[e("introduced"),r(o)]),e(" and created Pulsar's integration with "),t("a",f,[e("CirrusCI"),r(o)]),e(". Which is an overall, fantastic CI platform, that at the time had a very generous free tier. So generous in fact that every single binary built for Pulsar, since we started the project, has been built within this free tier.")]),t("p",null,[e("As those familiar with the project know, all of our funding comes from our fantastic community, via "),t("a",w,[e("OpenCollective"),r(o)]),e(" and "),t("a",m,[e("GitHub Sponsors"),r(o)]),e(", and we aim to be very careful about how we spend the money that is donated to us. At all times ensuring that the money is used in ways that can benefit the majority of our users, and that there is no better alternative for its purpose. That's why when Cirrus "),t("a",b,[e("announced"),r(o)]),e(" that they were changing their free tier to something a bit more restrictive we had to scramble to find a way to continue our pace.")]),y,v,t("p",null,[e("To determine what we could afford, we first had to estimate what we would've been paying the past months of usage. "),t("a",_,[e("@DeeDeeG"),r(o)]),e(" was able to break down exactly what our costs looked like, using our previous months data.")]),k,t("p",null,[e("But with all of these ideas, as a Do-ocracy, "),t("a",C,[e("attempts"),r(o)]),e(" began being made to switch as much as possible to GitHub Actions.")]),A,t("p",null,[e("The biggest one: GitHub Actions doesn't support Apple Silicon or ARM Linux. Even though Apple Silicon support is on GitHub's "),t("a",S,[e("Roadmap"),r(o)]),e(", it has been pushed forward over and over since June 15th, 2022. So this support wasn't something we could rely on.")]),P,t("p",null,[e("All of that work has culminated in a new CI plan for Pulsar, the one that is currently in effect starting September. On every single PR to the Pulsar repo, a binary will be built for Windows, Linux, and macOS. Once that PR is merged, a new rolling release will automatically be built, again just for these three platforms, which will then be publishing as a new release to the repository "),t("a",R,[e("pulsar-rolling-releases"),r(o)]),e(". Once on this repository the "),x,e(" microservice will be able to find and return these versions to any users attempting to download a rolling release of Pulsar. Then once every two days, Cirrus will be triggered to build binaries of Apple Silicon and ARM Linux. These new binaries will also be published to "),L,e(". Then whenever we plan to do a new regular release of Pulsar, once a new tag is created for this release, Cirrus will automatically be triggered to build binaires for its two platforms. Luckily for us, all of these changes mean we have not incurred any additional cost for the Pulsar project, even though there is some talk of officially supporting Cirrus on Open Collective at a price we can properly afford.")]),T,t("p",null,[e("While this blog post may have been a little data heavy, it's been a very busy time over in Pulsar, and I hope this blog can help explain why some things have changed, and help layout what things look like for the time being. Especially here, a huge thanks goes out to everyone that helped this migration on the Pulsar team, especially a huge thanks to "),t("a",I,[e("@DeeDeeG"),r(o)]),e(" for their amazing work in not only planning this migration, but enacting it. Additionally, I'd like to give thanks to all the developers at Cirrus, who not only provide an amazing service, especially one that has made Pulsar possible, but provides the platforms needed to support our users, and has been amazing at offering support whenever needed.")])])}const H=s(h,[["render",M],["__file","20230903-confused-Techie-pulsars-ci.html.vue"]]);export{H as default};
