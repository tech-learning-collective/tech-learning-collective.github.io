---
title: "Hollywood Hacking Sampler"
startDate: &startDate 2019-11-10 15:30:00 -0500
endDate: 2019-11-10 17:30:00 -0500
date: *startDate
location: TechAhoy
image: static/images/workshop.hollywood-hacking-sampler.rectangle.png
isAccessibleForFree: true
offers:
    - name: General admissions suggested donation
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19143
    - name: Suggested donation for queer-identified and femme people
      description: Reduced price tickets help offset systemic biases prevalent in society and especially in the cybersecurity industry.
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19143
sameAs:
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265464831/
    - https://www.garysguide.com/events/1us6z5t/Hollywood-Hacking-Sampler
    - https://brokelyn.com/?p=224479
    - https://newyorkcity.eventful.com/events/hollywood-hacking-sampler-/E0-001-131293967-0
    - https://patch.com/new-york/new-york-city/calendar/event/20191110/661910/hollywood-hacking-sampler
    - https://allevents.in/ridgewood/hollywood-hacking-sampler/80002173934205
maximumAttendeeCapacity: 25
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: From WarGames (1983), to Hackers (1995), to The Matrix Reloaded (2003), and many more, revisit all your favorite hacker movie moments augmented with edutaining commentary from a peanut gallery of cybersecurity instructors!
---

Part movie night, part cybersecurity workshop, join the Tech Learning Collective&rsquo;s cybersecurity trainers as they take you on a guided tour of Hollywood&rsquo;s most memorable, fantastical, and even kind of realistic hacking scenes to ever grace the silver screen. From WarGames (1983), to Hackers (1995), to The Matrix Reloaded (2003), and many more, revisit all your favorite hacker movie moments augmented with edutaining commentary from a peanut gallery of cybersecurity instructors!

We&rsquo;ll watch a clip from the movie, then critique it from a technopolitical perspective. In the process, you&rsquo;ll be exposed to some indinspensible computer security tools (like `nmap`!), learn about hacking exploits of yesteryear, and ultimately gain a better sense of how to separate fiction from reality in contemporary hacking dramas in pop culture.

### RSVP

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }}){% if offer.description %}: {{ offer.description }}{% endif %}
{% endfor %}

Event space is limited to {{ page.maximumAttendeeCapacity }} participants! Please arrive 5 to 10 minutes early to reserve your seat and make your donation, or make your donation now and [get your reservation ticket online]({{ page.offers[0].url }}). If the suggested rate is cost-prohibitive, we encourage attendees to pay whatever is comfortable for them. For accommodations, please email us at [{{ site.data.contact.email }}](mailto:{{ site.data.contact.email }}?subject={{ "[WORKSHOP: " | append: page.title | append: "] Discount request" | uri_escape }}).

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include press-boilerplate.md %}
