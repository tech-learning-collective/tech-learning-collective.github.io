---
title: Free, Foundational Self-Paced Computer Practice Labs
columns: 1
---

Tech Learning Collective provides some free, self-paced practice labs that you can use to jump-start your learing before you even join us at one of [our events]({% link events/index.md %}).

These labs are provided free of charge and are designed to introduce you to the most important foundations of our material. They also serve as a bite-sized sampling to show you what our longer in-person and online webinar workshops are like.

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
        >Start Scenario</a>
    </li>
{% endfor %}
</ol>

{% endfor %}
