---
title: Tech Education Events Calendars
columns: 1
include_styles:
    - https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css
    - https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css
---

This page lists groups that we are aware of along with information about their next published event. Use the search field to filter groups based on their name, location, and other details. Groups other than {{ site.title }} are *not affiliated with us in any way*. This resource is provided for informational purposes only.

For more information about {{ site.title }}&rsquo;s own upcoming free, by-donation, and low-cost events, refer to the [official Tech Learning Collective Events calendar]({% link events/index.md %}). If you run a technology education group and would like to be considered for inclusion on this page, [send us a note]({% link contact/index.md %}) and tell us about yourselves! Be certain to read through the [inclusion requirements](#inclusion-requirements) before you write us.

{% include enable-javascript.html message="to search, sort, and paginate this table" %}

{% comment %}
This table is a DataTables table; its class names are defined by that
library and should not be changed (too much).
{% endcomment %}
<table id="other-groups" class="display compact responsive" data-page-length="25">
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

## Inclusion requirements

To be included on this listing, a group must meet *all* of the following requirements:

* **Be relevant.** We only list groups whose primary purpose or motivation is related in some clear way to our own. We are the final arbiters of what we consider relevant.
* **Be automatable.** We only include groups that provide a machine-readable data source for their event information in [iCalendar](https://icalendar.org/) (RFC 5545) format. Popular services that provide such a feed are [Google Calendar](https://calendar.google.com/), [Meetup.com](https://meetup.com/), and many WordPress event calendaring plugins. If you only publish `ics` files for individual events (such as Squarespace does), you must find an alternative way to produce an iCalendar feed before we will list your events.
* **Be accurate.** Your published calendaring information must be as accurate as reasonably possible. If we learn that your feed provides inaccurate information, such as not updating or removing event information from your calendar when an event is canceled, we will remove your listing.
* **Be available.** Your data feed must be reliably accessible to us. Our automated build systems notify us if your data feed goes offline. Above a certain threshold of failed attempts to access your event information, we may contact you to request you investigate, or we may simply remove your listing.

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>
<script src="{% link static/js/datatables-init.js %}"></script>
