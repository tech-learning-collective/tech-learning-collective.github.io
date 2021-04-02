---
title: Workshop Catalogue
layout: default
---

<div id="workshop-catalogue">
<section markdown="1">

## About TLC Workshops

In addition to our intensive [courses]({% link courses/index.md %}) and public [events]({% link events/calendar/index.md %}), Tech Learning Collective instructors are also available to host presentations, lectures, and workshops on at least {{ site.workshops.size }} different subjects, listed below. These are derived from portions of our longer course intensives and are typically one to two hours long. Each workshop can be run individually, or as part of a series along with other related workshops.

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor for your venue&rsquo;s next event. View a workshop&rsquo;s detail page for information about the next scheduled run of that workshop.

### Stand-alone workshops

Stand-alone workshop ticket prices can range from a $25 suggested donation to a $45 general admissions ticket. Tech Learning Collective [negotiates sales splits and booking fees]({% link pricing/index.md %}#booking-fees) with the booking venue on a per-event basis. We can process sales online and provide your organization with a door list and sales report at no extra charge, or we can integrate with your existing sales process.

### Private bookings

Please [contact us]({% link contact/index.md %}) to book a Tech Learning Collective instructor for your venue&rsquo;s next event.

</section>

{% if empty != categories %}
<section id="workshops">

{% assign categories = "" | split: "" %}
{% for workshop in site.workshops %}
    {% assign categories = categories | concat: workshop.categories | uniq %}
{% endfor %}

{% for category in categories %}
<div class="workshop-category" markdown="1">

{% assign workshop_category = site.workshop_categories | where: "title", category | first %}

## [{{ category }}]({{ workshop_category.url }})

{% assign workshops = site.workshops | where: "categories", category %}
<ul>
    {% for workshop in workshops %}
    <li>
        <a href="{{ workshop.url }}">
            <img alt="Poster for {{ workshop.title }}" src="{{ workshop.image | default: site.logo |  relative_url }}" />
            <span>{{ workshop.title }}</span>
        </a>
    </li>
    {% endfor %}
</ul>

</div><!-- .workshop-category -->
{% endfor %}

</section>
{% endif %}
</div><!-- #workshop-catalogue -->
