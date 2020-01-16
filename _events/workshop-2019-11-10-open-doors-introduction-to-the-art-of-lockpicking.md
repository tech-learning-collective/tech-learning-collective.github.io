---
title: "Open Doors: Introduction to the Art of Lockpicking"
startDate: &startDate 2019-11-10 18:00:00 -0500
endDate: 2019-11-10 19:00:00 -0500
date: *startDate
location: TechAhoy
image: static/images/workshop.open-doors-introduction-to-the-art-of-lockpicking.rectangle.png
offers:
    - name: Workshop Ticket
      price: 35
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19189
    - name: Reduced price Workshop Ticket (for queer-identified and femme people)
      description: Reduced price tickets help offset systemic biases prevalent in society and in the cybersecurity industry especially.
      price: 25
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19189
sameAs:
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265598580/
    - https://www.garysguide.com/events/trr8wi5/Open-Doors-Intro-to-the-Art-of-Lockpicking
    - https://brokelyn.com/?p=224983
    - https://newyorkcity.eventful.com/events/open-doors-introduction-art-lockpicking-/E0-001-131425219-5
    - https://patch.com/new-york/new-york-city/calendar/event/20191110/667759/open-doors-introduction-to-the-art-of-lockpicking
    - https://allevents.in/ridgewood/open-doors-introduction-to-the-art-of-lockpicking/80004276933503
maximumAttendeeCapacity: 25
organizers:
    - Tech Learning Collective
    - TechAhoy
performers:
    - Tech Learning Collective
teaser: In this hands-on introduction to physical security, learn to pick your first lock, or hone your understanding of how traditional American pin and tumbler locks work. Find out just how easy it is to pick most typical padlocks, and discover what really makes locks click. We&rsquo;ll go over the basics of fundamental picking techniques such as single-pin picking (SPP) and raking, so you can understand why they&rsquo;re effective, along with basic shim technique for combination and other keyless locks.
---

{{ page.location }} in collaboration with the Tech Learning Collective presents: *{{ page.title }}*.

### RSVP

Tickets are sold on a first-come, first-served basis:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }}){% if offer.description %}: {{ offer.description }}{% endif %}
{% endfor %}

### Workshop Description

> To most people, locks often symbolize permanence, safety, or ownership, and they can serve critical social functions, such as demarcating public space from private space. Like all other technologies, locks can be used for good or evil ends, making them inherently political. Powerful people use locks to hoard resources and create obstacles or barriers for the less resourced, but locks can also be used as legitimate security devices to slow the advance of a theif, sabateur, or other ill-intentioned actor.
>
> To a locksmith or lock picker, a lock can be as profound as an intense intellectual exercise or as mundane as another set of fantastic fidget toys. Picking a lock is the classic analog equivalent to hacking. It can be both fun and surprisingly meditative!
>
> In this hands-on introduction to physical security, learn to pick your first lock, or hone your understanding of how traditional American pin and tumbler locks work. Find out just how easy it is to pick most typical padlocks, and discover what really makes locks click. We’ll go over the basics of fundamental picking techniques such as single-pin picking (SPP) and raking, so you can understand why they’re effective, along with basic shim technique for combination and other keyless locks.
>
> Practice picks and locks will be provided, but feel free to bring your own if you’re comfortable sharing. We guarantee that opening your first lock—without the key—will fundamentally change the way you see the world!

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and purchase your ticket, or [purchase your ticket online and reserve your spot immediately]({{ page.offers[0].url }}).

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
