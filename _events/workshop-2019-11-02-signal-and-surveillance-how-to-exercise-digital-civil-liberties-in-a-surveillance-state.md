---
title: "Signal and Surveillance: How to Exercise Digital Civil Liberties in a Surveillance State"
startDate: &startDate 2019-11-02 15:30:00 -0400
endDate: 2019-11-02 17:30:00 -0400
date: *startDate
location: Triangle Arts Association
image: static/images/workshop.signal-and-surveillance-how-to-exercise-digital-civil-liberties-in-a-surveillance-state.rectangle.jpg
isAccessibleForFree: true
offers:
    - name: General admissions suggested donation
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19145
    - name: Suggested donation for queer-identified and femme people
      description: Reduced price tickets help offset systemic biases prevalent in society and in the cybersecurity industry especially.
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19145
sameAs:
    - https://www.artful.ly/store/events/19145
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265475021/
    - https://www.garysguide.com/events/jmongl9/Signal-Surveillance-How-to-Exercise-Digital-Civil-Liberties-in-a-Surveillance-State
    - https://brokelyn.com/?p=224517
    - https://newyorkcity.eventful.com/events/signal-and-surveillance-exercise-digital-civil-lib-/E0-001-131311655-9
    - https://patch.com/new-york/new-york-city/calendar/event/20191102/662408/signal-and-surveillance-how-to-exercise-digital-civil-liberties
    - https://allevents.in/brooklyn/signal-and-surveillance-how-to-exercise-digital-civil-liberties-in-a-surveillance-state/80005146902842
    - https://www.eff.org/event/signal-and-surveillance-how-exercise-digital-civil-liberties-surveillance-state
    - https://www.cityguideny.com/event/Triangle-Arts-Association-2019-11-02-2019-11-02
maximumAttendeeCapacity: 25
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: This introductory cybersecurity workshop will show you why Signal, a free, secure, private message app is simple enough to schedule drinks with, yet secure enough to use for planning a protest. As dragnet surveillance practices are legalized at alarming speed, there has never been a more important time to flex your digital civil liberties muscle than right now.
---

The Tech Learning Collective invites you to join us for *{{ page.title }}*. {{ page.teaser }}

### RSVP

Reservation tickets are offered on a first-come, first-served basis, but no one will be turned away for lack of funds:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }}){% if offer.description %}: {{ offer.description }}{% endif %}
{% endfor %}

### Workshop Description

> Whether you&rsquo;re an individual chatting with friends or an organizer planning a political action, all effective coordination depends on safe and reliable communication. Lacking integrity for our communications dooms any effort from the outset, whether mundane or revolutionary. As dragnet surveillance practices are legalized at alarming speed and continue to be fueled by a dramatic expansion of the law enforcement and private defense contractor economies, there has never been a more important time to flex your digital civil liberties muscle than right now.
>
> [Signal](https://signal.org/) is the name of a Free Software, secure, private message application built on a cryptographic protocol of the same name. Formerly known as the Axolotl Ratchet or, more commonly, the [Double-Ratchet Algorithm](https://en.wikipedia.org/wiki/Double_Ratchet_Algorithm), its features are robust enough for the revolutionary activist (i.e., end-to-end encryption, message authentication, plausible deniability or message repudiation, perfect forward secrecy, and more) and yet simple enough to use as a drop-in replacement for your existing text messaging application. Signal also sports Skype-like voice and video calling, location- and file-sharing features, and even iMessage-style large font emojis!
>
> If you&rsquo;ve never heard of Signal before, now&rsquo;s the time to switch. If you think you already know how to use Signal, let us show you some pro-tips (trusted third-party Safety Number verification, disappearing messages, registering Signal accounts with pseudonymous phone numbers, inactivity lock-outs, and Signal relay server IP address protection). This introductory cybersecurity workshop will show you why Signal is simple enough to schedule drinks at the bar with, yet secure enough to use for planning a protest. 

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and make your donation, or make your donation now and [get your reservation ticket online]({{ page.offers[0].url }}). If the suggested rate is cost-prohibitive, we encourage attendees to pay whatever is comfortable for them. For accommodations, please email us at [{{ site.data.contact.email }}](mailto:{{ site.data.contact.email }}?subject={{ "[WORKSHOP: " | append: page.title | append: "] Discount request" | uri_escape }}).

You do not need to bring a laptop to class, but may want to do so to follow along with the exercises.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
