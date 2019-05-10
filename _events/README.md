# The `_events` folder

This folder contains individual event information that is ultimately published to your website's calendar feeds and event pages. Whenever you save a new file into this folder, Jekyll checks to see if it "looks like" a calendar event. If it does, Jekyll creates a new page on your website for the event, and automatically adds the event to the many calendar-aware listing pages.

For Jekyll to recognize a file in this folder as an event, each file must meet the following critera:

* Its file name must end in either `.md` (for Markdown-formatted events) or `.html` (for HTML-formatted events).
* The file must begin with [Jekyll Front Matter](https://jekyllrb.com/docs/frontmatter/). Specifically, it must start with three dashes, then a newline, then another three dashes, like this:
  ```
  ---
  ---

  Your event description here.
  ```
  In between the lines with three dashes on them, you can add any number of [custom fields](#custom-fields) (metadata) to the calendar event. In order to show up as a calendar event, you must include certain metadata fields, such as the `startDate`, and `endDate` fields. Other metadata is optional and simply enriches the post with information that makes it easier for search engines to find and understand your events (among providing other benefits).

## Custom fields

Your event posts can have custom metadata attached to them. This lets you do things like add a featured image to represent the event visually, set a different title than the one in the file name, change the publication date, and much more.

Custom fields must be written inside the Jekyll Front Matter block (the lines with only three dashes on them) at the very start of the file. To add a custom field, you write its name, followed by a colon (`:`), followed by a single space, followed by the value you want. If the value you want includes a colon (`:`), you must enclose the value in double quotes unless the value is a date or time. For example, to set a custom metadata field called `my_custom_metadata` with a value of `Awesome event!`, you would add a line like this within the Front Matter portion of your blog post:

```yaml
my_custom_metadata: "Awesome event!"
```

In order to show up as a calendar event, each event file needs certain metadata fields to describe the event itself, such as when the event starts, when it ends, and where it is happening. These fields are required and are marked as such in their descriptions, below. The rest of this section describes the most important custom fields that come built-in with your website's template.

For complete documentation, refer to the [Schema.org documentation for `Event`s](https://schema.org/Event).

### `title`

The title or name of the event. If omitted, this is taken from the event file's filename.

### `type`

The kind of event. Valid values are [Schema.org's `Event` subtypes](https://schema.org/Event#subtypes). For example, a dance party is best described as a `DanceEvent`, like so:

```yaml
type: DanceEvent
```

### `startDate`

**This field is required.**

The exact time at which the event starts. As a date and time, the value of this field must be described in [Ruby's `Time.parse` format](https://ruby-doc.org/stdlib-2.6.3/libdoc/time/rdoc/Time.html#method-c-parse), which is like `YYYY-MM-DD HH:mm:ss -ZZZZ`. For example, to describe an event that begins on April 30th, 2019 at 7:30 sharp in the evening, in New York City

```yaml
startDate: 2019-04-30 19:49:32 -0400
```

### `endDate`

**This field is required.**

The exact time at which the event ends. As a date and time, the value of this field must be described in [Ruby's `Time.parse` format](https://ruby-doc.org/stdlib-2.6.3/libdoc/time/rdoc/Time.html#method-c-parse), which is like `YYYY-MM-DD HH:mm:ss -ZZZZ`. For example, to describe an event that ends on May 1st, 2019 at 2 AM, in New York City:

```yaml
endDate: 2019-05-01 02:00:00 -0400
```

### `doorTime`

The exact time at which doors open for this event. The format is the same as for the [`startDate`](#startdate) or [`endDate`](#enddate) metadata fields.

### `location`

The name of a [place](../_places/README.md#the-_places-folder), or a place's address, at which the event occurs. If the value of this field does not exactly match the `name` of a place your website already knows about, it will be treated like the text of an address. For example, the following are all valid values:

```yaml
# A simple textual address.
location: 123 Main Street, Anytown, USA
```

```yaml
# The name of a matching place in the `_places` folder.
location: Awesome Venue
```

See the [`places`](../_places/README.md) folder for details about places.

### `image`

The fully-qualified URL of an image on the Internet, or the filename of an image to feature for the event. For the latter to be useful, a file with a matching filename must be uploaded to the `[static/images](../static/images/README.md#the-images-folder)` folder. For example, assuming the following URLs work, these are all valid examples:

```yaml
# An image uploaded to your site's `static/images` folder.
image: best-event-ever.jpg
```

```yaml
# An image hosted on another Web site.
image: https://example.com/remote-image.jpg
```

### `isAccessibleForFree`

A boolean indicating whether or not this event is open to participants without a fee. This is identical to [the Schema.org property of the same name](https://schema.org/isAccessibleForFree). The only valid values are `true` or `false`.

### `sameAs`

A list of other places on the Internet where this event is also listed. For example, if you also publish a Facebook event for this event and want to link the two, you can enter that here. This is identical to [the Schema.org property of the same name](https://schema.org/sameAs). As a list, you can enter as many URLs as you like:

```yaml
sameAs:
    - https://www.facebook.com/events/123456789/
    - https://my-awesome-event.eventbrite.com/
```

### `audiences`

A list describing the intended audience for the event. For example, this can useful to denote age restrictions for events that are held in establishments that serve alcohol. For example, to denote an event for people ages 21 to 35:

```yaml
audiences:
    - type: People
      requiredMinAge: 21
    - type: People
      requiredMaxAge: 35
```

Each list item is identical to [the Schema.org `Audience` object](https://schema.org/Audience).

### `performers`

A list describing the [people](../_data/people/README.md#the-_data-people-folder) or [organizations](../_data/organizations/README.md#the-_data-organizations-folder) who will be performing at the event. Similar to the [`location`](#location) field, if the value of this field does not exactly match the `name` of a person or organization your website already knows about, it will be treated like plain text. Otherwise, it will inherit the metadata associated with that person or organization. For example:

```yaml
performers:
    - DJ Awesome
    - Tiny Dancer
```

This maps to the [Schema.org `performer` property](https://schema.org/performer).

### `organizers`

A list describing the [people](../_data/people/README.md#the-_data-people-folder) or [organizations](../_data/organizations/README.md#the-_data-organizations-folder) who have organized or are responsible for presenting the event. This is the same as the [`performers`](#performers) field, but with a different meaning.

This maps to the [Schema.org `organizer` property](https://schema.org/organizer).
