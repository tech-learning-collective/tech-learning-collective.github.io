---
title: "Where the Sky Meets the Sea: Understanding Container Orchestration with Kubernetes"
startDate: &startDate 2021-08-07 13:30:00 -0400
endDate: 2021-08-07 15:00:00 -0400
date: *startDate
location: Remote
payment_processor: paypal
webinar_id: 228
image: static/images/workshop.where-the-sky-meets-the-sea-understanding-container-orchestration-with-kubernetes.rectangle.jpg
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
    - https://gobrunch.com/events/212716/319939
maximumAttendeeCapacity: 15
organizers:
    - Tech Learning Collective
performers:
    - Tech Learning Collective
teaser: Learn to pilot Kubernetes and find out how it helps you get the most value out of your hardware. Kubernetes is the free, enterprise-grade, cloud-native solution for automated deployment, scaling, and management of containerized applications. This workshop offers an introduction to container orchestration concepts and practices by showing you how to work effectively with `kubectl`, utilize Labels and Selectors, explore various components of the Kubernetes control plane, and more. You'll get your own Kubernetes cluster where you can deploy apps, learn how to influence scheduling decisions, and monitor the health of clustered workloads.
---

{{ page.teaser }}

## Workshop Description

> As anyone who has ever moved house knows, the more effectively you can pack, the easier your move will be. It's a big task, often requiring thousands of tiny decisions to make sure delicate items are wrapped appropriately, all one's stuff fits neatly into all the available boxes, and so on. Once the boxes are all packed, loading them onto a moving vehicle requires that you distribute their weight more or less evenly so that there are no unpleasant surprises during the move. This is more or less what container orchestration tools are for, except instead of moving physical bins, we have to ship software inside containers. Each container requires resources, like CPU time and memory space, which means we'll need to play a sort of Tetris game to make sure all our containers fit in the most dense, yet most balanced, arrangement to keep our hardware costs as low as possible.
>
> [Kubernetes](https://kubernetes.io/) is the free and open source industry standard container orchestration platform that provides both system administrators and application developers with a set of tools for cooperatively building, deploying, and maintaining applications at all levels of scale. Its job is to help you get the most out of your hardware by "packing" all your containers (installed server software) into the fewest possible "bins" (physical or virtual machines), and then automatically monitoring, restarting, adding, removing, or shuffling those containers from one machine to another as demand for the services running on your cluster change. Your job is to tell Kubernetes what your ideal deployment situation is, and what to prioritize when resources get scarce.
>
> In this intermediate-level workshop, we'll build on our knowledge of Linux [containers]({% link _workshops/Ship Shape Computing: Working with Containers and Containzerizing Digital Workloads.md %}) and fundamental system administration tasks to explore a Kubernetes cluster. You'll learn how to inspect workloads using the [`kubectl`](https://kubernetes.io/docs/reference/kubectl/overview/) command line utility, a graphical Web-based dashboard, and the Kubernetes API itself. By exploring the [Kubernetes control plane](https://kubernetes.io/docs/concepts/overview/components/), you'll get insight into how Kubernetes makes scheduling decisions and, along with using [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/), you'll learn how to influence those scheduling decisions by [tainting](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/) certain resources in specific ways. Finally, you'll see how Kubernetes provides a set of "cloud-native" services and APIs that developers can use to write apps that spawn more replicas of themselves when needed and perform other forms of automated or self-healing tasks, making the system administrator's job that much easier.

{% include boilerplate-webinar.md %}

As with all Tech Learning Collective events, racism, queerphobia, transphobia, sexism, &ldquo;brogrammer,&rdquo; &ldquo;manarchist,&rdquo; or any kind of similarly awful behavior *will* result in immediate removal from class without a refund. Please refer to [our lightweight social rules](https://github.com/AnarchoTechNYC/meta/wiki/Social-rules) for details on our strictly enforced no-tolerance policy against bigotry of any kind.

{% include boilerplate-press.md %}
