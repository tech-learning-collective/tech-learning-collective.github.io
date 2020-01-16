---
title: "Exploring Cyberspace: Network Sniffing and Scanning"
startDate: &startDate 2019-09-15 15:30:00 -0400
endDate: 2019-09-15 17:30:00 -0400
date: *startDate
redirect_from:
    - /events/2019/08/workshop-2019-09-15-exploring-cyberspace-network-sniffing-and-scanning
location: Wonderville
image: static/images/workshop.exploring-cyberspace-network-sniffing-and-scanning.rectangle.png
flyer: workshop-exploring-cyberspace-1
offers:
    - name: Workshop Ticket
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://withfriends.co/event/2446999/exploring_cyberspace_network_sniffing_and_scanning
    - name: Reduced price Workshop Ticket (for queer and femme folks)
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://withfriends.co/event/2446999/exploring_cyberspace_network_sniffing_and_scanning
sameAs:
    - https://withfriends.co/event/2446999/exploring_cyberspace_network_sniffing_and_scanning
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/264090983/
    - https://www.wonderville.nyc/events/exploring-cyberspace-network-sniffing-and-scanning
    - https://www.facebook.com/events/1632425266892144/
    - https://www.cityguideny.com/event/Wonderville-2019-09-15-2019-09-15
    - https://actionnetwork.org/events/exploring-cyberspace-network-sniffing-and-scanning
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
    - Wonderville
performers:
    - Tech Learning Collective
---

{{ page.location }} in collaboration with the Tech Learning Collective presents: *{{ page.title }}*, an adventure into the vastness of the Internet:

> Have you ever wondered what&rsquo;s between your computer and the websites you visit? Are you curious about where your messages actually go in order to get from here to there? Do you wonder what a map of computer networks really looks like? Come exploring with us as we embark on a journey into cyberspace, the final Final Frontier! In this beginner-friendly workshop, we&rsquo;ll throw a metaphorical message in a bottle into the expanse of cyberspace, and learn how to sense and track its movement as it makes its way back to us&mdash;or not!
> 
These are the voyages of frames, packets, and segments&mdash;our messages&mdash;as they make their way across the vast reaches of the Internet. On the way, they&rsquo;ll encounter both friendly and unfriendly devices, such as routers, firewalls, traffic inspectors, or NAT tables. At each step of their journey, a complex series of decisions are made to determine where they&rsquo;ll be routed to next, or if their journey is at an end. By using network mapping tools such as [`nmap`](https://nmap.org/) along with digital wiretapping tools like [Wireshark](https://www.wireshark.org/) we can sense what happens on the far side of a network connection in much the same way as looking at the ripples on the surface of a river can tell us something about the shape of the riverbed.
>
> Join us for a two-hour mission: to explore strange new networks, to seek out new devices and new organizations, to boldly go where only packets have gone before!

This workshop combines material from two [Tech Learning Collective courses]({% link courses/index.html %}) ([NET101]({% link _courses/net101.md %}) and [SEC101]({% link _courses/sec101.md %})). Tickets are sold on a first-come, first-served basis:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }})
{% endfor %}

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and purchase your ticket.

You do not need to bring a laptop to class, but may want to do so to follow along with the exercises.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, “brogrammer,” “manarchist,” or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
