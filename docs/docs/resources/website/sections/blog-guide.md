## Blog guide

This is a guide on how to add a blog post to the website which will be shown on
[http://pulsar-edit.dev/article/](http://pulsar-edit.dev/article/).

We are using the [Vuepress Blog Plugin](https://vuepress-theme-hope.github.io/v2/blog/)
which comes as part of our Vuepress Hope Theme with some light configuration
to suit our purposes.

This is all implemented in the main [website repository](https://github.com/pulsar-edit/pulsar-edit.github.io).

### Writing a new post

- Create a new .md file in pulsar-edit.github.io/docs/blog.
  - This file should be named `YYYYMMDD-<author>-<title>.md` e.g `20221031-CreativeUsername-ThisIsMyBlogPost.md`
- The metadata displayed on the website is dependent on a number of items that
  are configured in the YAML frontmatter of the file. You may in theory omit any of these except the title
  field but it's strongly recommend that you use `title`, `author`, `date`, `category`
  and `tag` as the minimum as the others will default to false.
  - Frontmatter items supported currently are:
    - `title` - _String_: The displayed title of the post, consider this as `H1`
    - `author` - _String_: The name of the author to be displayed.
    - `date` - _Date (ISO 8601)_: Allows display of date as well as enabling
      sorting on the timeline, set to the same as your filename date but with
      hyphens (e.g. `2022-10-31`).
    - `category` - _String (multiline)_: Enables filtering by category, this should be based on the
      subject of the post e.g. `release`, `dev log`, `announcement`. This is a
      multiline field if you want to set more than one category.
    - `tag` - _String (multiline)_: Enables filtering by tags, this should be based on the content of
      the post and areas it touches on e.g. `website`, `editor`, `config`.
    - `sticky` - _Bool_: Enables "pinning" on the
    - `star` - _Bool_: Enables use of the `star` category for any important articles
      we want to remain visible.
    - `article` - _Bool_: You probably won't want to use this but setting this to `false`
      will exclude this page from appearing. This is set on the "example" blog
      post intentionally.
- An excerpt can be added to the post by creating an html comment `<!-- more -->`.
  Anything above the comment will be treated as the excerpt and anything underneath
  will be the content of the post.
  - We are looking at implementing an auto excerpt feature but this doesn't seem
    to be working on the theme at the moment, this file will be updated if and
    when it is available.
- The rest of the post is just standard Markdown - we are currently only
  supporting the standard features as per the [MDEnhance](https://vuepress-theme-hope.github.io/v2/md-enhance/config.html#vueplayground)
  plugin but if we need more features such as GFM then please discuss and we can
  look at adding it to the website.
- Images are supported with the standard image syntax (`![myImage](./assets/myImage.png)`)
  and should be located in the `blog/assets` directory. You may also use standard
  html `<img>` tags, particularly if you wish to control the displayed size of the
  image.
- Create a PR to the repo and make it obvious it is a blog post, by including [BLOG] in the title of your PR. Please don't
  submit it alongside any website changes.

See [example post](./docs/blog/20221112-Daeraxa-ExamplePost.md) with everything
above.

### Testing locally

See [building](../#building-the-website)

### Website "Blog" page(s)

The website itself has a number of features which the aforementioned frontmatter
fields can influence.

There is a "selector" at the top of the site which currently reads `All`, `Star`,
`Slides`, `Encrypted`. The only ones we use are the first two and currently the
theme doesn't support configuration of this. If necessary we may be able to hide
it with CSS.  
Any article with `Star` set to `true` will be shown in the `star` category.

On the right bar are 4 counters/links and filters for `Articles`, `Category`, `Tag`
and `Timeline`.  
`Category` and `Tag` are used to filter articles depending on the categories
submitted in the respective frontmatter fields.
The `Timeline` allows views of blog posts over time according to the dates set
in the `date` frontmatter field.

### Questions? Suggestions

Just ask in Discord or GH Discussions and ping the `@documentation` team.

This is very much barebones default config so please let us know if you have
any suggestions as to how we can improve it.
