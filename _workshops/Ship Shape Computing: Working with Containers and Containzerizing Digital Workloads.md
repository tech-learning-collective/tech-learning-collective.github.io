---
title: "Ship Shape Computing: Working with Containers and Containerizing Digital Workloads"
image: static/images/workshop.ship-shape-computing-working-with-containers-and-containerizing-digital-workloads.square.jpg
simple_description: Complex programs like many modern Web apps work by making use of multiple helper programs, often called microservices. To make sure all the programs work together without overwhelming the computer or computing cluster they're running on, microservices are packaged inside specialized digital spaces called containers, which lets a system operator run and, importantly, constrain each microservice individually. This workshop shows you how containers are built, how they're moved around from system to system, and how they're ultimately connected to one another in centrally orchestrated containerized fleets.
---

In the earliest days of computing, an application would be responsible for processing only very small amounts of input. It would then produce a similarly small amount of output, working as fast and efficiently as possible. Known as a processing &ldquo;pipeline,&rdquo; this early solutions paradigm is most famously expressed as the so-called &ldquo;[UNIX philosophy](https://en.wikipedia.org/wiki/Unix_philosophy),&rdquo; a programmer&rsquo;s adage that states each program should &ldquo;do (only) one thing, and do it well,&rdquo; and it&rsquo;s still the beating heart of powerful computer interfaces such as [command line use]({% link _workshops/Computer Language Foundations: Command Line Basics.md %}) to this day.

Then, all throughout the 1980&rsquo;s, 90&rsquo;s, and 2000&rsquo;s, as computing speed relentlessly increased while its cost simultaneously plummeted, companies began building larger, more complex applications. Known as &ldquo;monoliths,&rdquo; this generation of apps were well-suited for their environment, where they were deployed onto singular mainframe-like computers housed inside private server rooms. But these application architectures are no longer sensible in a world where cloud computing and [virtualization technologies]({% link _workshops/The Imitation Game: Introduction to Administering Virtual Machine Systems.md %}) make it possible to dynamically reserve compute power as user demand ebbs and flows. Why over-purchase server hardware when you can spin up another virtual machine to handle a spike in traffic, then automatically have that machine shut itself down when incoming requests settle back at manageable levels?

That&rsquo;s one reason why, today, online apps from Google, Facebook, and others are written as &ldquo;microservices.&rdquo; Far from being worthy of the buzzword-driven hype, this paradigm is actually a return to software&rsquo;s original designs where the goals of a larger application are processed independently by a set of cooperating but independent smaller programs, each one performing only one job very well. To make this work in today&rsquo;s cloud environments, each microservice must be &ldquo;containerized,&rdquo; packaged into a single [Operating System process]({% link _workshops/Taming Daemons: System Administration and Operation Basics.md %}) that is run by a container management engine such as [Docker](https://www.docker.com/), [CoreOS&rsquo;s rkt](https://coreos.com/rkt/) (pronounced &ldquo;rocket&rdquo;), or [LXD](https://linuxcontainers.org/lxd/introduction/) in preparation for being orchestrated across a fleet of hundreds or thousands of (often virtual) compute instances.

In this hands-on workshop, you&rsquo;ll learn how to make use of the thousands of ready-made containers available at container registries such as the [Docker Hub](https://hub.docker.com/), create new containers from scratch, containerize existing codebases, manage running containers, and more. We&rsquo;ll explore how to troubleshoot container failures, show how to network multiple containers together, and touch on container orchestration tools like [Docker&rsquo;s Swarm mode](https://docs.docker.com/engine/swarm/), [HashiCorp Nomad](https://www.nomadproject.io/), [Apache Mesos](https://mesos.apache.org/)/[Marathon](https://mesosphere.github.io/marathon/), and [Kubernetes](https://kubernetes.io/) to see how our containers can be automatically distributed, or &ldquo;scheduled,&rdquo; and be tasked with their specialized workloads across a [virtual private cloud]({% link _workshops/Automate All the Things: Infrastructure as Code Primer.md %}) based on whatever resources we have available to us.