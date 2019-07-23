---
title: Workshops
columns: 1
---

In addition to our intensive [courses]({% link courses/index.html %}) and public [events]({% link events/index.md %}), Tech Learning Collective instructors are also available to host one-off workshops on specific subjects. These workshops are derived from portions of our longer course intensives, and are similar to but do not cover the entirety of the associated subject matter. Each workshop is typically one- to two-hours long and can be run either as demonstrations (in lecture format) or as practice labs (in workshop format).

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor at your next event.

<div id="workshop-list" markdown="1">
{% for workshop in site.workshops %}
* [![Poster for {{ workshop.title }}]({{ workshop.image | default: "icon.chip.blue.png" | prepend: "static/images/" | relative_url }}) {{ workshop.title }}]({{ workshop.url }})
{% endfor %}
</div>
