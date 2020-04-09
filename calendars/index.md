---
title: Tech Education Events Calendars
columns: 1
include_styles:
    - https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css
    - https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css
---

This page lists *unaffiliated* groups that we are aware of along with information about their next event. If you run a technology education group and would like to be considered for inclusion on this page, [send us a note]({% link contact/index.md %}) and tell us about yourselves!

For information about {{ site.title }}&rsquo;s own upcoming free, by-donation, and low-cost technology education events, please see the [Tech Learning Collective Events calendar]({% link events/index.md %}).

{% comment %}
This table is a DataTables table; its class names are defined by that
library and should not be changed (too much).
{% endcomment %}
<table id="other-groups" class="datatables display responsive nowrap">
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Next Event</th>
            <th>Next Event Title</th>
            <th>Country</th>
            <th>State/Province</th>
            <th>City/Locality</th>
        </tr>
    </thead>
    <tbody>
        {% for g in site.calendars %}
        {% assign ical_url = g.icalendar_url %}
        {% assign has_events = 0 %}

        {% capture next_event_title %}
        {% ical url: ical_url only_future: true limit: 1 %}
        <a href="{{ event.url }}">
            {{ event.summary }}
        </a>
        {% assign has_events = has_events | plus: 1 %}
        {% endical %}
        {% endcapture %}

        {% capture next_event_date -%}
        {%- ical url: ical_url only_future: true limit: 1 -%}
        {{- event.dtstart -}}
        {%- endical -%}
        {%- endcapture %}

        {% capture next_event_date_display %}
        {% ical url: ical_url only_future: true limit: 1 %}
        {{ event.dtstart | date: site.date_format }}
        at
        {{ event.dtstart | date: site.time_format }} ({{ event.dtstart | date: "%z" }})
        {% endical %}
        {% endcapture %}

        <tr>
            <td>
                {% if g.image %}
                <img src="{{ g.image }}" loading="lazy" />
                {% endif %}
            </td>
            <td>
                <a href="{{ g.url }}">{{ g.title }}</a>
            </td>
            <td data-order="{% if 1 == has_events -%}
                {{- next_event_date | date: "%Y-%m-%d %H:%M" -}}
                {%- else -%}
                {%- comment -%}
                Set ordering way in the future so it shows up last.
                {%- endcomment -%}
                {{- site.time | date: "%s" | plus: 9999999999 | date: "%Y-%m-%d %H:%M" -}}
                {%- endif -%}
                ">
                {{ next_event_date_display }}
            </td>
            <td>
                {% if 1 == has_events %}
                {{ next_event_title }}
                {% else %}
                None published.
                {% endif %}
            </td>
            <td>
                {{ g.adr.country }}
            </td>
            <td>
                {{ g.adr.region }}
            </td>
            <td>
                {{ g.adr.locality }}
            </td>
        </tr>
        {% endfor %}
    </tbody>
</table>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
<script src="{% link static/js/datatables-init.js %}"></script>
