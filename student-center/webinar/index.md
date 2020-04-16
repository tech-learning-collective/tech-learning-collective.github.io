---
title: Webinar
columns: 1
---

<div id="tlc-webinar-container"></div>

<noscript markdown="1">
{{ site.title }} webinar events [require JavaScript to be enabled in your browser](https://enable-javascript.com/). Please disable any Web browser add-ons that are blocking JavaScript from running, then reload this page to try again.
</noscript>

<script src="https://meet.jit.si/external_api.js"
    {% comment %} The server does not support CORS, so we cannot use
                  Subresource Integrity (SRI) attributes, yet. :(
    integrity="sha384-OLBgp1GsljhM2TJ+sbHjaiH9txEUvgdDTAzHv2P24donTt6/529l+9Ua0vFImLlb"
    crossorigin="anonymous"
    {% endcomment %}
></script>
<script src="{% link static/js/jitsi-meet.js %}"></script>
