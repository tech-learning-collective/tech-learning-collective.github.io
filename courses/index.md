---
title: Course Catalog
backgroundColor: rgba(189, 14, 96, 1)
darkBackgroundColor: rgba(102, 7, 51, 1)
---

{% include announce-course-pause.html %}

Tech Learning Collective courses cover the following subjects. Choose a subject to view the available courses for that subject. You can apply to enroll in more than one course at a time.

{% include get-subjects.liquid %}
<ul id="subjects-list">
{% for subject in subjects %}
    <li><a href="{{ "/courses/" | append: subject | append: "/" | relative_url }}" title="View {{ site.subject_map[subject] }} courses."><span>{{ subject | upcase }}</span><span>{{ site.subject_map[subject] }}</span></a></li>
{% endfor %}
</ul>

To help ensure you have the best possible learning experience, we suggest you consider working through at least some of our [free and self-paced Foundations courses]({% link foundations/index.md %}) before the start of your first class. These additional, free online courses offer the best foundation on which to build your skills regardless of which subject matter you are most interested in. While we feel that the [Tech Learning Collective Foundations courses]({% link foundations/index.md %}) are very helpful, you can still apply to any of the other courses listed here without completing our Foundations course series.

Courses are offered far less frequently than [workshops]({% link workshops/index.md %}) and other [public events]({% link events/calendar/index.md %}).
