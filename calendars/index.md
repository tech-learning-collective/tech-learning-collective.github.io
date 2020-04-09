---
title: Tech Education Events Calendars
columns: 1
---

{% for g in site.calendars %}{% assign ical_url = g.icalendar_url %}{% assign has_events = 0 %}
* [{{ g.title }}]({{ g.url }}) - Next event: {% capture out %}{% ical url: ical_url only_future: true limit: 1 %}[{{ event.summary  }}]({{ event.url }}){% assign has_events = has_events | plus: 1 %}{% endical %}{% endcapture %}{% if 1 == has_events %}{{ out }}{% else %}None published.{% endif %}
{% endfor %}
