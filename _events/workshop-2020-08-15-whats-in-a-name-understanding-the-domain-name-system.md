---
title: "What's in a Name: Understanding the Domain Name System"
startDate: &startDate 2020-08-15 16:30:00 -0400
endDate: 2020-08-15 18:00:00 -0400
date: *startDate
location: Remote
payment_processor: paypal
webinar_id: 88
image: static/images/workshop.whats-in-a-name-understanding-the-domain-name-system.rectangle.jpg
offers:
    - name: Privacy Defender Webinar Ticket
      description: Privacy Defender tickets are the recommended ticket type for those who can afford to help fund the digital security and online privacy advocacy communities with their financial resources, are attending the workshop with the support of their employers or other backers, or have other resources available to them. Purchasing tickets at this level makes it possible for us to offer reduced price tickets to those in need.
      price: 70
      priceCurrency: USD
      availabilityEnds: *startDate
    - name: General Admission
      price: 35
      priceCurrency: USD
      availabilityEnds: *startDate
    - name: Reduced price admission (for queer-identified, femme, and BIPOC people)
      description: Reduced price workshop tickets help offset systemic biases prevalent in society and in the technology sector especially.
      price: 25
      priceCurrency: USD
      availabilityEnds: *startDate
sameAs:
    - https://gobrunch.com/events/123033
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: Find out how easy it is to avoid certain forms of Internet censorship, phishing attacks, or network outages in this primer to the Domain Name System or DNS. Far from being just a way to translate names like Google.com into IP addresses, the DNS is actually a massively distributed, delegated database capable of housing all sorts of information. For administrators and programmers, understanding DNS is a crucial step to ensuring the health of applications and services. But it's also one of the components of Internet networking most visible to users. This workshop will discuss recursive resolvers, anti-spam DNS resource records, and state-of-the-art security protocols such as DNS-over-HTTPS.
---

{{ page.teaser }}

## Workshop Description

> In the digital [world of cyperspace]({% link _workshops/Exploring Cyberspace: Network Sniffing and Scanning.md %}) networks, such as the Internet, places don&rsquo;t have names. They have numbers. Called Internet Protocol (IP) addresses, these numbers are used to identify the sources and destinations where network traffic, such as Web browsing, email, and video conferencing messages should go. But if computers use numbers and not names to route traffic, how do they know where to go when we type in addresses such as `google.com` in our Web browser?
>
> The answer lies in DNS, the Domain Name System. Often described as &ldquo;the Internet&rsquo;s phone book,&rdquo; DNS is actually a far more capable and integral component of networked systems than it&rsquo;s given credit for. Ever since its inception in 1983, the DNS was a key enabler of the growth of the Internet and has been vital to its continued operation to this day. Beyond the popular understanding as a name-to-address lookup system, the DNS is actually a massive, distributed, delegated database that allows organizations to publish all kinds of useful information in the form of *resource records (RRs)*. For instance, today DNS is also used to fight email spam and phishing attacks (using DNS-backed protocols like [SPF](https://en.wikipedia.org/wiki/Sender_Policy_Framework), [DKIM](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail), [DMARC](https://en.wikipedia.org/wiki/DMARC), and [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities), and [CAA](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization) resource records), perform service discovery (with [SRV records](https://en.wikipedia.org/wiki/SRV_record)), and more.
>
> Understanding what DNS really is and how it actually works is a crucial, early step administrators must take to ensure applications and services are healthy. In this deep-dive workshop, we&rsquo;ll dissect the DNS protocol itself, watching queries and replies, and we&rsquo;ll trace DNS messages across recursive DNS servers, called *resolvers*, as they get bounced from the root DNS resolvers to the ultimate authority responsible for managing the *zone* in which our answer is to be found. We&rsquo;ll also discuss the inherent insecurities of the original UDP-based DNS traffic, as well as how to secure DNS transmissions using state-of-the-art technology such as [DNSCrypt](https://dnscrypt.info/) v2, DNS-over-TLS (DoT), and DNS-over-HTTPS (DoH), which is increasingly finding its way into familiar apps like Web browsers and even the Windows 10 Operating System itself.

{% include boilerplate-webinar.md %}

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
