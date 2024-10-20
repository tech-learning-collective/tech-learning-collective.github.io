---
title: Workshops
columns: 1
---

In addition to our intensive [courses]({% link courses/index.md %}) and public [events]({% link events/calendar/index.md %}), Tech Learning Collective instructors are also available to host presentations, lectures, and workshops on at least {{ site.workshops.size }} different subjects, listed below. These are derived from portions of our longer course intensives and are typically one to two hours long. Each workshop can be run individually, or as part of a series along with the other workshops in [its collection](#browse-workshop-collections).

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor for your venue&rsquo;s next event. View a workshop&rsquo;s detail page for information about the next scheduled run of that workshop.

### Stand-alone workshops

Stand-alone workshop ticket prices can range from a $25 suggested donation to a $45 general admissions ticket. Tech Learning Collective [negotiates sales splits and booking fees]({% link pricing/index.md %}#booking-fees) with the booking venue on a per-event basis. We can process sales online and provide your organization with a door list and sales report at no extra charge, or we can integrate with your existing sales process.

<div class="workshop-list" markdown="1">
{% assign workshops = site.workshops %}
{% for workshop in workshops %}{% if empty == workshop.categories %}
* [![Poster for {{ workshop.title }}]({{ workshop.image | default: site.logo | relative_url }}){:loading="lazy"} {{ workshop.title }}]({{ workshop.url }})
{% endif %}
{% endfor %}
</div>

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor for your venue&rsquo;s next event.

{% assign categories = "" | split: "" %}
{% for workshop in site.workshops %}
    {% assign categories = categories | concat: workshop.categories | uniq %}
{% endfor %}
{% if empty != categories %}
### Browse workshop collections

{% for c in categories %}
* [{{ c }}](#{{ c | slugify | append: "-collection" }} "View workshops in &ldquo;{{ c }}&rdquo; collection.")
{% endfor %}

{% for category in categories %}
#### {{ category }} collection

<div class="workshop-list workshop-collection" markdown="1">
{% assign workshops = site.workshops | where: "categories", category | sort: "order" %}
{% for workshop in workshops %}
* [![Poster for {{ workshop.title }}]({{ workshop.image | default: site.logo |  relative_url }}) {{ workshop.title }}]({{ workshop.url }})
{% endfor %}
</div>
{% endfor %}
{% endif %}
