---
title: "Guardians of the Watchtowers: Introduction to Service Monitoring and Observability"
startDate: &startDate 2022-05-22 13:30:00 -0400
endDate: 2022-05-22 15:00:00 -0400
date: *startDate
location: Remote
payment_processor: paypal
webinar_id: 301
image: static/images/workshop.guardians-of-the-watchtowers-introduction-to-service-monitoring-and-observability.rectangle.jpg
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
    - https://gobrunch.com/events/261428/387049
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: Knowing what's happening on the computers you're responsible for is a critical part of knowing how to care for and maintain any IT infrastructure. Learn how to automatically monitor and alert on operational issues such as resource exhaustion before they take down your servers and applications. In this workshop, you'll learn about the "four golden signals" of observability, you'll be introduced to time series databases and metrics collection with Prometheus, and you'll learn how to create beautiful charts and graphs from that data with Grafana. Together, these free, industry-standard tools comprise the foundation of all modern and cloud-native IT monitoring stacks.
---

{{ page.teaser }}

## Workshop Description

> Every computer program needs certain resources to operate well, like memory and disk space and CPU cycles. This is true both for simple programs on your laptop and also for complex, cloud-native systems like those that run in massive compute clusters in public cloud or on-premises datacenters. On a single computer, tools like the [Activity Monitor](https://support.apple.com/guide/activity-monitor/welcome/mac) on macOS or the [Task Manager](https://www.howtogeek.com/405806/windows-task-manager-the-complete-guide/) on Windows can report which applications are taking up what amount of specific resources on your computer in near real-time, helping you keep watch over your digital domain. When you need to monitor whole fleets of servers, though, you need tools that can scrape or collect the same information from those servers over a network.
>
> In decades past, IT teams were often limited to static data sets to perform tasks like asset tracking. As applications grew more complex, performance and reliability metrics became increasingly important, so instrumentation, profiling, and visualization tools like [dedicated health and readiness checks](https://kubernetes.io/docs/reference/using-api/health-checks/) and [flame charts](https://developer.mozilla.org/docs/Tools/Performance/Flame_Chart) were developed to help engineers figure out how to both optimize the code they wrote and how to integrate it with other systems more seamlessly. Today, specialized frameworks and burgeoning standards like [OpenTelemetry](https://opentelemetry.io/) are designed to give system operators more visibility into both the current and historical usage trends and patterns of the resources their services need to run well. Equipped with this information, they can make better capacity planning decisions for the future or even help identify anomalous events like security breaches, bugs in code, and other subtle issues that might be hard or impossible to track down otherwise.
>
> In this workshop, you'll be introduced to the concepts and practices of observability for infrastructure at any level of scale. You'll learn about the "four golden signals"—latency, traffic, errors, and saturation—and why they matter. Like the four Quarters that are called to cast a magical circle, each golden signal has a particular focus and almost elemental meaning. You'll learn how to install and configure [Prometheus](https://prometheus.io/), the open, industry-standard metrics collection solution on which many commercial offerings are based, along with its accompanying components like [Alertmanager](https://www.prometheus.io/docs/alerting/latest/alertmanager/), metric [exporters](https://prometheus.io/docs/instrumenting/exporters/), and supplemental software like [Grafana](https://grafana.com/) that can query Prometheus's time series database to reveal trends, patterns, or anomalies in your systems' stability over time. Finally, to make sense of all this data, you'll get an introduction to [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/), the purpose-built Prometheus Query Language used for everything from triggering alerts to making custom queries so you'll always be able to know exactly what's going on in your infrastructure when you need to.

{% include boilerplate-webinar.md %}

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
