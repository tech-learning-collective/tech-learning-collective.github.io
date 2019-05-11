---
title: Pricing
backgroundColor: "#A10101"
---

Tech Learning Collective offers unparalleled and affordable technology education for both [individuals](#individuals) and [groups](#groups).

### Individuals

All courses are offered on a sliding scale basis. Most courses range from $100.00 to $300.00 (USD) per course. Most courses consist of four weekly sessions ranging from three to four and a half hours each, which breaks down to ~$7 to ~$20 per hour of classtime, and are usually held on weekends or in the late afternoon and early evenings. Please confirm the details for the course you&rsquo;re enrolling in, as we do not offer refunds or discounts beyond sliding scale tuition.

Your exact cost for a course is evaluated during your application process and is based *solely* on your financial means. Your outstanding balance for course enrollment, along with payment information, will be sent to you before the start of your course’s orientation session.

The Tech Learning Collective charges a non-refundable application fee of ${{ site.payments.prices.application_fee }} USD per course. This fee is the same for all courses and rolls into tuition. For example, if your sliding scale cost is evaluated to be ${{ site.payments.prices.application_fee }}, your outstanding balance for the course will be zero after you have paid your application fee. If your sliding scale cost is evaluated to be $100.00, your outstanding balance will be $75.00.

Please note that we do *not* offer refunds.

### Groups

Organizations can attend Tech Learning Collective courses as part of corporate or group training for a slightly reduced tuition. We typically offer a 10% reduction in tuition with group courses for batches of 15 or more students. Group tuition fees are not eligible for individual sliding scale adjustments.

[Contact us]({{ "/contact/" | relative_url }}) directly to discuss training details for your organization.

### Course pricing

The tuition for each course is listed in the table below. Tuition costs shown here include the ${{ site.payments.prices.application_fee}} USD non-refundable application fee.

<table class="dotleader price">
    <thead>
        <tr>
            <th>Course Code</th>
            <th>Tuition (before sliding scale adjustment)</th>
        </tr>
    </thead>
    <tbody>
    {% for course in site.courses %}
        <tr>
            <td>
                <span><a href="{{ course.url }}" title="View {{ course.slug | upcase }} details.">{{ course.slug | upcase }}</a></span>
            </td>
            <td><span>{{ course.tuition }}</span></td>
        </tr>
    {% endfor %}
    </tbody>
</table>
