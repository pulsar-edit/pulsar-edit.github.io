---
lang: en-us
title: Provider API
---

# Provider API

::: warning
Please note that its possible this is outdated, as its original version was published by @'Nathan Sobo' on Jan 3, 2018.
:::

The Provider API allows you to make autocomplete+ awesome. The Pulsar community will ultimately judge the quality of Pulsar's autocomplete experience by the breadth and depth of the provider ecosystem. We're so excited that you're here reading about how to make Pulsar awesome.

> The following examples are in CoffeeScript. If you would like to add JavaScript examples, please feel free to edit this page!

## Defining A Provider

```coffee
provider =
  # This will work on JavaScript and CoffeeScript files, but not in js comments.
  selector: '.source.js, .source.coffee'
  disableForSelector: '.source.js .comment'

  # This will take priority over the default provider, which has an inclusionPriority of 0.
  # `excludeLowerPriority` will suppress any providers with a lower priority
  # i.e. The default provider will be suppressed
  inclusionPriority: 1
  excludeLowerPriority: true

  # This will be suggested before the default provider, which has a suggestionPriority of 1.
  suggestionPriority: 2

  # Let autocomplete+ filter and sort the suggestions you provide.
  filterSuggestions: true

  # Required: Return a promise, an array of suggestions, or null.
  getSuggestions: ({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) ->
    new Promise (resolve) ->
      resolve([text: 'something'])

  # (optional): (*experimental*) called when user the user selects a suggestion for the purpose of loading additional information about the suggestion.
  getSuggestionDetailsOnSelect: (suggestion) ->
    new Promise (resolve) ->
      resolve(newSuggestion)

  # (optional): called _after_ the suggestion `replacementPrefix` is replaced
  # by the suggestion `text` in the buffer
  onDidInsertSuggestion: ({editor, triggerPosition, suggestion}) ->

  # (optional): called when your provider needs to be cleaned up. Unsubscribe
  # from things, kill any processes, etc.
  dispose: ->
```

The properties of a provider:

