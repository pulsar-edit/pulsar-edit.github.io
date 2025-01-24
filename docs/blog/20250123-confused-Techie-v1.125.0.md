---
title: "Pulsar v1.125.0: Happy New Years!"
author: confused-Techie
date: 2025-01-23
category:
  - dev
tag:
  - release
---

Pulsar [1.125.0](https://github.com/pulsar-edit/pulsar/releases/tag/v1.125.0) is available now!

<!-- more -->

## Pulsar v1.125.0: Happy New Years!

The Pulsar team is happy to welcome everyone to the new year on our ~~20~~25th regular release.

We've gone back on our last update's decision to add `source comment` to the `spell-check.grammar` setting by default, as it had a greater performance impact than anticipated. This does mean that by default comments in code are no longer spell checked, but if you liked the feature, you can of course add that setting back in. Just re-add `source comment` to the list of scopes under "Settings > Packages > spell-check > Grammars."

We've also restored an internal API that was changed a while back, so that the community package `project-plus` is returned to full functionality, after we learned it required said internal API. So we've made sure to make changes to get it working again where we can within Pulsar.

And like always, we have various other improvements, such as `language-css`s parser being updated to the latest, and `language-python` getting improved hinting for rare or unusual scenarios.

We've fixed an issue that would cause `pulsar` and `ppm` to be removed from the user's PATH on Windows during an upgrade, to ensure the choices you select during installation are respected.

And as always, we've engaged in some maintenance and updates to our CI operations, to ensure we can keep things working on all of our supported platforms.

As always, a huge thank you to our community, contributors, and donations.
Happy coding, and see you amongst the stars!
\- The Pulsar Team

---

- The Windows installer no longer removes `pulsar` and `ppm` from your path when you update Pulsar to a newer version.
- [spell-check] Removed `source comment` from the list of automatically checked scopes because of reports of high CPU usage. This means that Pulsar will no longer automatically perform spell-checking for all code comments in all source files. (If you liked the behavior, you can add it back to the list in the `spell-check.grammars` config setting.)
- [language-python] Improved indentation hinting in some unusual scenarios like on one-line blocks and after code comments.
- [language-css] Updated `tree-sitter-css` to latest. Selector handling is now much better when typing incomplete selectors in a brand-new CSS file or at the bottom of an existing file.
- Restored functionality of [project-plus](https://web.pulsar-edit.dev/packages/project-plus) via exposing previously removed internal APIs.

### Pulsar

- Tree-sitter rolling fixes, 1.125 (or 1.124.1) edition [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1172)
- Windows: Only remove Pulsar/PPM from PATH during uninstall [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/1183)
- CI: Retry on timeout when building macOS bins [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1178)
- Install dependencies for CI documentation job [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1193)
- Attempt to install dependency on new Ubuntu CI images [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1192)
- CI: No dpkg shenanigans for package tests workflow [@DeeDeeG](https://github.com/pulsar-edit/pulsar/pull/1188)
- Expose `dbPromise` in `StateStore` [@confused-Techie](https://github.com/pulsar-edit/pulsar/pull/1171)

### pulsar-updater

- Don't prompt to update on non-default release channels [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1185)

### spell-check

- Fixes for a possible patch release [@savetheclocktower](https://github.com/pulsar-edit/pulsar/pull/1173)
