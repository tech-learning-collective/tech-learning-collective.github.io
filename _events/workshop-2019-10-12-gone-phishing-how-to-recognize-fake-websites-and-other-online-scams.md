---
title: "Gone Phishing: How to Recognize Fake Websites and Other Online Scams"
startDate: &startDate 2019-10-12 15:30:00 -0400
endDate: 2019-10-12 17:30:00 -0400
date: *startDate
location: Triangle Arts Association
image: static/images/workshop.gone-phishing-how-to-recognize-fake-websites-and-other-online-scams.rectangle.jpg
isAccessibleForFree: true
offers:
    - name: General admissions suggested donation
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19090
    - name: Suggested donation for queer-identified and femme people
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19090
sameAs:
    - https://www.artful.ly/store/events/19090
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265306208/
    - https://brokelyn.com/event/gone-phishing-how-to-recognize-fake-websites-and-other-online-scams-2/
    - https://actionnetwork.org/events/gone-phishing-how-to-recognize-fake-websites-and-other-online-scams-2
    - https://newyorkcity.eventful.com/events/gone-phishing-recognize-fake-websites-and-other-on-/E0-001-131185194-0
    - https://thoughtgallery.org/events/gone-phishing-how-to-recognize-fake-websites-and-other-online-scams/
    - https://www.garysguide.com/events/brmxknp/Gone-Phishing-How-to-Recognize-Fake-Websites-Other-Online-Scams
    - https://patch.com/new-york/new-york-city/calendar/event/20191012/660750/gone-phishing-how-to-recognize-fake-websites-other-online-scams
    - https://www.eff.org/event/gone-phishing-how-recognize-fake-websites-and-other-online-scams
maximumAttendeeCapacity: 25
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: This workshop is a combination &ldquo;attack/defense&rdquo; exercise focusing on Web-based social engineering attacks. Participants will practice both how to launch their own attacks as well as how to defend against them.
---

The Tech Learning Collective invites you to join us for, &ldquo;*Gone Phishing: How to Recognize Fake Websites and Other Online Scams*.&rdquo; This workshop is a combination &ldquo;attack/defense&rdquo; exercise focusing on Web-based social engineering attacks. Participants will practice both how to launch their own attacks as well as how to defend against them:

> Whether it&rsquo;s corporate espionage, ransomware, or online fraud, most cyber attacks don&rsquo;t start with sophisticated software exploits, but rather by employing relatively simple tricks. These tricks are called &ldquo;phishing&rdquo; attacks because, much like baiting a lure, they won&rsquo;t work unless you bite. However, <em>many</em> people do get caught up by them.
>
> In 2019, [ninety percent (90%!) of reported data breaches began with a simple phishing scam](https://retruster.com/blog/2019-phishing-and-email-fraud-statistics.html), costing businesses [over $12 billion in losses](https://retruster.com/blog/2019-phishing-and-email-fraud-statistics.html). Phishing attacks are the most common type of cyberattack on the Internet today, with [one and a half million new phishing websites launched every month](https://www.webroot.com/us/en/about/press-room/releases/nearly-15-million-new-phishing-sites). Thankfully, it&rsquo;s easy to spot—and even to perform—these tricks if you have the right guidance.
>
> For example, when you&rsquo;re at a cafe and you ask the patron next to you to watch your belongings, your stuff will probably be safe when you return. But how safe would you feel if the patron at the next table turned to you and *offered* to watch your belongings when you next needed to use the restroom? If you had two different reactions to these scenarios, you already have the intuition you need to understand how the overwhelming majority of cybercrime gets a foothold inside your company, home, or organization&rsquo;s network.
>
> In this workshop derived from a portion of the [Tech Learning Collective&rsquo;s popular &ldquo;Hacking with Mr. Robot&rdquo; Security 101 course]({% link _courses/sec101.md %}), you will have the opportunity to create and deploy your own phishing Web site that can steal usernames and passwords from unsuspecting victims. By learning how attackers build pixel-perfect replicas of familiar sites like the Facebook login screen, you will also gain the skills you need to more quickly recognize the signs of a malicious web site, email, or other online scam.

Reservation tickets are offered on a first-come, first-served basis, but no one will be turned away for lack of funds:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }})
{% endfor %}

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and make your donation, or make your donation now and [get your reservation ticket online]({{ page.offers[0].url }}). If the suggested rate is cost-prohibitive, we encourage attendees to pay whatever is comfortable for them. For accommodations, please email us at [{{ site.data.contact.email }}](mailto:{{ site.data.contact.email }}?subject={{ "[WORKSHOP: " | append: page.title | append: "] Discount request" | uri_escape }}).

You do not need to bring a laptop to class, but may want to do so to follow along with the exercises.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
