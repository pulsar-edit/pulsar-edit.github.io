# Reusable reference blocks

This section is for reusable blocks to establish standards for presentation
within our Documentation in regards to our blocks of warnings and other
common areas. These use VuePress' slots for danger, warning, tip and details.
Use the first two as sparingly as possible unless **_ABSOLUTELY_** necessary.

## For sections that are under construction.

```
::: warning Under Construction
This document is under construction, please check back soon for updates.
Please see [our socials](/docs/launch-manual/sections/faq/#having-trouble) and feel free to ask for assistance or inquire as to the status of this document.
:::
```

## For archived sections

```
::: danger STOP
This is being kept for archival purposes only from the original Atom documentation. As this may no longer be relevant to Pulsar, use this at your own risk.
Current Pulsar documentation is found at [documentation home](/docs/launch-manual/getting-started).
:::
```

## For pre-release or beta functionality

```
::: info Pre-release information
This section is about a feature in pre-release. The information below documents
the intended functionality but there is still ongoing work to support these
features with stability.
:::
