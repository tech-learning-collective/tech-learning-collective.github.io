---
title: About our Persona-based Training Matrix
columns: 1
---

In the description of some of our [workshops]({% link workshops/index.md %}), we provide a &ldquo;persona matrix&rdquo; in order to help you assess whether the topic of the workshop is relevant to your particular situation. [The persona-based training matrix is a teaching tool](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix#the-matrix) created by the Anarcho-Tech NYC Collective and consists of a three-by-three (3&times;3) grid. On our site, it looks something like this:

{% assign matrix = "" | split: "" %}
{% assign matrix = matrix | push: 1 %}
{% assign matrix = matrix | push: 1 %}
{% include persona-matrix.html matrix=matrix style="float: none; width: 100px;" %}

Each cell of the grid represents a level of risk for which certain digital security and privacy tools or techniques are relevant, with the least risk at the top-left and the most risk at the bottom-right. Risk levels are evaluated based on a coarse grouping of who you are and who you are defending yourself from. Each row of the grid represents a coarse grouping of defender profiles, while each column represents a certain group of adversaries who pose a risk to you.

When a Tech Learning Collective workshop has a persona matrix associated with it, the red cells are levels of risk that the workshop material is designed to address. In the example grid above where the only red cell is the top-left-most cell, the workshop covers introductory material relevant to everyone in their day-to-day use of their digital devices. As more cells turn red, the material becomes specialized to high-risk individuals facing ever more powerful cyber-attackers.

The Anarcho-Tech NYC Collective calls the three groups of defender personas:

1. Individuals (top row)
1. Organizers and Journalists (middle row)
1. Targeted Activists (bottom row)

Most people will fall under the &ldquo;Individuals&rdquo; group. If you are responsible for handling other people&rsquo;s digital information, for example if you run an online e-commerce business where customers are giving you their home address to ship products to, then you probably fall under the &ldquo;Organizers and Journalists&rdquo; group. A much smaller number of people may face incredibly powerful adversaries, such as law enforcement agencies, and they will fall under the final category of &ldquo;Targeted Activists&rdquo;.

As attackers get more powerful, they pose can pose more and more risk to you. The first group of attackers is the least powerful, and is represented by the left-most column. (The Anarcho-Tech NYC Collective calls these attackers &ldquo;Random Assholes.&rdquo;) To defend yourself against this group, you should attend workshops for which some part of the left-most column is colored red.

Likewise, as your responsibilities in cyberspace grows, you must take an increasingly strong security posture in order to safeguard the digital information you and your organization maintains. In this case, you should attand workshops for which some part of the middle or lower rows are colored in red in addition to the left-most column.

For example, if you run a community organization such as a small business or non-profit and you keep a mailing list of interested subscribers, you could classify yourself as belonging to the &ldquo;Organizers and Jouranlists&rdquo; defender persona because you handle other people&rdquo;s information such as their email addresses and names. This persona is represented by the second (middle) row. For people matching this group of defenders, the following persona matrix would indicate that the workshop contains relevant safety information:

{% assign matrix = "" | split: "" %}
{% assign matrix = matrix | push: 2 %}
{% assign matrix = matrix | push: 1 %}
{% include persona-matrix.html matrix=matrix style="float: none; width: 100px;" %}

The most powerful cybersecurity adversary is called &ldquo;The State&rdquo; and is represented by the right-most column. For example, if you or your organization is highly political, it&rsquo;s likely that you are more actively surveilled by a government, so this is one case where you might want to consider attending workshops where the right-most column in the persona matrix is highlighted in red. The following matrix shows an example of a workshop that contains such safety information:

{% assign matrix = "" | split: "" %}
{% assign matrix = matrix | push: 2 %}
{% assign matrix = matrix | push: 3 %}
{% include persona-matrix.html matrix=matrix style="float: none; width: 100px;" %}

In general, once you identify in which defender group (row) you belong and which level of adversarial power you are threatened by (column), you should concern yourself with everything above and to the left of the cell at which those intersect.

For more information, refer to the [Anarcho-Tech NYC Collective&rsquo;s Persona-based training matrix wiki page](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix).
