---
title: "Media in Resistance Conference Workshop: Gone Phishing"
startDate: &startDate 2019-11-23 11:00:00 -0500
endDate: 2019-11-23 12:30:00 -0500
date: *startDate
location: The Peoples Forum
image: static/images/event-2019-11-23-media-in-resistance.png
isAccessibleForFree: true
offers:
    - name: Reservation (RSVP only)
      description: This event has limited capacity and RSVP tickets guarantee your spot. This ticket is only an RSVP, omitting your optional donation to support our advocacy efforts in support of online privacy and digital security literacy in underserved communities.
      price: 0
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19218
    - name: Privacy Defender Suggested Donation (RSVP plus donation)
      description: This ticket is the recommended RSVP option for those who have financial resources or are attending the workshop with the backing of their employer. This ticket type guarntees your spot at the workshop and offers your donation in support of our advocacy efforts to strengthen online privacy and digital security literacy in underserved communities.
      price: 95
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19218
    - name: Suggested Donation (RSVP plus donation)
      description: This ticket is the recommended RSVP option for those who can afford to support our efforts to strengthen online privacy and digital security literacy in underserved communities. This ticket type guarantees your spot at the workshop and makes it possible for us to offer reduced-price tickets for our events.
      price: 45
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19218
    - name: Suggested Donation for Queer-identified and Femme People (RSVP plus donation)
      description: This ticket is the recommended RSVP option for queer-identified and femme people or others who face systemic obstacles in society at large and in the cybersecurity industry especially but can still afford to lend their support to our efforts strengthening online privacy and digital security literacy in underserved communities. This ticket type guarantees your spot at the workshop.
      price: 30
      priceCurrency: USD
      availabilityEnds: *startDate
      url: https://www.artful.ly/store/events/19218
sameAs:
    - https://www.artful.ly/store/events/19218
    - https://www.miccenter.org/?page_id=18
    - https://www.meetup.com/New-York-Cryptoparty-Network/events/265747555/
maximumAttendeeCapacity: 20
organizers:
    - Tech Learning Collective
    - Paper Tiger
performers:
    - Tech Learning Collective
teaser: This workshop is a combination &ldquo;attack/defense&rdquo; exercise focusing on Web-based social engineering attacks. Participants will practice both how to launch their own attacks as well as how to defend against them.
---

The [&ldquo;Media in Resistance: 20 Years After Seattle&rdquo; conference](https://www.miccenter.org/?page_id=18) invites you to join the Tech Learning Collective&rsquo;s cybersecurity trainers for a special workshop presentation of &ldquo;Gone Phishing: Recognizing Fake Websites and Other Online Scams.&rdquo; This full-day conference will feature a film screening of <cite>Showdown in Seattle: Five Days That Shook the WTO</cite> on Friday evening, followed by a full day conference on Saturday, November 23<sup>rd</sup> engaging media makers, activists, and academics:

> Twenty years ago, thousands of young activists filled the streets of downtown Seattle in a massive protest against the World Trade Organization. They stunned business and government elites around the world with their creative tactics and their use of independent media networks to spread their own anti-globalization message to the public, thus circumventing traditional corporate media gatekeepers. This conference will bring pioneers of the Seattle indymedia network, more recent activists from the democracy movements across the MENA region, Occupy Wall Street, Black Lives Matter, Standing Rock, and other movements, together with scholars committed to a more inclusive and democratic media system to analyze the lessons of the past 20 years of resistance media and the road ahead.

The conference *and* our &ldquo;Gone Phishing&rdquo; workshop is free to attend, but workshop space is limited to {{ page.maximumAttendeeCapacity }} and RSVP&rsquo;s are required to reserve your spot at the workshop.

### RSVP

Reservation tickets are offered on a first-come, first-served basis:

{% for offer in page.offers %}
* [${{ offer.price }} - {{ offer.name }}]({{ offer.url }}){% if offer.description %}: {{ offer.description }}{% endif %}
{% endfor %}

### Workshop Description

This workshop is a combination &ldquo;attack/defense&rdquo; exercise focusing on Web-based social engineering attacks. Participants will practice both how to launch their own attacks as well as how to defend against them:

> Whether it&rsquo;s corporate espionage, ransomware, or online fraud, most cyber attacks don&rsquo;t start with sophisticated software exploits, but rather by employing relatively simple tricks. These tricks are called &ldquo;phishing&rdquo; attacks because, much like baiting a lure, they won&rsquo;t work unless you bite. However, <em>many</em> people do get caught up by them.
>
> In 2019, [ninety percent (90%!) of reported data breaches began with a simple phishing scam](https://retruster.com/blog/2019-phishing-and-email-fraud-statistics.html), costing businesses [over $12 billion in losses](https://retruster.com/blog/2019-phishing-and-email-fraud-statistics.html). Phishing attacks are the most common type of cyberattack on the Internet today, with [one and a half million new phishing websites launched every month](https://www.webroot.com/us/en/about/press-room/releases/nearly-15-million-new-phishing-sites). Thankfully, it&rsquo;s easy to spot—and even to perform—these tricks if you have the right guidance.
>
> For example, when you&rsquo;re at a cafe and you ask the patron next to you to watch your belongings, your stuff will probably be safe when you return. But how safe would you feel if the patron at the next table turned to you and *offered* to watch your belongings when you next needed to use the restroom? If you had two different reactions to these scenarios, you already have the intuition you need to understand how the overwhelming majority of cybercrime gets a foothold inside your company, home, or organization&rsquo;s network.
>
> In this workshop derived from a portion of the [Tech Learning Collective&rsquo;s popular &ldquo;Hacking with Mr. Robot&rdquo; Security 101 course]({% link _courses/sec101.md %}), you will have the opportunity to create and deploy your own phishing Web site that can steal usernames and passwords from unsuspecting victims. By learning how attackers build pixel-perfect replicas of familiar sites like the Facebook login screen, you will also gain the skills you need to more quickly recognize the signs of a malicious web site, email, or other online scam.

Class space is limited to {{ page.maximumAttendeeCapacity }} students! Please arrive 5 to 10 minutes early to reserve your seat and make your donation, or make your donation now and [get your reservation ticket online]({{ page.offers[0].url }}).

You do not need to bring a laptop to class, but may want to do so to follow along with the exercises.

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include press-boilerplate.md %}
