---
title: A Sunset and the Misadventures of a Backend
author: confused-Techie
date: 2022-11-27
category:
  - dev
  - log
tag:
  - backend
  - sunset
---

What's the natural response to finding out an application you use is being sunset?
Spend the next several months creating a complex backend infrastructure of course!

<!-- more -->

In this blog post, which is my first so apologies if the style is widely inconsistent with everything else, I hope to get a place to talk about the journey that's occurred after the announcement of Atom's Sunset and the larger-than-assumed effect it has had on my life.

Like some others, I'm assuming, on a normal day I was browsing Reddit when I saw the initial announcement. On June 8th of 2022 GitHub officially [announced](https://github.blog/2022-06-08-sunsetting-atom/) that they were going to sunset Atom.

Now to give some background on where I was, I've never actually looked at the Atom source code. I used it every day, was the first thing I installed on new computers. But I liked it as a tool, and never paid much mind to how it was internally structured. But one of my favourite things was packages. The ability to install a package that can do nearly anything has always been amazing to me. I know many other applications can do this, but with this one feature Atom was everything I had ever wanted out of a text editor, and more so could be anything I ever want in the future.

So I knew with the announcement that this would mean I wouldn't be able to install packages. So right away I did what anyone would, find out how to keep packages going.

### The Archival

