# Outline for Pulsar documentation

This uses the og atom Flight manual as a base, and converts and refactors it for modern standards. This will be converted to and tracked from our projects using seperate ones for each section.

## Old Already "Finished" sections

These are alredy in our atom-archive folder. These just need to be reformatted, branding changed, and use ours and more modern standards. Especially since as we move to more updated libraries methods mentioned in these sections will change and/or break.

### Chapter 1: Getting Started

- Why Atom?
- Installing Atom
- Atom Basics
- Summary

### Chapter 2: Using Atom

- Atom Packages
- Moving in Atom
- Atom Selections
- Editing and Deleting Text
- Find and Replace
- Snippets
- Autocomplete
- Folding
- Panes
- Pending Pane Items
- Grammar
- Version Control in Atom
- GitHub package
- Writing in Atom
- Basic Customization
- Summary

### Chapter 3: Hacking Atom

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
- Hacking on Atom Core
- Contributing to Official Atom Packages
- Creating a Fork of a Core Package in atom/atom
- Maintaining a Fork of a Core Package in atom/atom
- Summary

### Chapter 4: Behind Atom

- Configuration API
- Keymaps In-Depth
- Scoped Settings, Scopes and Scope Descriptors
- Serialization in Atom
- Developing Node Modules
- Interacting With Other Packages Via Services
- Maintaining Your Packages
- How Atom Uses Chromium Snapshots
- Summary

### Reference: API

**_this section is not loaded in since it's in JSON files we need to parse._**

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

### Appendix A: Resources

#### Glossary

- This section may be done already in the old one, but may need updating.

### Appendix B: FAQ

- Is Atom open source?
- What does Atom cost?
- What platforms does Atom run on?
- How can I contribute to Atom?
- Why does Atom collect usage data?
- Atom in the cloud?
- What's the difference between an IDE and an editor?
- How can I tell if subpixel antialiasing is working?
- Why is Atom deleting trailing whitespace? Why is there a newline at the end of the file?
- What does Safe Mode do?
- I have a question about a specific Atom community package. Where is the best place to ask it?
- I’m using an international keyboard and keys that use AltGr or Ctrl+Alt aren’t working
- I’m having a problem with Julia! What do I do?
- I’m getting an error about a “self-signed certificate”. What do I do?
- I’m having a problem with PlatformIO! What do I do?
- How do I make Atom recognize a file with extension X as language Y?
- How do I make the Welcome screen stop showing up?
- How do I preview web page changes automatically?
- How do I accept input from my program or script when using the script package?
- I am unable to update to the latest version of Atom on macOS. How do I fix this?
- I’m trying to change my syntax colors from styles.less, but it isn’t working!
- How do I build or execute code I've written in Atom?
- How do I uninstall Atom on macOS?
- macOS Mojave font rendering change
- Why does macOS say that Atom wants to access my calendar, contacts, photos, etc.?
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

### Appendix E: Atom server-side APIs

- Atom package server API
- Atom update server API

## The remaining bits to be written and finished:

### Chapter 3: Hacking Atom

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

## Chapter 4: Behind Atom

- advanced dev tools
  - keybinding resolver
  - timecop
- Maintaining Packages
  - how to publish
    - Atom.io package system (adding, searching, stars)
  - changelog
  - issue tracker
- Best practices (patterns and anti-patterns)
  - aggregating subscriptions
  - view best practices
  - don't make a slow package
  - CI for packages (https://blog.atom.io/2014/04/25/ci-for-your-packages.html)

### Include in Chapter 3 or 4

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
    - no longer spacepen
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

## Chapter 5: Contributing to Atom

- To packages
  - Cloning and apm linking
  - apm install/update
  - Native modules
  - Running specs
  - Link to sending a pull request
- To core
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

## ~Chapter 6: Electron~

This section is probably going to be relegated to not being implemented. We have no control over electron and the best we can do is point people to their website elsewhere.

- ~developing a new project in electron~
- ~https://github.com/atom/electron~

## Chapter 7 / Appendix

- Reference Manual
- Cookbook snippets <- this should be moved and put elsewhere.
  - As in this Is probably more tutorial related if we want to make a section based on tutorials and move them all there.
