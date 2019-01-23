# The `_includes` folder

This folder contains snippets of Jekyll templates. These "includes" can be reused any number of times across your other Website templates, making them useful for ensuring that you publish your content in a consistent, reliable way. Some snippets are simply blocks of HTML that are repeated, while others are parameterized and do different things depending on how you include them in other pages.

To include a snippet from this folder into some other part of your Jekyll website, use Jekyll's `include` processor directive, like this:

```
{% include example-snippet.html %}
```

The above instruction would replace the instruction itself with the contents of the file named `example-snippet.html` from this folder, effectively inserting the contents of the snippet in the other template. Moreover, you can include snippets within other snippets. This nesting allows you to chunk your template(s) into logical pieces that can be matched with one another like a set of building blocks.

The following list briefly describes a few important snippets and their purpose:

* `foot.html` - Footer of your website, repeated at the bottom of each page.
* `h-entry.html` - Individual blog post template.
* `head.html` - Metadata for each page on your website, such as the page's title, whether or not it is part of a paginated series, and so on.
* `masthead.html` - Masthead of your website, repeated near the top of each page, and includes your banner.
* `site-navigation.html` - Main navigation menu, included in the `masthead.html` and `foot.html` snippets.

See also [Jekyll's documentation about its "includes" feature](https://jekyllrb.com/docs/includes/).
