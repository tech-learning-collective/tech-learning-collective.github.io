---
title: Tech Education Events Calendars
columns: 1
---

This page lists *unaffiliated* groups that we are aware of along with information about their next event. If you run a technology education group and would like to be considered for inclusion on this page, [send us a note]({% link contact/index.md %}) and tell us about yourselves!

For information about {{ site.title }}&rsquo;s own upcoming free, by-donation, and low-cost technology education events, please see the [Tech Learning Collective Events calendar]({% link events/index.md %}).

<ul id="other-groups" style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 2em;">
{% for g in site.calendars %}
{% assign ical_url = g.icalendar_url %}
{% assign has_events = 0 %}
    <li style="list-style-type: none; text-align: left;">
        <a href="{{ g.url }}">
            <h3 id="{{ g.title | slugify }}">{{ g.title }}</h3>
            {% if g.image %}<img src="{{ g.image }}" style="max-width: 100%" loading="lazy" />{% endif %}
        </a>
        <p style="text-align: left;">
            Next event:
            {% capture out %}
            {% ical url: ical_url only_future: true limit: 1 %}
            <a href="{{ event.url }}">{{ event.summary  }}</a>
            <br />
            When:
            {{ event.dtstart | date: site.date_format }}
            at
            {{ event.dtstart | date: site.time_format }} ({{ event.dtstart | date: "%z" }})
            {% assign has_events = has_events | plus: 1 %}
            {% endical %}
            {% endcapture %}
            {% if 1 == has_events %}{{ out }}{% else %}None published.{% endif %}
        </p>
    </li>
{% endfor %}
</ul>
