---
title: Pricing
backgroundColor: rgba(161, 1, 1, 1)
---

Tech Learning Collective offers unparalleled and affordable technology education for both [individuals](#individuals) and [groups](#groups) in several different formats. These include one-off [workshops]({% link workshops/index.md %}) and intensive [courses]({% link courses/index.html %}). Workshop tickets are priced on a per-workshop basis, and usually include a hefty discount for queer-identified and femme students; please see our [events]({% link events/index.md %}) page for details on upcoming workshops. The rest of this page describes tuition for individual and group course enrollment.

### Individuals

All courses are offered on a sliding scale basis. Most courses range from $200.00 to $350.00 (USD) per course. Most courses consist of four weekly sessions ranging from three to four hours each, which breaks down to ~$10 to ~$20 per hour of classtime, and are usually held on weekends or in the late afternoon and early evenings. After your pre-enrollment application has been approved, please confirm the details for the course you&rsquo;re enrolling in, as we do not offer refunds or discounts beyond sliding scale tuition.

Your exact cost for a course is evaluated during your application process and is based *solely* on your financial means. Your outstanding balance for course enrollment, along with payment information, will be sent to you at the time you enroll in your chosen course. We expect to receive the entirety of your course tuition in full before the start of your first class.

The Tech Learning Collective charges an application fee of ${{ site.payments.prices.application_fee }} USD per course. This fee is the same for all courses and rolls into tuition. For example, if your sliding scale cost is evaluated to be ${{ site.payments.prices.application_fee }}, your outstanding balance for the course will be zero after you have paid your application fee. If your sliding scale cost is evaluated to be $100.00, your outstanding balance will be $75.00.

We do *not* offer any refunds.

### Groups

Volunteers and employees working within and for organizations can attend Tech Learning Collective courses as part of group or corporate training for a slightly reduced tuition. We typically offer a 10% reduction in tuition for group course enrollments for batches of 15 or more students. Group tuition fees are not eligible for individual sliding scale adjustments.

Please have your volunteer coordinator or Human Resources department [contact us]({% link contact/index.md %}) directly to discuss training details for your organization.

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
