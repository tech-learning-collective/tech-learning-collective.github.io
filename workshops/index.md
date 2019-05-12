---
title: Workshops
---

In addition to our intensive [courses]({% link courses/index.html %}), we are also available to teach one-off workshops on specific subjects. These workshops are derived from portions of our longer course intensives, and do not cover the entirety of their subject matter. They are typically one- to two-hour presentations that can be run either as demonstrations (lecture format) or as practice labs (workshop format).

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor at your next event.

{% for workshop in site.workshops %}
* [{{ workshop.title }}]({{ workshop.url }})
{% endfor %}