- `selector` (required): Defines the scope selector(s) (can be comma-separated) for which your provider should receive suggestion requests
- `getSuggestions` (required): Is called when a suggestion request has been dispatched by `autocomplete+` to your provider. Return an array of suggestions (if any) in the order you would like them displayed to the user. Returning a Promise of an array of suggestions is also supported.
- `getSuggestionDetailsOnSelect` (optional): (**experimental**) Is called when a suggestion is selected by the user for the purpose of loading more information about the suggestion. Return a Promise of the new suggestion to replace it with or return `null` if no change is needed.
- `disableForSelector` (optional): Defines the scope selector(s) (can be comma-separated) for which your provider should not be used
- `inclusionPriority` (optional): A number to indicate its priority to be included in a suggestions request. The default provider has an inclusion priority of `0`. Higher priority providers can suppress lower priority providers with `excludeLowerPriority`.
- `excludeLowerPriority` (optional): Will not use lower priority providers when this provider is used.
- `suggestionPriority` (optional): A number to determine the sort order of suggestions. The default provider has an suggestion priority of `1`
- `filterSuggestions` (optional): If set to `true`, `autocomplete+` will perform fuzzy filtering and sorting on the list of matches returned by `getSuggestions`.
- `dispose` (optional): Will be called if your provider is being destroyed by `autocomplete+`
- `onDidInsertSuggestion` (optional): Function that is called when a suggestion from your provider was inserted into the buffer
  - `editor`: the [TextEditor](https://atom.io/docs/api/latest/TextEditor) your suggestion was inserted in
  - `triggerPosition`: A [Point](https://atom.io/docs/api/latest/Point) where autocomplete was triggered
  - `suggestion`: The suggestion object that was inserted.

## Support For Asynchronous Request Handling

Some providers satisfy a suggestion request in an asynchronous way (e.g. it may need to dispatch requests to an external process to get suggestions). To asynchronously provide suggestions, simply return a `Promise` from your `getSuggestions`:

```coffeescript
getSuggestions: (options) ->
  return new Promise (resolve) ->
    # Build your suggestions here asynchronously...
    resolve(suggestions) # When you are done, call resolve and pass your suggestions to it
```

## The Suggestion Request's Options Object

An `options` object will be passed to your `getSuggestions` function, with the following properties:

- `editor`: The current `TextEditor`
- `bufferPosition`: The position of the cursor
- `scopeDescriptor`: The [scope descriptor](http://flight-manual.atom.io/behind-atom/sections/scoped-settings-scopes-and-scope-descriptors/#scope-descriptors) for the current cursor position
- `prefix`: The word characters immediately preceding the current cursor position
- `activatedManually`: Whether the autocomplete request was initiated by the user (e.g. with ctrl+space)

## Suggestions

```coffee
provider =
  selector: '.source.js, .source.coffee'
  disableForSelector: '.source.js .comment'

  getSuggestions: ({editor, bufferPosition, scopeDescriptor, prefix}) ->
    new Promise (resolve) ->
      # Find your suggestions here
      suggestion =
        text: 'someText' # OR
        snippet: 'someText(${1:myArg})'
        displayText: 'someText' # (optional)
        replacementPrefix: 'so' # (optional)
        type: 'function' # (optional)
        leftLabel: '' # (optional)
        leftLabelHTML: '' # (optional)
        rightLabel: '' # (optional)
        rightLabelHTML: '' # (optional)
        className: '' # (optional)
        iconHTML: '' # (optional)
        description: '' # (optional)
        descriptionMoreURL: '' # (optional)
        characterMatchIndices: [0, 1, 2] # (optional)
      resolve([suggestion])
```

Your suggestions should be returned from `getSuggestions` as an array of objects with the following properties:

- `text` (required; or `snippet`): The text which will be inserted into the editor, in place of the prefix
- `snippet` (required; or `text`): A snippet string. This will allow users to tab through function arguments or other options. e.g. `'myFunction(${1:arg1}, ${2:arg2})'`. See the [snippets](https://github.com/pulsar-edit/snippets) package for more information.
- `displayText` (optional): A string that will show in the UI for this suggestion. When not set, `snippet || text` is displayed. This is useful when `snippet` or `text` displays too much, and you want to simplify. e.g. `{type: 'attribute', snippet: 'class="$0"$1', displayText: 'class'}`
- `replacementPrefix` (optional): The text immediately preceding the cursor, which will be replaced by the `text`. If not provided, the prefix passed into `getSuggestions` will be used.
- `type` (optional): The suggestion type. It will be converted into an icon shown against the suggestion. [screenshot](https://github.com/atom-community/autocomplete-plus/pull/334). Predefined styles exist for `variable`, `constant`, `property`, `value`, `method`, `function`, `class`, `type`, `keyword`, `tag`, `snippet`, `import`, `require`. This list represents nearly everything being colorized.
- `leftLabel` (optional): This is shown before the suggestion. Useful for return values. [screenshot](https://github.com/atom-community/autocomplete-plus/pull/334)
- `leftLabelHTML` (optional): Use this instead of `leftLabel` if you want to use html for the left label.
- `rightLabel` (optional): An indicator (e.g. `function`, `variable`) denoting the "kind" of suggestion this represents
- `rightLabelHTML` (optional): Use this instead of `rightLabel` if you want to use html for the right label.
- `className` (optional): Class name for the suggestion in the suggestion list. Allows you to style your suggestion via CSS, if desired
- `iconHTML` (optional): If you want complete control over the icon shown against the suggestion. e.g. ` iconHTML: '<i class="icon-move-right"></i>'` [screenshot](https://github.com/atom-community/autocomplete-plus/pull/334). The background color of the icon will still be determined (by default) from the `type`.
- `description` (optional): A doc-string summary or short description of the suggestion. When specified, it will be displayed at the bottom of the suggestions list.
- `descriptionMoreURL` (optional): A url to the documentation or more information about this suggestion. When specified, a `More..` link will be displayed in the description area.
  ![autocomplete-description](./autocomplete-description.jpg)
- `characterMatchIndices` (optional): A list of indexes where the characters in the prefix appear in this suggestion's text. e.g. "foo" in "foo_bar" would be `[0, 1, 2]`.

## Registering Your Provider With `autocomplete+`

### API 4.0.0

In your `package.json`, add:

```javascript
"providedServices": {
  "autocomplete.provider": {
    "versions": {
      "4.0.0": "provide"
    }
  }
}
```

Then, in your `main.coffee` (or whatever file you define as your `main` in `package.json` i.e. `"main": "./lib/your-main"` would imply `your-main.coffee`), add the following:

For a single provider:

```coffeescript
module.exports =
  provide: -> @yourProviderHere
```

For multiple providers, just return an array:

```coffeescript
module.exports =
  provide: -> [@yourProviderHere, @yourOtherProviderHere]
```

## Provider Examples

We've taken to making each provider its own clean repo:

- [Autocomplete CSS](https://github.com/pulsar-edit/autocomplete-css)
- [Autocomplete HTML](https://github.com/pular-edit/autocomplete-html)
- [Autocomplete Snippets](https://github.com/pulsar-edit/autocomplete-snippets)

Check out the lib directory in each of these for the code!

## Tips

### Generating a new prefix

The `prefix` passed to `getSuggestions` may not be sufficient for your language. You may need to generate your own prefix. Here is a pattern to use your own prefix:

```coffee
provider =
  selector: '.source.js, .source.coffee'

  getSuggestions: ({editor, bufferPosition}) ->
    prefix = @getPrefix(editor, bufferPosition)

    new Promise (resolve) ->
      suggestion =
        text: 'someText'
        replacementPrefix: prefix
      resolve([suggestion])

  getPrefix: (editor, bufferPosition) ->
    # Whatever your prefix regex might be
    regex = /[\w0-9_-]+$/

    # Get the text for the line up to the triggered buffer position
    line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition])

    # Match the regex to the line, and return the match
    line.match(regex)?[0] or ''
```
