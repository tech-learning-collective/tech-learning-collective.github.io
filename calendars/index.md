---
title: Tech Education Events Calendars
columns: 1
---

{% for g in site.calendars %}{% assign ical_url = g.icalendar_url %}
* [{{ g.title }}]({{ g.url }}) - Next event: {% ical url: ical_url only_future: true limit: 1 %}[{{ event.summary }}]({{ event.url }}){% endical %}
{% endfor %}
