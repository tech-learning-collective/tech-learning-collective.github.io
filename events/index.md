---
title: Events
id: events
columns: 1
---

In addition to our intensive [courses]({% link courses/index.html %}), we also host satellite events such as workshops, skillshares, and demonstrations in collaboration with hackerspaces and other venues across New York City. Our satellite workshops are a low-commitment way to get a feel for our more intensive courses as well as meet some of our teaching team. Workshops are priced similarly to their course subject.

# Upcoming events

[<img alt="" src="{% link static/images/icon.calendar.svg %}" class="calendar icon" /> Subscribe to our calendar.]({{ "/events/all.ics" | absolute_url | replace: "https:", "webcal:" | replace: "http:", "webcal:" }} "Subscribe to our calendar.")
([<img alt="" src="{% link static/images/icon.download.svg %}" class="download icon" />]({{ "/events/all.ics" | absolute_url }}))

{% if site.events %}
{% assign events = site.events | where_exp: "event", "event.endDate > site.time" | sort: "startDate" %}
<ol class="h-events">
{% for event in events %}
    <li>
        {% include h-event.html event=event excerpt=true %}
    </li>
{% endfor %}
</ol><!-- .h-events -->

# Recent events

{% assign events = site.events | where_exp: "event", "event.endDate < site.time" | sort: "startDate" %}
{% comment %}
<!--
    When Jekyll can paginate collections natively, this can be updated.
    For now, we slice to the most recent 30 events so that this page
    does not grow too much. It means we can't publish archive listing
    pages in paginated form, but the permalinks will always be online.
-->
{% endcomment %}
{% assign events = events | slice: 0, 30 %}
<ol class="h-events">
{% for event in events reversed %}
    <li>
        {% include h-event.html event=event excerpt=true %}
    </li>
{% endfor %}
</ol><!-- .h-events -->
{% else %}
<p>No events&mdash;yet. :)</p>
{% endif %}
