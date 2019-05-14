---
title: Workshops
---

In addition to our intensive [courses]({% link courses/index.html %}) and public [events]({% link events/index.md %}), Tech Learning Collective instructors are also available to host one-off workshops on specific subjects. These workshops are derived from portions of our longer course intensives, and are similar to but do not cover the entirety of the associated subject matter. Each workshop is typically one- to two-hours long and can be run either as demonstrations (in lecture format) or as practice labs (in workshop format).

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor at your next event.

{% for workshop in site.workshops %}
* [{{ workshop.title }}]({{ workshop.url }})
{% endfor %}
