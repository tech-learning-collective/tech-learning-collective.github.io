---
title: "Radical Infrastructure: Self-hosting Contacts and Calendars"
image: static/images/workshop.radical-infrastructures.self-hosting-contacts-and-calendars.square.png
categories:
    - System Administration
    - Community Infrastructure
persona_matrix:
    - 2
    - 3
---

No matter what advocacy issue you focus on, every effective organizer and organization needs to know who they&rsquo;re working with and what&rsquo;s happening when. Even apolitical organizations need an address book to remember email addresses or phone numbers and a calendar to plan their time and coordinate meetings or events with others. So it&rsquo;s no surprise that most successful organizations maintain and manage at least some digital contact information and calendaring data.

Given its priority importance, however, who&rsquo;s doing what when and where is also some of the most sensitive information that activist groups collect and maintain. This type of information&mdash;Yahoo! users&rsquo; buddy lists, GMail contacts, and Facebook event RSVPs&mdash;was and still is among the most aggressively [targeted for dragnet collection by government spy agencies like the NSA](https://www.washingtonpost.com/world/national-security/nsa-collects-millions-of-e-mail-address-books-globally/2013/10/14/8e58b5be-34f9-11e3-80c6-7e6dd8d22d8f_story.html). No wonder using pseudonyms, nicknames, or code names is common practice as a low-tech method of obscuring at least some of this information from adversaries who might be, and probably are, eavesdropping right now!

Rather than resigning in preemptive defeat and abandoning all the benefits that digitally-enhanced coordination can offer us, we can learn to protect our address books and calendars from snoops and spies. In the process, we&rsquo;ll also become increasingly nimble and efficient as our ability to utilize these basic Information Technology techniques in turn enhances our ability to coordinate amongst ourselves and amongst allied organizations. &ldquo;Data entry,&rdquo; event promotions, and other tedious, time-sucking work can be delegated to our machines, without immediately trading away our privacy and our comrade&rsquo;s information for the privilege.

To learn how this is possible, we&rsquo;ll take a deep-dive into self-hosted contacts and calendaring applications. You'll learn about data interchange formats such as [vCards](https://en.wikipedia.org/wiki/VCard) and [`.ics` files](https://en.wikipedia.org/wiki/ICalendar), along with networking standards such as the [CardDAV](https://en.wikipedia.org/wiki/CardDAV) and [CalDAV](https://en.wikipedia.org/wiki/CalDAV) protocols, which are all freely available and widely deployed in businesses and governments today. In fact, these are the very same formats and standards that tools like Google Calendar are built on. Instead of corporate services, of course, we'll use [Free Software](https://www.gnu.org/philosophy/free-sw.html) applications running on [our own physical servers]({% link _workshops/Radical Infrastructure: Your First Physical Server.md %}) to demonstrate the advantages that self-hosted services and owning your own data have to offer.
