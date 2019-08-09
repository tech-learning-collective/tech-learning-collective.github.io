---
title: About our Persona-based Training Matrix
columns: 1
---

In the description of some of our [workshops]({% link workshops/index.md %}), we provide a &ldquo;persona matrix&rdquo; in order to help you assess whether the topic of the workshop is relevant to your particular situation. [The persona-based training matrix is a teaching tool created by the Anarcho-Tech NYC Collective](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix#the-matrix) and consists of a three-by-three (3&times;3) grid. Each cell of the grid represents a level of risk that you might be facing.

When a Tech Learning Collective workshop has a persona matrix associated with it, the red cells indicate levels of risk that the workshop material is designed to address. On our site, the persona matrix looks something like this:

{% assign matrix = "" | split: "" %}
{% assign matrix = matrix | push: 1 %}
{% assign matrix = matrix | push: 1 %}
{:style="float: none; width: 100px;"}
{% include persona-matrix.html matrix=matrix %}

At each level of risk, certain digital security and privacy tools or techniques are relevant, while others are (probably) overkill. As the level of risk rises (i.e., as the cells change from black to red), a defender will need to employ an increasing number and strength of digital defenses in order to protect themselves. Importantly, note that unlike physical measures of attacks, these digital defenses are *cumulative*, meaning that someone at great risk must employ defenses sufficient to protect them from that increased risk *and also* should still probably make use of defensive techniques designed to protect against simpler or weaker attacks.

In this model, risk levels are evaluated based on a coarse grouping of who you are and who you are defending yourself from. Each row of the grid represents a coarse grouping of defender profiles, with people at the least risk in the top or first row and people at the most risk in the bottom or last row. Meanwhile, each column represents a similarly coarse grouping of adversaries who pose a risk to you. The weakest or least-resourced attackers are represented by the first or left-most column, while the most powerful adversaries are represented by the last or right-most column.

In general, once you identify in which defender group (row) you belong and which level of adversarial power you are threatened by (column), you should concern yourself with the cell at which those concerns intersect as well as all the cells above and to the left of that one.

## The Persona Matrix in depth

The first step in using the Persona Matrix is to identify where you fit in. You do this by choosing one of the three rows, which represents what kind of information (assets) you are protecting. Which defender profile fits you best? The Anarcho-Tech NYC Collective calls the three groups of [defender personas](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix#defenders):

1. [Individuals](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix#individuals) (top row)
1. [Organizers and Journalists](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix#organizers-and-journalists) (middle row)
1. [Targeted Activists](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix#targeted-activists) (bottom row)

Most people will fall under the &ldquo;Individuals&rdquo; group. The people in this group only need to pay attention to the top row because this row relates to the sorts of cybersecurity &ldquo;street smarts&rdquo; everyone needs to know when using their computer. For example, techniques in this row include keeping your home address off of Twitter, using adblocking extensions in your Web browser, and so on.

If you are responsible for handling other people&rsquo;s digital information, like if you run an e-commerce business where customers are giving you their home address to ship products to, then you probably fall under the &ldquo;Organizers and Journalists&rdquo; group. As another example, say you run a community organization such as a small non-profit and you keep a mailing list of interested subscribers. In this case, you could match yourself to the &ldquo;Organizers and Journalists&rdquo; defender persona because you collect other people&rsquo;s personal information (their email addresses and names). People in this group should learn about the privacy tools and techniques introduced in the first row *and* should also learn about and use an additional set of tools and techniques specific to their defender group.

A smaller number of people face specific legal, social, or political realities that place them in an even higher risk category. Maybe they are undocumented immigrants and must keep very specific details about their lives private, or risk deportation. Perhaps they live in a highly repressive social climate and are at risk from violent homophobic or transphobic vigilantes. They might belong to a religious or ethnic minority in their region. Or perhaps they are a high-profile activist on a government watchlist. These people will fall under the final category of &ldquo;Targeted Activists.&rdquo;

Once you have found your row in the grid, your next step is to identify which level of adversarial power you are realistically threatened by. Try not to let fear get the better of you here. For example, while it is certainly true that many governments monitor your Web browsing history, *most* United States citizens are not immediately at risk of being raided by a SWAT team&mdash;at least, not as of this writing. Use your past experiences as a guide. If you have an abusive ex-partner, you are probably at a slightly higher level of risk than someone who does not. Further, if that abusive ex-partner is a police officer, it might be wise to take even more precautions because cops have access to resources that many others do not.

The most powerful adversary in this model is called &ldquo;The State&rdquo; and is represented by the right-most column in the matrix. For example, if you or your organization is highly political, you are more likely to be actively surveilled by a government. However, remember to scope yourself only to the cells in the row of your defender persona and above. If you are an &ldquo;Individual&rdquo; (as opposed to a &rdquo;Targeted Activist&ldquo;) concerned about government surveillance, you need concern yourself with the top-right-most cell, not the bottom-right-most cell.

For more information, refer to the [Anarcho-Tech NYC Collective&rsquo;s Persona-based training matrix wiki page](https://github.com/AnarchoTechNYC/meta/wiki/Persona-based-training-matrix).

## TLC workshop materials and the Persona Matrix

As a politically oriented education initiative, some of the Tech Learning Collective&rsquo;s workshop materials are designed for activists and advocacy groups that are at a higher risk of cyberattacks than others. Moreover, our security-first approach to technology education means that even our &ldquo;beginner&rdquo; workshops often contain some security content. When a cell in the persona matrix is red, it means that the workshop contains materials that are relevant for the indicated risk level, *not* that the workshop is intended *only* for that risk level.

For example, the persona matrix for our [Gone Phishing]({% link _workshops/Gone Phishing: How to Recognize Fake Websites and Other Online Scams.md %}) workshop is all red:

{% assign matrix = "" | split: "" %}
{% assign matrix = matrix | push: 3 %}
{% assign matrix = matrix | push: 3 %}
{:style="float: none; width: 100px;"}
{% include persona-matrix.html matrix=matrix %}

This is because personally-targeted phishing campaigns (known as &ldquo;spearphishing&rdquo; in cybersecurity jargon) are often [used by governments to hack into activist&rsquo;s personal devices](https://citizenlab.org/2016/08/million-dollar-dissident-iphone-zero-day-nso-group-uae/). However, phishing is *also* a technique frequently used by petty theives to rob people whose only missteps are having a bank account and not being wary of, or not able to identify, fraudulent emails. Since the persona matrix for this workshop is all-red, it means that *everyone*, regardless of their risk level, can benefit from the material presented in this workshop. Put another way, it means that the workshop covers both introductory material and also touches on more sophisticated material.

As more cells in our persona matrix turn red, people in more varied situations will find the workshop materials relevant to them. This is because individuals at higher risk will still benefit and should still consider attending workshops that deal with less specialized situations.
