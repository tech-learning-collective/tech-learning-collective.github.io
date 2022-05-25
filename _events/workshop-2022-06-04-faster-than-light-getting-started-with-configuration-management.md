---
title: "Faster Than Light: Getting Started with Configuration Management"
startDate: &startDate 2022-06-04 13:30:00 -0400
endDate: 2022-06-04 15:00:00 -0400
date: *startDate
location: Remote
payment_processor: paypal
webinar_id: 304
image: static/images/workshop.faster-than-light-getting-started-with-configuration-management.rectangle.jpg
offers:
    - name: Privacy Defender Webinar Ticket
      description: Privacy Defender tickets are the recommended ticket type for those who can afford to help fund the digital security and online privacy advocacy communities with their financial resources, are attending the workshop with the support of their employers or other backers, or have other resources available to them. Purchasing tickets at this level makes it possible for us to offer reduced price tickets to those in need.
      price: 70
      priceCurrency: USD
      availabilityEnds: *startDate
    - name: General Admission
      description: General Admission tickets are the regular ticket type intended for members of the general public.
      price: 35
      priceCurrency: USD
      availabilityEnds: *startDate
    - name: Reduced price admission (for queer-identified, femme, and BIPOC people)
      description: Reduced price workshop tickets help offset systemic biases prevalent in society and in the technology sector especially.
      price: 25
      priceCurrency: USD
      availabilityEnds: *startDate
sameAs:
    - https://gobrunch.com/events/269269/396638
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: Learn how to beat back configuration drift on your servers by leveraging automation tools like Ansible in this deep dive workshop demonstrating modern DevOps practices for deploying, maintaining, and auditing compute clusters. Whether for a Web application, big data processing, or other project, you need to turn old-school runbooks into computerized playbooks that can execute Standard Operating Procedures quickly and reliably so you can deploy complex systems simply and predictably. Come learn about key concepts like idempotence and change control, and learn how giant corporations implement security principles like RBAC, all using free and open source software.
---

{{ page.teaser }}

## Workshop Description

> Today, all but the most trivial of computer systems rely on an interdependent set of servers working in concert. You don&rsquo;t just have one server, you have a group of them. Commonly called a *cluster*, these servers need to be managed as a group, ensuring that their software configurations, security patches, and installed packages are deployed, maintained, and eventually updated or retired in a predictable way.
>
> In this deep dive workshop, we&rsquo;ll set up our own small cluster and use [Ansible](https://ansible.com/), which is an agentless, cross-platform, enterprise-grade, free software [Configuration Management (CM)](https://en.wikipedia.org/wiki/Configuration_management) and [Infrastructure as Code (IaC)]({% link _workshops/Automate All the Things: Infrastructure as Code Primer.md %}) framework used by giant corporations like IBM and Cisco, to turn old-school operator runbooks into computerized playbooks that can be executed quickly and easily even by novice operators. Through several hands-on exercises, you&rsquo;ll learn about the entire CM lifecycle from planning through auditing so that you understand critical CM concepts like idempotence, change control, and more, which are common to all CM systems including [Chef](https://www.chef.io/configuration-management/), [Puppet](https://puppet.com/use-cases/configuration-management/), and [Salt](https://docs.saltstack.com/en/latest/topics/states/).
>
> Along the way, you&rsquo;ll be exposed to key concepts such as [containerization]({% link _workshops/Ship Shape Computing: Working with Containers and Containzerizing Digital Workloads.md %}) through Ansible&rsquo;s support for automating container builds, [Role-Based Access Control (RBAC)](/con) via Ansible&rsquo;s AWX Project, and more. By adopting configuration management workflows with tools like Ansible, you can reduce operator errors, and beat back configuration drift on any long-lived infrastructure components.

{% include boilerplate-webinar.md %}

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
