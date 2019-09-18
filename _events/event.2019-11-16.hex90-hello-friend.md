---
title: "Hex90: Hello, friend."
startDate: &startDate 2019-11-16 21:00:00 -0400
endDate: 2019-11-17 02:00:00 -0400
date: *startDate
location: Wonderville
image: static/images/event.2019-11-16.hex90-hello-friend.jpg
offers:
    - name: General Admission
      price: 15
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19000
    - name: Queers and Femmes
      price: 10
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19000
sameAs:
    - https://www.artful.ly/store/events/19000
organizers:
    - Wonderville
    - Hex90
performers:
    - Shift-CTRL Space
    - Tech Learning Collective
    - XOXA
    - Death By Audio Arcade
    - Half Lucid Jewelry
---

Queer hackers of the world, unite! The Tech Learning Collective is excited to invite you to [Hex90&rsquo;s latest queer hacker salon, &ldquo;Hello, friend,&rdquo;](https://hexninety.github.io/) hosted at [Wonderville](https://wonderville.nyc/), where some of our teaching staff will be on-hand to assist players as they navigate [the party's "cybersecurity alternate reality experience" game](https://hexninety.github.io/) produced in partnership with the semi-elusive NYC-based hacklab, [Shift-CTRL Space](https://shiftctrl.space/).

Meet other queerdos and 1337 femmes revolutionizing New York City's burgeoning cyber underground. Then team up to frag fascists on the DreamBoxXx, navigate Particle Mace's deadly asteroid fields, or survive the single-pixel gauntlet of Line Wobbler.

Connect with your laptop or smartphone to plug into the [party's exclusive alternate reality cybersecurity experience](https://hexninety.github.io/) where you'll help save the world from evil corporations and top-secret government cover ups.

{:style="white-space: pre-wrap;"}
```txt
R  2019-09-16
FM HEX90
TO QUEER HACKERS OF THE WORLD

HELLO, FRIEND (SECRET//NOFORN)

HEX90
a queer hacker salon in nyc

features_

~ visuals & livecoding by LiveCode.NYC
~ indie arcade cabinets by Death By Audio
~ music performances by XOXA
~ glowing crystal crowns and accessories by Half Lucid Jewelry
~ hacking demos by Tech Learning Collective
~ cybersecurity alternate reality experience by Shift-CTRL Space

featured artists_

~ TO BE ANNOUNCED

info_

November 16, 2019 @ Wonderville
1186 Broadway, Brooklyn, NY 11221
9pm - 2am

~ this venue is accessible
~ this venue has gender-neutral restrooms

*dressing up is encouraged but not required*

Cover:
$15.00 - str8 cismen
$10.00 - queers and femmes

NOTICE:
This space is not exclusionary, but it is an intentionally queer space. Consent and respect are not optional! Anyone being disrespectful will be removed immediately without a refund. We are against technocapitalist motives. We are a space for queer hackers, not for Silicon Valley fans. Don't piss off the hackers. ;)

Hex90

watch the video:
https://hexninety.github.io/video.mp4
```

[Start playing immediately at the invitation site](https://hexninety.github.io/), or buy your ticket now:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }})
{% endfor %}

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, “brogrammer,” “manarchist,” or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

## About [Shift-CTRL Space](https://shiftctrl.space/)

We are anti-(techno)capitalists, solarpunks, and radical technologists. Our ethics place us against &ldquo;Adtech,&rdquo; &ldquo;Fintech,&rdquo; and Silicon Valley. We believe technology is an intangible earth, with which we can and should have an earthly relationship. It is power that we can harness through holistic methods as individuals and cooperative networks for the empowerment of oneself and of one&rsquo;s actual communities. Our approach stands in contrast to isolationism, sterility, and authoritarianism by being participatory, flexible, and adaptive.

## About XOXA

Dedicated to cultivating an inclusive queer community through art, music and performance by curating the best of the Brooklyn underground for femmes and allies.

[XOXA](https://xoxa-nyc.github.io/) curates the best of the Brooklyn underground for femmes and allies.

## About [LiveCode.NYC](https://livecode.nyc/)

We are primarily a meetup group who gets together to discuss programming in real time. We view live coding as a methodology and not medium specific. Some of our members code graphics, games, VR and a handful live code music. Many languages are used within the group, without one being prioritised. Many of us are artists. Sometimes we run events. The core of what we do is share live coding, whether discussing types at our meetups or teaching a system one of us built. We hope to continue to find ways in which we can do this, as a collective.

## About Death By Audio

The [Death By Audio Arcade](https://www.deathbyaudioarcade.com/) is a series of lovingly crafted local multiplayer arcade cabinets produced by local indie game developers. We are also a progressive, open community of like-minded artists, artisans, and enthusiasts. We host events at least once a month, in NYC and at events across the country, from SXSW to the Smithsonian.

## About Half Lucid Jewelry

[Half Lucid Jewelry](https://www.etsy.com/shop/HalfLucidJewelry) is unique, 100% handcrafted, recycled and/or resourced jewelry. No two Half Lucid creations are the same. Sparkly, beautiful, and made with crystal and stones, Half Lucid's crowns are a forever statement piece. Half Lucid Jewelry is eccentric, colorful, and crazy magical&mdash;perfect for fashionistas with wanderlust.

{% include press-boilerplate.md %}
