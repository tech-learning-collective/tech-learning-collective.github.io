---
title: "Two Places at Once: Understanding Virtual Private Networks"
image: static/images/workshop.two-places-at-once-understanding-virtual-private-networks.square.jpg
persona_matrix:
  - 2
  - 3
simple_description: Find out how Virtual Private Networks (VPNs) can help you evade Internet censorship, protect your network traffic, and offer easier access to remote services on firewalled internal networks. You'll learn how to set up and use OpenVPN, a free and widely-deployed VPN solution, so that you can connect securely to your home, office, or other provider's networks no matter where you are and no matter who's watching you. Using a VPN can also make it appear that you are accessing the Internet from a location other than where you are, which means it's simple to access some files or services that would otherwise be blocked where you live.
categories:
    - Networking
    - Security
    - System Administration
---

How often have you wished you could be in two places at once? That&rsquo;s exactly what Virtual Private Networking (VPN) technology was designed to allow computers to do. First popularized in 1996 by Microsoft&rsquo;s [Point-to-Point Tunneling Protocol (PPTP)](https://en.wikipedia.org/wiki/Point-to-Point_Tunneling_Protocol), using VPN technology made it possible for two disconnected networks to be knit back together into one as long as each of them were connected to a third middle network, even if that middle network was hostile or untrusted. Today, that middle network is usually the Internet, which can certainly be hostile and untrusted! With a VPN, it&rsquo;s possible to be &ldquo;here&rdquo; (on your actual network) and &ldquo;there&rdquo; (on the other side of the VPN connection) at the same time; by signing into a VPN service, you create a &ldquo;VPN tunnel&rdquo; that acts like a wormhole in space-time in that whatever you send into the tunnel emerges on the other side as though the two sides of the tunnel are next to each other.

Throughout the late 1990&rsquo;s and 2000&rsquo;s, VPN technology saw a surge in use among businesses looking for ways to enable remote workers. Using VPNs made it simpler for a colleague to travel because they could still be &ldquo;directly connected&rdquo; to their office network. By 2001, the [OpenVPN](https://openvpn.org/) project made this amazing technology free and open source for GNU/Linux systems, with cross-platform implementations for Mac OS X and Windows arriving shortly thereafter. Today, OpenVPN servers form the bedrock of many modern free and commercial VPN solutions, and are still the most widely deployed VPN solution for most use cases.

In this workshop, you&rsquo;ll get to see what happens when network packets are sent into VPN tunnels and how they appear on the other side in order to learn exactly how VPNs encapsulate&mdash;and secure&mdash;your computer&rsquo;s communication with Web sites, office servers, or other services. You&rsquo;ll see what it takes to set up your own OpenVPN server (not much!), as well as how to troubleshoot connection issues. You&rsquo;ll also get introduced to several newer but less mature VPN protocols such as [Wireguard](https://www.wireguard.com/), and learn about Layer 2 and Layer 3 VPN solutions such as [IPsec](https://en.wikipedia.org/wiki/IPsec) and its related tunneling ([L2TP](https://en.wikipedia.org/wiki/Layer_2_Tunneling_Protocol)) and security ([ESP](https://en.wikipedia.org/wiki/IPsec#Encapsulating_Security_Payload), [IKE](https://en.wikipedia.org/wiki/Internet_Key_Exchange), etcetera) protocols.
