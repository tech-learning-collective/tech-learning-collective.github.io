---
title: Events Calendar
columns: 1
include_styles:
    - href: https://cdn.jsdelivr.net/npm/@fullcalendar/core@4.4.0/main.min.css
      integrity: sha384-UYbBlSMkHrbuUVqSs26Rm1UEii5VOTR80mD2wjrJaIedgHgS5LWDt9d7rcbqEDxR
      crossorigin: anonymous
    - href: https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@4.4.0/main.min.css
      integrity: sha384-3/CmTldIZRXuPMPFO0YHhiLwdsqbsB8YEG+psHdxNbnNBTrci0MOdt/hbPRVmtS8
      crossorigin: anonymous
    - href: https://cdn.jsdelivr.net/npm/@fullcalendar/list@4.4.0/main.min.css
      integrity: sha384-I6BmgTJPPB58p0uMGaoLY/wFTFFlO4VSmjQYBfNzCzejCImTYNj/yXYmKBeUjtHH
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

<script
    src="https://cdn.jsdelivr.net/npm/@fullcalendar/core@4.4.0/main.min.js"
    integrity="sha384-jpR7BEBpiXHNqgvVP4S6rYPyDDoXkQ/HV90LJxREmLjbKEeB1bk/Dp6trW1Vs4Wz"
    crossorigin="anonymous"
></script>
<script
    src="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@4.4.0/main.min.js"
    integrity="sha384-gVrKlneckelHlVlsbbAfWsL4XRoXrlSFV9S86+z5DOAQiN1rg82ITBYnDqiZdA/R"
    crossorigin="anonymous"
></script>
<script
    src="https://cdn.jsdelivr.net/npm/@fullcalendar/list@4.4.0/main.min.js"
    integrity="sha384-Dk41zoqiS9HymTYb4xGf+9Q0fEzBobDFElPvaRIs/1YKe5MFsHgC/RMgppllS+tG"
    crossorigin="anonymous"
></script>
<script src="{% link static/js/fullcalendar-init.js %}"></script>
