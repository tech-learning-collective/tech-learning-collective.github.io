---
title: "Shields Up: Firewalls and Other Network Perimeter Defenses"
startDate: &startDate 2021-04-04 15:30:00 -0400
endDate: 2021-04-04 17:00:00 -0400
date: *startDate
location: Remote
payment_processor: paypal
webinar_id: 184
image: static/images/workshop.shields-up-firewalls-and-other-network-perimeter-defenses.rectangle.jpg
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
    - https://gobrunch.com/events/186508
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: Master the fundamentals of personal and enterprise-grade network firewalls in this hands-on workshop about network perimeter security. By learning to use the macOS, Windows, BSD, and Linux firewalls (including command-line utilities like `iptables`, `nft`, and `pfctl`), you can protect your devices even on untrustworthy or hostile networks, like public Wi-Fi. Intended for all audiences, you'll gain experience with both beginner-friendly and advanced tools including dedicated firewall distributions (like pfSense and IPFire) as you get an introduction to a wide range of NetSec scenarios. We'll also cover the important security properties of NAT routers, how deep packet inspection (DPI) works, and get you started with industry-standard Network Intrusion Detection/Prevention Systems (NIDS/NIPS) like Snort and Suricata.
---

{{ page.teaser }}

## Workshop Description

> In today&rsquo;s ubiquitous computing environment, the most frequently used entrance (and exit!) in to (or out of) any system is its [network connection]({% link _workshops/Clearing Away the Clouds: How Computer Networks, Servers, and the Internet Work.md %}). That&rsquo;s why network firewalls have been a central component of every network security architecture since their introduction in the 1980&rsquo;s. A firewall&rsquo;s primary responsibility is to stop the spread of malware, help prevent cyberattacks and unauthorized data exfiltration, or isolate other problems in one network or network segment from affecting others. Thus, firewalls serve to compartmentalize one area of a computer network from another. And while they are most commonly thought of as being at network boundaries like your home or office router, just about *every* computer has a firewall these days, including your personal laptop.
>
> Modern firewalls can also do a lot more than their first or second generation ancestors that simply blocked certain ports or kept track of ongoing conversations between two endpoints. By building on so-called Deep Packet Inspection (DPI) technology, firewalls can analyze the traffic passing through them in real time, making decisions about what to allow or block based on myriad factors. On more heavily policed or otherwise protected networks, firewalls have evolved into very powerful Network Intrusion Detection or Prevention Systems (NIDS/NIPS).
>
> But don&rsquo;t make the mistake of thinking this power is reserved for rich corporations! The firewall built into the Linux kernel (called [Netfilter](https://www.netfilter.org/) and controlled with the `iptables` or `nft` commands) is the backbone of many commercial enterprise firewall distributions, and it&rsquo;s available free of charge. Plus, its ability to intercept and modify traffic in-flight is the basis of many proxy technologies such as [Docker&rsquo;s networking](https://docs.docker.com/network/) and Kubernetes&rsquo;s [kube-proxy](https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/), among others.
>
> So, are your network shields up? Find out at this workshop where we&rsquo;ll show you how to use the firewall built-in to your Windows, macOS, or GNU/Linux laptop. We&rsquo;ll also show you how to set up firewalled subnets using NAT routers, a bulletproof way to keep unsecured Internet of Things (IoT) or smart-home devices from infecting your more critical personal devices, or to make a super-secure guest Wi-Fi network available for visitors. You&rsquo;ll leave understanding the utility of so-called Layer 7 firewalls such as Web Application Firewalls (WAFs), and knowing how to test the security of your own firewall configurations.

{% include boilerplate-webinar.md %}

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
