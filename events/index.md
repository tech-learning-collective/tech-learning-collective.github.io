---
title: Events
id: events
columns: 1
---

In addition to our intensive [courses]({% link courses/index.md %}), we also host satellite events such as [workshops]({% link workshops/index.md %}), skillshares, and demonstrations in collaboration with community centers, hackerspaces and hacklabs, and [other groups]({% link calendars/index.md %}) across New York City, and elsewhere via Internet video conference. Our satellite workshops are a low-commitment way to get a feel for our more intensive courses as well as meet some of our teaching team. Existing Tech Learning Collective students studying cybersecurity may also want to participate in one or more [upcoming CTFs]({% link events/ctfs.md %}).

# [Upcoming events]({% link events/upcoming/index.md %})

{% include call-to-action-subscribe-to-calendar.html %}

([Learn more about calendar subscriptions]({% link events/upcoming/index.md %}#export-event-calendar).)

([View events as calendar grid]({% link events/calendar/index.md %}?fullcalendar-view=dayGridMonth).)

{% include events-upcoming.html %}

{% ical url: https://www.google.com/calendar/ical/ctftime%40gmail.com/public/basic.ics only_future: true limit: 2 %}
{%- capture desc -%}{% include boilerplate-partner-ctf-event.md join_url="https://gitter.im/AnarchoTechNYC/Lobby" event=event %}{% endcapture %}
{%- capture desc -%}{{ desc | markdownify }}{% endcapture %}
{%- capture img -%}{{ "static/images/capture-the-flag.gif" | absolute_url }}{%- endcapture -%}
{% include h-event.html event=event description=desc url="https://github.com/AnarchoTechNYC/meta/wiki/CTF-team" image=img %}
{% endical %}

# Recent events

{% if site.events %}
{% assign events = site.events | where_exp: "event", "event.endDate < site.time" | sort: "startDate" | reverse %}
{% comment %}
<!--
    When Jekyll can paginate collections natively, this can be updated.
    For now, we slice to the most recent 10 events so that this page
    does not grow too much. It means we can't publish archive listing
    pages in paginated form, but the permalinks will always be online.
-->
{% endcomment %}
{% assign events = events | slice: 0, 10 %}
<ol class="h-events">
{% for event in events %}
    <li>
        {% include h-event.html event=event excerpt=true %}
    </li>
{% endfor %}
</ol><!-- .h-events -->
{% else %}
<p>No events&mdash;yet. :)</p>
{% endif %}
