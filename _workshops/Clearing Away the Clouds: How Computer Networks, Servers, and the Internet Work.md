---
title: "Clearing Away the Clouds: How Computer Networks, Servers, and the Internet Work"
image: static/images/workshop.clearing-away-the-clouds-how-computer-networks-servers-and-the-internet-work.square.jpg
simple_description: Learn the basics of computer networking in this workshop that starts by watching a "conversation" between two computers as it's happening in real time. You'll be introduced to the free professional network analysis application called Wireshark so that you can listen in on what the programs on your computer are saying to or hearing from other computers across the Internet.
---

Our ability to browse Web sites, send and receive digital messages like emails and text messages, and make phone or video calls depends on the connections our digital devices make with one another. That makes it critical to understand how these connections are made, and where they lead to. Far from being an amorphous &ldquo;cloud,&rdquo; modern telecommunications networks and services like the Internet are made up of physical devices. Some of these you can see, like your own computer or the router and modem in your house, and others you can&rsquo;t, like distant servers or Layer 2 switches that make up the network infrastructure itself.

In this workshop derived from a portion of the [Tech Learning Collective&rsquo;s NET101 course]({% link _courses/net101.md %}), you&rsquo;ll have the opportunity to actually look&mdash;visually and with great detail&mdash;at how your computer &ldquo;talks&rdquo; to other computers like those that power Google Drive, Facebook, and other cloud services. By using an industry-standard tool called [Wireshark](https://wireshark.org/), we&rsquo;ll dissect a conversation between your computer and a server and walk through the process of encapsulating a packet of application layer data, emitting it onto a network, and watching it travel to its destination. We&rsquo;ll also touch on some illustrative counter-examples to explore how things can go wrong on a network, such as [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) server misconfigurations, [ARP spoofing attacks](https://en.wikipedia.org/wiki/ARP_spoofing), and unsecured or weakly-secured Wi-Fi networks.