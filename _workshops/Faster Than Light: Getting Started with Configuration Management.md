---
title: "Faster Than Light: Getting Started with Configuration Management"
image: static/images/workshop.faster-than-light-getting-started-with-configuration-management.square.jpg
simple_description: Strengthen your automation or scripting skills by learning how to use tools designed for helping huge organizations manage massive fleets of servers. Before your infrastructure starts to grow or your project gets particularly complex, you should learn about Configuration Management best practices so that you can more easily stay on top of how your computers are set up and how you're changing them over time. This workshop will introduce you to free tools meant to help you and your coworkers, teammates, or collaborators perform complex management tasks across hundreds of computers without having to log in to each of them one at a time.
---

Today, all but the most trivial of computer systems rely on an interdependent set of servers working in concert. You don&rsquo;t just have one server, you have a group of them. Commonly called a *cluster*, these servers need to be managed as a group, ensuring that their software configurations, security patches, and installed packages are deployed, maintained, and eventually updated or retired in a predictable way.

In this deep dive workshop, we&rsquo;ll set up our own small cluster and use [Ansible](https://ansible.com/), which is an agentless, cross-platform, enterprise-grade, free software [Configuration Management (CM)](https://en.wikipedia.org/wiki/Configuration_management) and [Infrastructure as Code (IaC)]({% link _workshops/Automate All the Things: Infrastructure as Code Primer.md %}) framework used by giant corporations like IBM and Cisco, to turn old-school operator runbooks into computerized playbooks that can be executed quickly and easily even by novice operators. Through several hands-on exercises, you&rsquo;ll learn about the entire CM lifecycle from planning through auditing so that you understand critical CM concepts like idempotence, change control, and more, which are common to all CM systems including [Chef](https://www.chef.io/configuration-management/), [Puppet](https://puppet.com/use-cases/configuration-management/), and [Salt](https://docs.saltstack.com/en/latest/topics/states/).

Along the way, you&rsquo;ll be exposed to key concepts such as [containerization]({% link _workshops/Ship Shape Computing: Working with Containers and Containzerizing Digital Workloads.md %}) through Ansible&rsquo;s support for automating container builds, [Role-Based Access Control (RBAC)](/con) via Ansible&rsquo;s AWX Project, and more. By adopting configuration management workflows with tools like Ansible, you can reduce operator errors, and beat back configuration drift on any long-lived infrastructure components.