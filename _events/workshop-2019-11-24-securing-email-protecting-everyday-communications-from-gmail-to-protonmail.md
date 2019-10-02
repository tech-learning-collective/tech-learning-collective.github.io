---
title: "Securing Email: Protecting Everyday Communications from GMail to ProtonMail"
startDate: &startDate 2019-11-24 15:30:00 -0400
endDate: 2019-11-24 17:30:00 -0400
date: *startDate
location: Wonderville
image: static/images/workshop.securing-email-protecting-everyday-communications-from-gmail-to-protonmail.rectangle.png
flyer: workshop-securing-email-1
offers:
    - name: Workshop Ticket
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://withfriends.co/event/2678741/securing_email_protecting_everyday_communications_from_gmail_to_protonmail/
    - name: Reduced price Workshop Ticket (for queer and femme folks)
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://withfriends.co/event/2678741/securing_email_protecting_everyday_communications_from_gmail_to_protonmail/
sameAs:
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265100402/
    - https://withfriends.co/event/2678741/securing_email_protecting_everyday_communications_from_gmail_to_protonmail/
    - https://brokelyn.com/event/securing-email-protecting-everyday-communications-from-gmail-to-protonmail/
    - https://actionnetwork.org/events/securing-email-protecting-everyday-communications-from-gmail-to-protonmail
    - https://www.wonderville.nyc/events/securingemailprotectingeverydaycommunicationsfromgmailtoprotonmail
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
    - Wonderville
performers:
    - Tech Learning Collective
---

{{ page.location }} in collaboration with the Tech Learning Collective presents: *{{ page.title }}*, a two-hour digital safety workshop that will demystify the nuance of email privacy and security:

> As one of the oldest digital communication methods, email is used for everything from pointless chain letters to critical financial statements and legal actions. The name &ldquo;e-mail&rdquo; might make you think that electronic mail works the same way that writing a physical letter does, but this isn&rsquo;t entirely true. From a technical perspective, it&rsquo;s more like &ldquo;e-postcards&rdquo; because, just like sending a postcard through the postal service, anyone who handles your postcard can read what you wrote.
>
> In the physical world, protecting your correspondence requires you to take the extra step of putting your letter inside an envelope and then sealing the envelope. That way, no one looking at the outside of the envelope can read what you wrote on the letter paper. To protect your email in the digital world, you still have to take this extra step of putting your letter inside a metaphorical envelope. Some services, like [ProtonMail, claim to do this for you, but fail to do so in many common scenarios](https://github.com/AnarchoTechNYC/meta/wiki/ProtonMail). Meanwhile, many people believe that just using Google&rsquo;s GMail service means all your email content is always readable by Google, but this isn&rsquo;t always true either.
>
> This workshop will demystify the nuance of email privacy and security. By using [freely available OpenPGP-compatible software](https://prism-break.org/en/protocols/gpg/), which has been available since 1991, the Tech Learning Collective&rsquo;s cybersecurity instructors will show you how you can keep your message contents private regardless of the email service provider you use. Never send paperwork with your social security number or other sensitive details on a digital postcard to your lawyer or accountant ever again!

Tickets are sold on a first-come, first-served basis:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }})
{% endfor %}

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and purchase your ticket.

You do not need to bring a laptop to class, but may want to do so to follow along with the exercises.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, “brogrammer,” “manarchist,” or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include press-boilerplate.md %}
