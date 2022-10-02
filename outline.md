# Outline for Pulsar documentation

This uses the original material from the Atom Flight manual(their documentation) as a base, and converts and refactors it for modern standards. This will be converted to and tracked from our projects using seperate ones for each section. It is fully expected that all text from your sections has been ran through a tool like [Language Tool](https://languagetool.org). All material should be free from as many errors as possible. We would like to eventually add support for other languages using a language translation service. That way we aren't alienating our userbases from other parts of the world.

## Old Already "Finished" sections

These are already in our atom-archive folder. These just need to be reformatted, branding changed, and use ours and more modern standards. Especially since as we move to more updated libraries methods mentioned in these sections will change and/or break.

### Launch Manual

#### Getting Started

- Why Pulsar?
- Installing Pulsar
- Pulsar Basics
- Summary

#### Using Pulsar

- Pulsar Packages
- Moving in Pulsar
- Pulsar Selections
- Editing and Deleting Text
- Find and Replace
- Snippets
- Autocomplete
- Folding
- Panes
- Pending Pane Items
- Grammar
- Version Control in Pulsar
- GitHub package
- Writing in Pulsar
- Basic Customization
- Summary

#### Hacking Pulsar

- Tools of the Trade
- The Init File
- Package: Word Count
- Package: Modifying Text
- Package: Active Editor Info
- Creating a Theme
- Creating a Grammar
- Creating a Legacy TextMate Grammar
- Publishing
- Iconography
- Debugging
- Writing specs
- Handling URIs
- Cross-Platform Compatibility
- Converting from TextMate
- Hacking on Pulsar Core
- Contributing to Official Pulsar Packages
- Creating a Fork of a Core Package in pulsar/pulsar
- Maintaining a Fork of a Core Package in pulsar/pulsar
- Summary

### Advanced topics

- Configuration API
- Keymaps In-Depth
- Scoped Settings, Scopes and Scope Descriptors
- Serialization in Pulsar
- Developing Node Modules
- Interacting With Other Packages Via Services
- Maintaining Your Packages
- How Pulsar Uses Chromium Snapshots
- Summary

### Resources

#### Glossary

- This section may be done already in the old one, but may need updating.

### FAQ

- Is Pulsar open source?
- What does Pulsar cost?
- What platforms does Pulsar run on?
- How can I contribute to Pulsar?
- Why does Pulsar collect usage data?
- Pulsar in the cloud?
- What's the difference between an IDE and an editor?
- How can I tell if subpixel antialiasing is working?
- Why is Pulsar deleting trailing whitespace? Why is there a newline at the end of the file?
- What does Safe Mode do?
- I have a question about a specific Pulsar community package. Where is the best place to ask it?
- I’m using an international keyboard and keys that use AltGr or Ctrl+Alt aren’t working
- I’m having a problem with Julia! What do I do?
- I’m getting an error about a “self-signed certificate”. What do I do?
- I’m having a problem with PlatformIO! What do I do?
- How do I make Pulsar recognize a file with extension X as language Y?
- How do I make the Welcome screen stop showing up?
- How do I preview web page changes automatically?
- How do I accept input from my program or script when using the script package?
- I am unable to update to the latest version of Pulsar on macOS. How do I fix this?
- I’m trying to change my syntax colors from styles.less, but it isn’t working!
- How do I build or execute code I've written in Pulsar?
- How do I uninstall Pulsar on macOS?
- macOS Mojave font rendering change
- Why does macOS say that Pulsar wants to access my calendar, contacts, photos, etc.?
- How do I turn on line wrap?
- The menu bar disappeared, how do I get it back?
- How do I use a newline in the result of find and replace?
- What is this line on the right in the editor view?

### Appendix C: Shadow DOM

- Removing Shadow DOM styles

### Appendix D: Upgrading to 1.0 APIs

- Upgrading Your Package
- Upgrading Your UI Theme Or Package Selectors
- Upgrading Your Syntax Theme

### Appendix E: Pulsar server-side APIs

- Pulsar package server API
- Pulsar update server API

## The remaining bits to be written and finished:

### Hacking Pulsar

- Tutorials:
  - Word Count Package (Basic)
  - Word Count Status Bar (status bar manipulation)
  - Go To Line Package (simple with feedback and cursor movement)
  - Open On GitHub - (no UI, just run command)
  - Snippets - (modify text in a buffer)
  - Linter - (modify text in a buffer, shell to external command)
  - Preview Pane (add a panel)
  - Fuzzy Finder (modal and open file in new tab)
  - Tree View / Mini-map (add a sidebar panel)
  - Status Bar (add small panel)
  - Git-Log / Settings View (standalone UI in tab)
  - Git-status / Bookmarks (decorate gutter)
  - Autocomplete / Color picker (in-context UI)
  - Vim-mode (editor remapping)
  - Image View (file type rendering handler)
  - Language (GFM?)
    - Creating grammars
    - converting-a-text-mate-bundle.md
  - Unity UI (UI theme)
    - converting-a-text-mate-theme.md
    - theme-variables.md
    - Shadow DOM
    - https://atom.io/docs/latest/upgrading/upgrading-your-ui-theme

### Advanced Hacking

- advanced dev tools
  - keybinding resolver
  - timecop
- Maintaining Packages
  - how to publish
    - pulsar-edit.dev package system (adding, searching, stars)
  - changelog
  - issue tracker
- Best practices (patterns and anti-patterns)
  - aggregating subscriptions
  - view best practices
  - don't make a slow package
  - CI for packages (https://blog.pulsar-edit.dev/2014/04/25/ci-for-your-packages.html)
- Reference Manual

### Include in Core Hacking or Behind Pulsar

- Make sure we include (in Ch 3 or Ch4 or both)
  - scopes (https://atom.io/docs/v0.174.0/advanced/scopes-and-scope-descriptors)
  - views / models
  - settings (how to enable the settings button on the package installer)
  - notifications package
  - config api
    - https://blog.atom.io/2014/10/02/config-api-has-schema.html
    - https://blog.atom.io/2014/10/31/language-scoped-config.html
    - https://atom.io/docs/latest/advanced/scopes-and-scope-descriptors
  - subscriptions
    - https://blog.atom.io/2014/09/16/new-event-subscription-api.html
    - subscribing to events
    - subscribing to commands
  - creating dom elements
  - runners
  - configure my package
  - add application menu/context menu
  - get all the editors
  - understand when the active editor changes
  - background tasks
  - messages to the user
  - dialogs
  - advanced keymaps (in Guides)
  - serialization
  - converting textmate bundles
  - decoration (https://blog.atom.io/2014/07/24/decorations.html)
  - modal panel
  - modal decorations
  - notifications

### Contributing to Atom

- To packages:
  - Cloning and apm linking
  - apm install/update
  - Native modules
  - Running specs
  - Link to sending a pull request
- To core:
  - Opening issues
  - Roadmaps
    - https://blog.atom.io/2014/10/23/public-roadmap.html
  - Where is the code?
  - Forum
  - Building Atom
  - Technologies it uses
    - Node
      - between here and npm, probably list the packages we make suse of and what they do in terms of the project. This is going to be where we need support from the Core and backend team.
    - Atom-shell
    - apm
    - npm
      - Etch with note we're transitioning to solidjs
      - Electron
  - Coding conventions
  - Commit conventions

### Further

- Cookbook snippets <- this should be moved and put elsewhere.
  - As in this Is probably more tutorial related if we want to make a section based on tutorials and move them all there.

### API Manual

#### Client API

**_this section is not loaded in since it's in JSON files we need to parse._**

<!-- This section needs to be organized by purpose, if I'm looking for I/O, file management where would I go for that? I'm including some sections for this that we can decide upon which to add, and where to put what already exists -->

- File Management
- I/O
- Styling

<!-- These have not been categorized into any section above and need to be moved -->

- AtomEnvironment
- BufferedNodeProcess
- BufferedProcess
- Clipboard
- Color
- CommandRegistry
- CompositeDisposable
- Config
- ContextMenuManager
- Cursor
- Decoration
- DeserializerManager
- Directory
- DisplayMarker
- DisplayMarkerLayer
- Disposable
- Dock
- Emitter
- File
- GitRepository
- Grammar
- GrammarRegistry
- Gutter
- HistoryManager
- KeymapManager
- LayerDecoration
- MarkerLayer
- MenuManager
- Notification
- NotificationManager
- Package
- PackageManager
- Pane
- Panel
- PathWatcher
- Point
- Project
- Range
- ScopeDescriptor
- Selection
- StyleManager
- Task
- TextBuffer
- TextEditor
- ThemeManager
- TooltipManager
- ViewRegistry
- Workspace
- WorkspaceCenter

#### Package Server API

<!-- TODO -->

#### Other API

<!-- TODO This needs to figured out what others we need here -->

### Atom archive

The "chapters" from the orignal, this section is done. It only serves as a
reference guide to make copies of in it's new home and then `rebrand -> update -> reorganize` we fully expect that these files are now at a state where we can
leave them alone in this folder. However We do expect that you pull from here
and update things if we do not already have it updated ourselves. It should be
easier to pull from here instead of writing from scratch. If need be put
warnings ala our common text blocks in the sections, warning that these are
under active development to fit things.
