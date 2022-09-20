---
title: Release Process
prev: /docs/packages/core/list.html
---

# Release Process

::: warning
Please note that its possible this is outdated, as its original version was published by @'David Wilson' on Jan 22, 2018.
:::

## Steps

1. Pull down the latest changes from `master`.
2. Edit [CHANGELOG.md](https://github.com/pulsar-edit/atom-languageclient/blob/master/CHANGELOG.md) to add relevant release notes for changes wince the previous release with a corresponding `## N.N.N` section header.
3. Add and commit CHANGELOG.md with message "Updated CHANGELOG for [version in format N.N.N]".
4. Run `npm run test` and verify that no tests failed.
5. Run `npm run flow` and verify that there are no errors.
6. Run `npm version [version type]` where the version type is `major`, `minor`, or `path` depending on the [semantic versioning](https://semver.org/) impact of the changes.
7. Run `git log -1` and make sure a commit was made for the new version (double-check version in package.json if you like).
8. If all looks good, run `npm publish` to publish the package.
9. Run `git push --tags` to push the new version tag to GitHub.
10. Go to the atom-languageclient [tags page](https://github.com/pulsar-edit/atom-languageclient/tags) and click "Add Release Notes" for the tag corresponding to the release you just published.
11. Paste the contents of your new CHANGELOG.md section, sans version header, into the "Describe this release" box.
12. Click the "Publish release" button.
13. 🎉