On June 12th of 2022, I wrote a [super simple script](https://github.com/confused-Techie/AtomPackagesArchive), one that would just absolutely hammer Atom's package repository and get everything I possibly could. The only goal here was to archive every single package and all of their versions. Hoping that later I'd figure out what I could do with this data.

It was around that same time I started to see [Atom Community](https://github.com/atom-community) mentioned as the most likely fork to succeed after Atom. So of course seeing their GitHub I joined their Discord and got going with a group of other talented volunteers to start seeing what needed to be done.

Now I'll skip over the details about Atom Community, and the eventual split that occurred and focus on what my role was in the programming aspect.

After creating this small script, I think what really made all of this feel like an actual team effort was the first PR I received for this project. A small diff, only `+4 | -1` over on [`confused-Techie/AtomPackagesArchive`](https://github.com/confused-Techie/AtomPackagesArchive/pull/1) by @DeeDeeG, but what it really meant was that truly there was a community here that cared about keeping this whole ecosystem alive the same way I did. And from there, that's all that was needed to be off to the races.

### What to do with this Data

So now armed with a few thousand JSON files of Atom's Archived data, I had to figure out what made their backend tick. And since the Atom Package Repository is seemingly the only part of Atom that wasn't open source, I had nothing to base this on at all. So I just started hammering their servers.

Hitting every single endpoint that was in the documentation with each variance of query parameters and HTTP Methods that I could think of. To see what broke, how it broke, and what it says when it breaks.

On June 13th of 2022, I started the [`atom-community-server-backend`](https://github.com/confused-Techie/atom-community-server-backend), what I thought would be the home of the new Backend for Atom Community, and there I delved into the strange idiosyncrasies of Atom. Still, the strangest one that sticks in my head, is I could tell how strange the codebase was just from the error messages. The best example, `GET atom.io/api/packages/:invalidName` Returns `{ message: "Not Found" }` _but_ hitting `GET atom.io/api/users/:invalidName/stars` returns `{ message: "Not found" }`.
Meaning that there was completely different code handling not found in one place, and in another. Notice the difference in capitalization.

But soon after creating the repo, I realized that no one else on this small team we had was familiar with Golang at all, which is what I had initially written this in. So I switched over to JavaScript, which in the long run was likely a great choice as that is my most familair language. And that's where I created `confused-Techie/atom-community-server-backend-JS`, a mouthful I know, but was much later renamed just to [`confused-Techie/atom-backend`](https://github.com/confused-Techie/atom-backend).

### The Misadventures Part

At this point speed was picking up, there was so much to do and so little time. Rapid fire code was being written and things were being tested.

One thing that needed to be done was to take this mess of data I had archived and check it all. The most important thing I wanted to do, checked if everything was still valid, that is see if the GitHub repo each package pointed to still existed.

Now in doing this, I ended up needing to look up a repo on GitHub many times. So many times I accidentally got my IP blocked from them. A huge oversight on my part, and not at all an issue with them, but I remember the stress that was caused when attempting to work together with several others on GitHub while being blocked by GitHub.

In the end, the [`confused-Techie/atom-package-migrator`](https://github.com/confused-Techie/atom-package-migrator) was able to check if every single package was valid, while also removing a list of banned package names that we had put together.

Now this of itself was a feat, considering the following:

- Total Packages Archived from Atom: 12,470
- Total Packages Migrated: 11,074
- Total Packages Unavailable: 1,381
- Total Packages w/ Banned Names: 10
- Total Packages w/ URL-Unsafe Names: 5

But from there we now had 11,074 packages that we needed to keep safe and find a way to distribute to any user of the new Atom, wherever that ended up being.

At this point, the other hardest part was that the Atom website for lack of better words, was on its last legs. With constant errors, crashes, and generally just failing to respond, it was clear things were nearing an end. Even worse was that when it would work, it was inundated with thousands of Spam packages. In the days after my initial archive, the original Package Repository had ballooned with spam packages now with their total packages totaling in... well. I just can't quite say. Even now during the time of writing I've spent ten minutes refreshing `Atom.io/packages` and it won't stop timing out or returning 500 errors. But for the sake of my point, I've kept trying, to confirm that the original Package Repository has ballooned with spam packages now to contain 405,137 Packages. But remember when I did my initial archival there were only 12,470. Just to convey how much spam this is, and how ridiculous it is that the service turned into this immediately after the announcement.

But the last hardest part of this stage was the problems that I created for myself.

Now you see, up until this point I've never had to worry about handling this much data. It wasn't until it was too late did I find out that my methodology was ill-fitting. I had written a nearly complete feature parity Backend for the Atom Package Repository, that expected all of its data to be JSON. Now anyone that's done this before will say that was a dumb choice, but forgive me for only being smaller scale prior. The excitement of being nearly done immediately faded, when I got the new backend running in the cloud, and threw all of my data at it. Every single package.

Then simply I requested the default screen `/api/packages` which, in my poor implementation would scan every single package, then would filter it based on query parameters. Which would be iterating through every single one of them. Now you may hear this and think of course performance was terrible, and trust me it was a concern I had to, on commit [`f792a4975f932f20528b871e189300bd97585dac`](https://github.com/confused-Techie/atom-backend/commit/f792a4975f932f20528b871e189300bd97585dac) I wrote the following comment after creating this terrible method.

```javascript
// One note of concern with chaining all of these together, is that this will potentially loop
// through the entire array of packages 3 times, resulting in a
// linear time complexity of O(3). But testing will have to determine how much that is a factor of concern.
```

Now I'm no mathematician and my understanding of Time Complexity is best described as weak, but I knew it could be a bad idea.
And boy was it.

Resuming after I had pushed everything to the cloud and hit my endpoint, I got no response. Or rather I thought it was no response. The page took well over `300` seconds before most often it would time out.

So this meant I had to rewrite the entire thing to no longer assume we had JSON data, that's when we had to migrate the entire Backend Codebase to use an SQL server.

### The Good News

Once the rewrite was done I posted the following on our Discord server.

---

But heres some news I'm very excited to see, about the improvements of performance on the iterations of the backend, when querying `/api/packages` (As in get all packages with default sorts)

- Reading all data from JSON on disk, took <300 seconds
- Reading all packages from shoehorned, unoptimized SQL 39800ms or ~40 seconds
- Reading all packages from optimized, properly normalized SQL 365ms or 0.365 seconds

Keep in mind these times are from the server itself. So that includes the express server getting the request, filtering query parameters, querying the SQL server over the web, and rebuilding/pruning the JSON response.
But this is great to see, and is finally something that seems shippable, even if it can be further optimized

---

So with that, it was time to finish rewriting the backend, which while the struggles were not over, we had at least gotten over the (as so far) biggest hurdle.

But beyond this, it was at this point we had a proper community. A team of skilled contributors are all willing to pull their weight to make this happen. We all have lives outside this project, we all live in different areas, in different timezones, and speak different languages. But the one thing we have in common is our mission, of keeping an Open Source Project we care about alive.

Throughout all of this, that has been my biggest takeaway. The most important lesson I think is available to learn here, and one I don't want to forget any time soon.

---

What's the natural response to finding out an application you use is being sunset?

Take pride in the Open-Source community around you, and be thankful we live in a time where all that's needed to build a community and team is the text editor you choose to use.

Thanks for reading, and as I always say thanks for contributing.
