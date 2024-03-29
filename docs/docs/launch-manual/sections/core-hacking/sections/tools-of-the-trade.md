## Tools of the Trade

To begin, there are a few things we'll assume you know, at least to some degree.
Since all of Pulsar is implemented using web technologies, we have to assume you
know web technologies such as JavaScript and CSS. Specifically, we'll be using
Less, which is a preprocessor for CSS.

<!--This whole section needs to be reworked once decaff properly starts on the core-->

While much of Pulsar has been converted to JavaScript, a lot of older code is
still implemented in CoffeeScript but the process of "decaffeination" is
ongoing, to continue this conversion feel free to read [more](https://github.com/pulsar-edit/.github/blob/main/project-birth/CONTRIBUTING-DURING-START.md#decaffeination).
Additionally, Pulsar's default configuration language is CSON, which is based on
CoffeeScript. If you don't know CoffeeScript, but you are familiar with
JavaScript, you shouldn't have too much trouble. Here is an example of some
simple CoffeeScript code:

```coffee
MyPackageView = require './my-package-view'

module.exports =
  myPackageView: null

  activate: (state) ->
    @myPackageView = new MyPackageView(state.myPackageViewState)

  deactivate: ->
    @myPackageView.destroy()

  serialize: ->
    myPackageViewState: @myPackageView.serialize()
```

We'll go over examples like this in a bit, but this is what the language looks
like. Just about everything you can do with CoffeeScript in Pulsar is also
doable in JavaScript. You can brush up on CoffeeScript at [coffeescript.org](http://coffeescript.org).

Less is an even simpler transition from CSS. It adds a number of useful things
like variables and functions to CSS. You can learn about Less at [lesscss.org](http://lesscss.org/).
Our usage of Less won't get too complex in this book however, so as long as you
know basic CSS you should be fine.
