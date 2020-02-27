---
title: Free, Foundational Self-Paced Computer Practice Labs
columns: 1
---

Tech Learning Collective provides some free, self-paced practice labs that you can use to jump-start your learing before you even join us at one of [our events]({% link events/index.md %}).

These labs are provided free of charge, and are always available, so feel free to take as long as you need to work through them. Our &ldquo;Foundations&rdquo; series of courses are designed to introduce you to the most important foundations of our material. We also offer several bite-sized modules of additional additional material to show you some of what our longer in-person and online webinar workshops are like.

Of course, nothing can compare to learning directly from a teacher whom you can actually see and ask questions of in real time, but we hope that these self-paced learning modules will whet your appetite until your next (or first) class with us!

{% for pathway in site.data.katacoda %}

### {{ pathway[1].title }}

{{ pathway[1].description | markdownify }}

<ol class="katacoda-scenarios">
{% for course in pathway[1].courses %}
    <li>
        <h4>{{ course.title }}</h4>
        {{ course.description | markdownify}}
        <a class="button"
            href="{{ pathway[1].title | slugify | replace: "foundations-", "" }}/{{ course.course_id }}"
        >Start Module</a>
    </li>
{% endfor %}
</ol>

{% endfor %}

## Sample Learning Modules

These sample modules provide a peek at some of what you&rsquo;ll learn in our more in-depth, instructor-led [training workshops]({% link workshops/index.md %}) or [intensive courses]({% link courses/index.html %}).

<ol class="katacoda-scenarios">
    <li>
        <h4>Scaling SSH Authentication with Certificates</h4>
        <p>Creating and using SSH certificates for host authentication.</p>
        <a class="button"
            href="{% link sample/scaling-ssh-authentication-with-certificates.md %}"
        >Start Module</a>
    </li>
</ol>
