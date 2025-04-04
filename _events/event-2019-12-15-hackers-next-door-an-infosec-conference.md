---
title: "Hackers Next Door: An InfoSec Conference (Day 2)"
startDate: &startDate 2019-12-15 11:00:00 -0500
endDate: 2019-12-15 22:00:00 -0500
date: *startDate
location: Triangle Arts Association
image: static/images/event.2019-12-14.hackers-next-door-an-infosec-conference.rectangle.png
offers:
    - name: Conference Tickets
      description: Tickets range in price from $30 to $199, with prices rising as early bird and discounted rate tickets sell out.
      price: 30-199
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://hnd.techlearningcollective.com/tickets/
sameAs:
    - https://www.artful.ly/store/events/19216
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/264958235/
    - https://www.garysguide.com/events/xlww51f/Hackers-Next-Door-An-InfoSec-Conference
    - https://brokelyn.com/?p=225393
    - https://newyorkcity.eventful.com/events/hackers-next-door-infosec-conference-/E0-001-131690411-3
    - https://patch.com/new-york/new-york-city/calendar/event/20191214/672701/hackers-next-door-an-infosec-conference
    - https://allevents.in/brooklyn/hackers-next-door-an-infosec-conference/80002066341344
    - https://www.cityguideny.com/event/Triangle-Arts-Association-2019-12-14-2019-12-14
organizers:
    - Tech Learning Collective
performers:
    - Anarcho-Tech NYC
    - Shift-CTRL Space
    - Tech Learning Collective
    - Surveillance Technology Oversight Project
teaser: Hackers Next Door is an open-to-the-public information security conference featuring invitation-only presentations by the best of the tri-state area’s cybersecurity trainers, privacy rights advocacy groups, and their constituencies.
---

The Tech Learning Collective is proud to present our inaugural {{ page.title }}.

### RSVP

Space is limited. A ticket is required to attend. No walk-ins are allowed, and no door sales are offered.

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }}){% if offer.description %}: {{ offer.description }}{% endif %}
{% endfor %}

### Conference Description

*Hackers Next Door* is an open-to-the-public information security conference featuring presentations by the best of the tri-state area&rsquo;s cybersecurity trainers, privacy rights advocacy groups, and their constituencies.

The two-day conference is a unique opportunity for anyone interested in protecting themselves online to participate in a skill-sharing and educational convergence where they can meet one another, compare notes with peers and colleagues, and learn practical techniques from the region’s top cybersecurity instructors, legal experts, and experienced activists.

For community organizers and movement builders, *Hackers Next Door* offers a weekend of hacking demonstrations, &ldquo;State of the Movement&rdquo; briefings, legal primers, know-your-rights trainings, technical workshops, and political strategy brainstorming opportunities in a kinetic environment.

By enhancing cybersecurity training for everyone and increasing public awareness of digital civil liberties issues, *Hackers Next Door* gives invited speakers a chance to showcase and workshop their educational methods and materials to and with an audience of like-minded and impassioned community organizers so that we can all learn from one another’s experience and perspective.

Learn more and [buy tickets](https://hnd.techlearningcollective.com/tickets/) at the [Hackers Next Door conference website](https://hnd.techlearningcollective.com/).

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from the event without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
