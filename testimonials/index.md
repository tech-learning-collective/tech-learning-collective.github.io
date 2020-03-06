---
title: Testimonials
---

Some nice things former students and friends have said about the Tech Learning Collective. If you&rsquo;ve participated in a TLC course or workshop and have feedback of any sort, please [send it in to us]({% link contact/index.md %}). We appreciate hearing about your experience and are especially grateful to everyone who's provided a testimonial below.

{% assign testimonials = site.reviews | sort: "datePublished" %}
{% for testimonial in testimonials reversed %}
    {% include h-review.html review=testimonial %}
{% endfor %}
