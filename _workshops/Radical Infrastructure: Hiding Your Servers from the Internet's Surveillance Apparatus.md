---
title: "Radical Infrastructure: Hiding Your Servers from the Five Eyes"
image: workshop.radical-infrastructures.hiding-your-servers-from-the-five-eyes.png
categories:
    - Radical infrastructures
order: 100
---

As a radical organization, setting up your own service infrastructure is only part of the challenge. Depending on how likely you are to be raided, surveilled, or otherwise targeted, you may also need to hide from the surveillance apparatus deployed on the Internet by the [Five Eyes](https://en.wikipedia.org/wiki/Five_Eyes), a coalition of five Western governments including the United States and the United Kingdom whose Internet surveillance campaigns were thrust into the spotlight when Edward Snowden blew the whistle on their secretive spying programs in 2013. By employing companies with names such as Palantir, a direct reference to the fictional crystal ball in J.R.R. Tolkien's <cite>Lord of the Rings</cite> that makes it possible to see events in other parts of the world or the distant past and future, the Five Eyes pumps billions of dollars into the mass surveillance industry each year in an effort to ensure political organizing efforts are contained and controlled.

But despite their awesome resources, governments and intelligence agencies are still operating on the same playing field when it comes to digital technologies because the Internet is fundamentally a [dual-use technology](https://en.wikipedia.org/wiki/Dual-use_technology); its military applications are based on the same underlying technologies and, in some cases, even the same commercial products, as that which is available to civilians.

[Tor](https://torproject.org/) is one of the best examples of this. A privacy-enhancing proxy that is perhaps best known for its censorship circumvention applications, Tor is also a powerful network-layer anonymizing tool that can be used to *publish*, not just *consume*, more securely than ordinarily possible on the Internet today. Thanks to a feature known as [Onion services](https://2019.www.torproject.org/docs/onion-services.html.en), digital services ranging from Web sites to messenging tools and beyond can be operated in varying levels of near-perfect secrecy. By running your service behind a proxifying Tor Onion service, you can make your service available without ever registering a domain name, you can install your service behind any number of firewalls or NAT routers, and you can even add extra layers of state-of-the-art cryptographic authentication to your services so that their existence cannot even be detected by passive adversaries.

In this advanced security workshop, you will learn how to securely build a Tor server from the Tor Project's PGP-signed source code and configure it as an Onion service server to make your digital services available on the so-called "Dark Net," significantly raising the bar your adversaries need to reach to surveil you and your online activities.
