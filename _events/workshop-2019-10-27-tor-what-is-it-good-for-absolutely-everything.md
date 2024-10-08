---
title: "Tor: What is it Good For? (Absolutely Everything!)"
startDate: &startDate 2019-10-27 15:30:00 -0400
endDate: 2019-10-27 17:30:00 -0400
date: *startDate
location: Triangle Arts Association
image: static/images/workshop.tor-what-is-it-good-for-absolutely-everything.rectangle.jpg
flyer: workshop-tor-1
isAccessibleForFree: true
offers:
    - name: General admissions suggested donation
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19044
    - name: Suggested donation for queer-identified and femme people
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19044
sameAs:
    - https://www.artful.ly/store/events/19044
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265123235/
    - https://brokelyn.com/event/tor-what-is-it-good-for-absolutely-everything-3/
    - https://actionnetwork.org/events/tor-what-is-it-good-for-absolutely-everything-2
    - https://www.garysguide.com/events/wfo0c7a/Tor-What-is-it-Good-For-Absolutely-Everything
    - https://newyorkcity.eventful.com/events/tor-good-absolutely-everything-/E0-001-131216491-1
    - https://patch.com/new-york/new-york-city/calendar/event/20191027/660863/tor-what-is-it-good-for-absolutely-everything
    - https://www.eff.org/event/tor-what-it-good-absolutely-everything
maximumAttendeeCapacity: 25
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: This workshop is a two-hour mini-intensive digital safety workshop focused on the free Tor Browser. Tor is a free, state-of-the-art, privacy-enhancing Web browser, SOCKS proxy, and anonymizing overlay mixnet. Don't worry if you don't know what these terms mean, that's what the workshop is for!
---

The Tech Learning Collective invites you to join us for *{{ page.title }}*, a two-hour mini-intensive digital safety workshop focused on the Tor Project. Tor is a free, state-of-the-art, privacy-enhancing Web browser, SOCKS proxy, and anonymizing overlay mixnet. Don't worry if you don't know what these terms mean, that's what the workshop is for!

> From illegal online drug stores like Silk Road to DDoS botnet command and control headquarters, media attention has long painted &ldquo;the Dark Web&rdquo; as though nothing good can come of it. But learn just a little bit more about how Tor and &ldquo;hidden services&rdquo; work and you&rsquo;ll find a treasure trove of valuable possibilities for day-to-day Internet use. The same technology that can hide the location of a drug ring can also serve as a free VPN-like service to protect your privacy while you browse the Internet, make censored websites available again, and even let you host your own Internet services for free, all without opening a single port on your firewall!
>
> In this deep dive workshop on [Tor](https://torproject.org/), the [Tech Learning Collective]({% link index.html %})&rsquo;s cybersecurity trainers will show you how to make the most of this widely available and free digital safety tool. They&rsquo;ll demonstrate numerous Tor features such as Tor authentication, target service load balancing, and NAT-punching. In the process, you&rsquo;ll finally understand—on a technical level—what the &ldquo;Dark Web&rdquo; actually is and how it works. Bring a laptop to class, and you&rsquo;ll leave having run your own Dark Web site. Whether you’re a veteran black hat or a timid newbie, this class will shine a light on the Dark Web once and for all.

This workshop features material from the [Tech Learning Collective&rsquo;s "Hacking with Mr. Robot" SEC101 course]({% link _courses/sec101.md %}). Advance reservation tickets are offered on a first-come, first-served basis and are only available via our online storefront:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }})
{% endfor %}

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and make your donation, or make your donation now and [get your reservation ticket online]({{ page.offers[0].url }}). If the suggested rate is cost-prohibitive, we encourage attendees to pay whatever is comfortable for them. For accommodations, please email us at [{{ site.data.contact.email }}](mailto:{{ site.data.contact.email }}?subject={{ "[WORKSHOP: " | append: page.title | append: "] Discount request" | uri_escape }}).

You do not need to bring a laptop to class, but may want to do so to follow along with the exercises. Mobile devices are also compatible with Tor software and their use is encouraged.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
