---
title: Events
id: events
columns: 1
---

In addition to our intensive [courses]({% link courses/index.html %}), we also host satellite events such as [workshops]({% link workshops/index.md %}), skillshares, and demonstrations in collaboration with community centers, hackerspaces and hacklabs, and other venues across New York City. Our satellite workshops are a low-commitment way to get a feel for our more intensive courses as well as meet some of our teaching team.

# Upcoming events

[![Calendar]({% link static/images/icon.calendar.svg %}){:.download.icon} Subscribe to our calendar.]({{ "/events/all.ics" | absolute_url | replace: "https:", "webcal:" | replace: "http:", "webcal:" }} "Subscribe to our calendar.")
[![Download]({% link static/images/icon.download.svg %}){:.download.icon}]({% link events/all.ics %} "Export events as iCalendar file.")
[![Subscribe to Atom feed of events.]({% link static/images/icon.rss-feed.orange.svg %}){:style="width: 1em; box-shadow: none;"}]({% link feed/events.xml %} "Subscribe to Atom feed of events.")

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
