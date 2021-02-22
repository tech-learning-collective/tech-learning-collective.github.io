---
title: Events Calendar
include_styles:
    - href: https://cdn.jsdelivr.net/npm/fullcalendar@5.5.1/main.min.css
      integrity: sha256-uq9PNlMzB+1h01Ij9cx7zeE2OR2pLAfRw3uUUOOPKdA=
      crossorigin: anonymous
---

In addition to our intensive [courses]({% link courses/index.md %}), we also host satellite events such as [workshops]({% link workshops/index.md %}), skillshares, and demonstrations in collaboration with community centers, hackerspaces and hacklabs, and [other groups]({% link calendars/index.md %}) across New York City, and elsewhere via Internet video conference. Our satellite workshops are a low-commitment way to get a feel for our more intensive courses as well as meet some of our teaching team. Existing Tech Learning Collective students studying cybersecurity may also want to participate in one or more [upcoming CTFs]({% link events/ctfs.md %}).

{% include call-to-action-subscribe-to-calendar.html %}

([Learn more about calendar subscriptions]({% link events/upcoming/index.md %}#export-event-calendar).)

<div id="fullcalendar">
    <script>
    var fullcalendar_events = {%- include fullcalendar-io-events.json -%};
    </script>
    <noscript>
    {% include events-upcoming.html %}
    </noscript>
</div>

{% include call-to-action-subscribe-to-calendar.html %}

([Learn more about calendar subscriptions]({% link events/upcoming/index.md %}#export-event-calendar).)

<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.5.1/main.min.js" integrity="sha256-rPPF6R+AH/Gilj2aC00ZAuB2EKmnEjXlEWx5MkAp7bw=" crossorigin="anonymous"></script>
<script src="{% link static/js/fullcalendar-init.js %}"></script>
