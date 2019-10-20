---
title: Pricing
backgroundColor: rgba(161, 1, 1, 1)
---

Tech Learning Collective offers unparalleled and affordable technology education for both [individuals](#individuals) and [groups](#groups) in several different formats such as one-off [workshops]({% link workshops/index.md %}) and intensive [courses]({% link courses/index.html %}).

Courses for individuals are offered only to selected pre-enrolled applicants; read more about [course enrollment]({% link enrollment/index.md %}) to learn about our application and selection process. Courses for groups are negotiated on a case-by-case basis. Please [contact us]({% link contact/index.md %}) if you would like to enroll your staff members in a group course.

Ticketed workshops are priced on a per-workshop basis. We usually offer a hefty discount for queer-identified and femme students. Please see our [events]({% link events/index.md %}) page for more details on upcoming workshops and to subscribe to our events calendar.

Tech Learning Collective instructors can be booked for unticketed events for a nominal [booking fee](#booking-fees). We are also available to speak at conferences, trade shows, and other educational events for reasonable fees. If you&rsquo;d like to schedule some time with us, [get in touch]({% link contact/index.md %}) and we&rsquo;ll write you back as soon as possible.

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

### Booking fees

The Tech Learning Collective prefers that all events for which we supply trainers are ticketed. We can provide a complete ticketing and sales solution to manage the entire event lifecycle from publication to sales reporting for you. For ticketed events, we do not charge a booking fee. Instead, Tech Learning Collective collects a percentage of the net ticket sales to pay its trainers and continue to fund community projects.

For events that are not ticketed, the Tech Learning Collective charges the organization or venue that is booking a workshop a booking fee and an hourly rate per trainer based on the maximum number of participants for the workshop. Our standard booking fee is $60 USD. Hourly rates break down as shown in the following table:

<table class="dotleader price">
    <thead>
        <tr>
            <th>Event Capacity</th>
            <th>Hourly Rate</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span>10</span></td>
            <td><span>125</span></td>
        </tr>
        <tr>
            <td><span>20</span></td>
            <td><span>200</span></td>
        </tr>
        <tr>
            <td><span>50</span></td>
            <td><span>400</span></td>
        </tr>
        <tr class="no-currency">
            <td><span>More than 50</span></td>
            <td><span>Negotiated per-event</span></td>
        </tr>
    </tbody>
</table>
