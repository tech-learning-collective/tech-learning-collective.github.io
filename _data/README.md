# The `_data` folder

This folder contains [Jekyll data files](https://jekyllrb.com/docs/datafiles/), which are used for controlling certain contents in your website. This includes files for ordering the navigation menus, and images in the gallery. It contains a number of different types of files (see [§ Files in this folder](#files-in-this-folder)) including both published artifacts and work-in-progress.

1. [Files in this folder](#files-in-this-folder)
1. [Events](#events)
1. [Gallery](#gallery)
1. [Navigation menus](#navigation-menus)

## Files in this folder

* `README.md` - This help file. :)
* [`contact.yml`](#contact-info) - Contact information to publish on various pages.
* [`gallery.yml`](#gallery) - Description of which images to display on your site's gallery, and in what order.
* [`nav_menus.yml`](#navigation-menus) - Description of which pages to link to from the navigation menus.

## Contact info

It's easy to update the contact information published on your site when it changes. To do so, edit the appropriate values in the `contact.yml` file.

## Gallery

Your site includes a customizable gallery. To add an image to your site's gallery, first upload the image to [your site's `static/images` folder](../static/images/). Once uploaded, it can be referenced from [the `gallery.yml` data file](gallery.yml) (in this folder). By editing the `gallery.yml` file, you can control which uploaded images are included in your website's gallery, write captions for the images, make the images into clickable links, and more.

The `gallery.yml` file is written in a structured format called [YAML](https://en.wikipedia.org/wiki/YAML). When you edit YAML files, be careful to maintain the structure of the file (i.e., match the indentation and punctuation style as in the rest of the file).

Your gallery images are represented as a single YAML list. Each item in the list (a dash on its own line) represents an image in the gallery. Each image in the gallery has, at a minimum, an `image` field, whose value should be the name of an image file in [your site's `static/images` folder](../static/images/). You may also specify the following optional fields for each image:

* `alt` - Brief textual description of the image, usually no more than a sentence or two. For example, `Sunset on a sand beach over calm waters.` This text is usually not displayed visually but provides a [gracefully degrading fallback](https://en.wikipedia.org/wiki/Fault_tolerance) in case of a network error, as well as [important accessibility benefits](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Accessibility/Alternative_text_for_images) for browsers with visual impairments, including humans as well as bots.
* `caption` - A caption for the image. This accompanies the image as visually rendered text somewhere near the image itself. HTML is allowed in this field.
* `link` - A Web address (URL) to use as the destination of the link this image will become. Omit this field if you do not want the image to be a link.
* `link_title` - The `title` attribute text of the image's link. This text is usually displayed as a tooltip when a visitor hovers their mouse cursor over the image. This field is ignored unless `link` is also set.
* `featured` - Whether or not the image should be included on the home page's horizontal image slider. The only valid value is `true`; omit this field if you do not want to include the image on the front page.

## Navigation menus

[The `nav_menus.yml` data file](nav_menus.yml) defines the name, order, and contents of your site's navigation menus. Each menu has a name, such as `main` or `sidebar`. Each menu is a list of links that may also be an image. At a minimum, each menu item must include a `url` and a `text` field.

Optionally, menu items may also include the following fields:

* `title_text` - The `title` attribute's text for the link.
* `image` - The name of an image file in [your site's `static/images` folder](../static/images/). Omit this field to create a textual navigation menu item.
