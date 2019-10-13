---
title: "Radical Infrastructure: Introductory CryptoJam"
startDate: &startDate 2019-11-03 14:30:00 -0500
endDate: 2019-11-03 19:30:00 -0500
date: *startDate
location: Triangle Arts Association
image: static/images/workshop.radical-infrastructures.introductory-cryptojam.rectangle.png
offers:
    - name: Workshop Ticket
      price: 150
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19188
    - name: Reduced price Workshop Ticket (for queer-identified and femme people)
      price: 99
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19188
sameAs:
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265595786/
    - https://www.garysguide.com/events/b4486d1/Radical-Infrastructure-Introductory-CryptoJam
    - https://brokelyn.com/?p=224976
    - https://newyorkcity.eventful.com/events/radical-infrastructure-introductory-cryptojam-/E0-001-131425135-4
    - https://patch.com/new-york/new-york-city/calendar/event/20191103/667649/radical-infrastructure-introductory-cryptojam
    - https://www.cityguideny.com/event/Triangle-Arts-Association-2019-11-03-2019-11-03
maximumAttendeeCapacity: 25
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: Put your campaign or advocacy efforts on solid ground with this introductory crash course in digital security from the Tech Learning Collective&rsquo;s cybersecurity trainers. You&rsquo;ll leave equipped with the same tools that militaries and private defense contractors use on a daily basis.
---

Level-up your digital security and online privacy prowess at the Tech Learning Collective&rsquo;s *{{ page.title }}*. Designed from the ground-up to quickly familiarize participants with the most important Internet safety best practices, you will leave equipped with state of the art security tools installed on your devices and will have gained a fundamental understanding of how each tool works.

**No walk-ins!** To attend this workshop, you *must* purchase tickets in advance at [our online storefront]({{ page.offers[0].url }}). Tickets to this workshop are only sold in advance and online; you cannot buy a ticket at the door to this event.

> Put your campaign or advocacy efforts on solid ground with this introductory crash course in digital security from the Tech Learning Collective&rsquo;s cybersecurity trainers. This full-day workshop highlights the most important information from many of our stand-alone digital security workshops in order to introduce participants to a wide selection of the most powerful and indispensable Free Software and Open Source tools for protecting their online privacy. Even if you began the day at square one, you will leave equipped with the same tools that militaries and private defense contractors use on a daily basis, and you&rsquo;ll gain a fundamental understanding of how and why each tool works.
> 
> The Tech Learning Collective&rsquo;s &ldquo;CryptoJam&rdquo; sampler offers an intensive, structured learning path through some of the most critical cybersecurity and online privacy considerations facing individuals and targeted activists today. From assessing your risk level through implementing operational security best practices, you will have the opportunity not only to install security tools, but to practice using key features that are too often overlooked.
> 
> Featured tools and techniques covered include:
> 
> * Private messaging with Signal Private Messenger.
> * First-party and trusted third-party Signal Safety Number verification techniques.
> * Registering Signal accounts with pseudonymous phone numbers (&ldquo;burner&rdquo; phones).
> * Signal relay server IP address protection.
> * Signal&rsquo;s metadata-minimized Sealed Sender messages.
> * Anonymous Web browsing with Tor and Tor Browser.
> * Using the Tor Browser&rsquo;s Security Level slider.
> * Using multiple Tor circuits in and outside of Tor Browser.
> * Accessing and self-hosting Onion services.
> * Strengthening online account security using password and secrets management apps like KeePass, LastPass, and others.
> * Basic Web and email phishing awareness training.
> * Performing HTTPS (TLS) certificate checking.
> * OpenPGP digital signature validation techniques in multiple environments such as Web mail (GMail) and dedicated apps (ProtonMail).
> * and much more!
> 
> The Tech Learning Collective&rsquo;s Radical Infrastructure CryptoJam is an excellent opportunity to learn a little bit about a lot, and to get a sense of what else you might want to learn. Since the workshop material is derived from our longer [stand-alone workshops]({% link workshops/index.md %}) and [intensive courses]({% link courses/index.html %}), this full-day sampler is also a fantastic opportunity to get a sense of the Tech Learning Collective&rsquo;s teaching style and a cursory overview of some of the material available at other Tech Learning Collective educational offerings.

**Tickets** are sold on a first-come, first-served basis and are only available via [our online storefront]({{ page.offers[0].url }}) in advance. **No walk-ins or door sales are offered for this event.** We are offering a 33% discounted price ticket to this class for queer-identified and femme people to help offset systemic biases.

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }})
{% endfor %}

Class space is limited to {{ page.maximumAttendeeCapacity }} students! [Purchase your ticket now to reserve your spot]({{ page.offers[0].url }}). You cannot purchase tickets at the door for this event; you *must* purchase a ticket in advance to attend this workshop.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include press-boilerplate.md %}
