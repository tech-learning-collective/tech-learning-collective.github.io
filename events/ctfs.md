---
title: CTF Events
columns: 1
---

Tech Learning Collective&rsquo;s cybersecurity students are welcome to join any of our &ldquo;Capture the Flag&rdquo; (CTF) teams. Below is a listing of future CTF events our students may be interested in. See [CTFTime.org](https://ctftime.org/event/list/upcoming) for additional details. ([What is a CTF?](#what-is-a-ctf))

<ol style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 2em;">
{% ical url: https://www.google.com/calendar/ical/ctftime%40gmail.com/public/basic.ics only_future: true %}
<li id="ctf-event-{{ event.summary | slugify }}">
    {% capture img %}{{ "static/images/capture-the-flag.gif" | absolute_url }}{% endcapture %}
    {% include h-event.html event=event excerpt=true image=img %}
</li>
{% endical %}
</ol>

# CTF FAQ

1. [What is a CTF?](#what-is-a-ctf)
1. [How do I join Tech Learning Collective&rsquo;s CTF team?](#how-do-i-join-tech-learning-collectives-ctf-team)
1. [Why does Tech Learning Collective field CTF teams?](#why-does-tech-learning-collective-field-ctf-teams)
1. [I am not part of Tech Learning Collective&rsquo;s community. Where else can I get involved in a CTF team?](#i-am-not-part-of-tech-learning-collectives-community-where-else-can-i-get-involved-in-a-ctf-team)

## What is a CTF?

[**Capture The Flag competitions (CTFs)**](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) are sets of puzzles intended to distill the essence of many aspects of professional computer security work into a single short-lived exercise that is objectively measurable. Most competitions are free to participate in, and some even award prizes to winners. They are often associated with a conference or event, so are open only at certain times, run for a short while, then close and rank the participants according to the competition&rsquo;s scoring rules.

## How do I join Tech Learning Collective&rsquo;s CTF team?

Our CTF teams are open only to current and former students, with very few exceptions. This means you must have completed or already be enrolled in one or more of our [courses]({% link courses/index.html %}). The other way to participate is to have already completed an equivalent curriculum by attending our [workshops](% link workshops/index.md %), submitted an External Collaborator TLC CTF Team Join Request form ([contact us]({% link contact/index.md %}) for details), and provide no less than three character references from Tech Learning Collective alumni willing to vouch for you.

## Why does Tech Learning Collective field CTF teams?

Tech Learning Collective fields our own CTF team(s) primarily to support Tech Learning Collective students and augment their studies. Instructors frequently coach students during competitions. While scoring points is great fun, the primary purpose of our teams is to supplement student studies.

This means our teams function more like friendly but invite-only cybersecurity study groups. Alumni teams are often more focused on the competitive aspect, and will occasionally play against one another, particularly during attack/defense CTFs. Formally participating in CTFs also makes it possible for Tech Learning Collective&rsquo;s students to take fuller advantage of the many existing educational opportunities in a more realistic environment than an isolated lab exercise.

Capture the Flag competitions provide our students legal and safe opportunities to hone their offensive hacking skills and solidify their understanding of course materials in live, real-world environments. This approach melds very well with our practical security-first pedagogy. Beyond all that, it&rsquo;s also yet another way that Tech Learning Collective makes learning cybersecurity social and fun.

## I am not part of Tech Learning Collective&rsquo;s community. Where else can I get involved in a CTF team?

Since most CTF competitions are free of charge and can be played without a team, we encourage interested students to explore CTF gaming regardless of their enrollment status with us. Additionally, there are many other organizations that field their own teams, or offer more open enrollment policies than we do. Teams such as [OpenToAll](https://opentoallctf.github.io/) offer other opportunities with different perspectives that you may also find enjoyable, and you can often catch our friends from the [Anarcho-Tech NYC CTF Team](https://github.com/AnarchoTechNYC/meta/wiki/CTF-team) hacking away in [our community channels]({% link contact/index.md %}#alumni-and-community).
