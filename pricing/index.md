---
title: Pricing
backgroundColor: rgba(161, 1, 1, 1)
darkBackgroundColor: rgba(91, 0, 0, 1)
---

Tech Learning Collective offers unparalleled and affordable technology education for both [individuals](#individuals) and [groups](#groups) in several different formats such as one-off [workshops]({% link workshops/index.md %}) and intensive [courses]({% link courses/index.md %}).

Courses for individuals are offered only to selected pre-enrolled applicants; read more about [course enrollment]({% link enrollment/index.md %}) to learn about our application and selection process. Courses for groups are negotiated on a case-by-case basis. Please [contact us]({% link contact/index.md %}) if you would like to enroll your staff members in a group course.

Ticketed workshops are priced on a per-workshop basis. We usually offer a hefty discount for queer-identified and femme students. Please see our [events]({% link events/index.md %}) page for more details on upcoming workshops and to subscribe to our events calendar.

Tech Learning Collective instructors can be booked for unticketed events for a nominal [booking fee](#booking-fees). We are also available to speak at conferences, trade shows, and other educational events for reasonable fees. If you&rsquo;d like to schedule some time with us, [get in touch]({% link contact/index.md %}) and we&rsquo;ll write you back as soon as possible.

### Individuals

All courses and workshops are offered on a sliding scale basis. When enrolling in a course intensive, most students pay anywhere from $200.00 to $500.00 (USD) in total as their course tuition. This breaks down to approximately ~$10 to ~$30 per hour of classtime. After your pre-enrollment application has been approved, please confirm the details for the course you&rsquo;re enrolling in, as we do not offer refunds or discounts beyond sliding scale tuition (i.e., financial assistance).

Your total cost for a course is evaluated during your application process and is based *solely* on your financial means. See [§ Financial aid](#financial-aid) for details. Your outstanding balance for course enrollment, along with payment information, will be sent to you at the time you enroll in your chosen course. We expect to receive the entirety of your course tuition in full before the start of your first class.

Tech Learning Collective charges an application fee of ${{ site.payments.prices.application_fee }} USD per course application. This fee is the same for all courses and rolls into tuition. For example, if your sliding scale cost is evaluated to be ${{ site.payments.prices.application_fee }}, your outstanding balance for the course will be zero after you have paid your application fee. If your sliding scale cost is evaluated to be $100.00, your outstanding balance will be $75.00.

We do *not* offer any refunds for any reason across any of our offerings.

### Groups

Volunteers and employees working within and for organizations can attend Tech Learning Collective courses as part of group or corporate training for a slightly reduced tuition. We typically offer a 10% reduction in tuition for group course enrollments for batches of 15 or more students. Group tuition fees are not eligible for individual sliding scale adjustments.

Please have your volunteer coordinator or Human Resources department [contact us]({% link contact/index.md %}) directly to discuss training details for your organization.

### Course pricing

The full tuition for each course is listed in the table below. Tuition costs shown here include the ${{ site.payments.prices.application_fee}} USD application fee but do *not* include sliding scale adjustments made for [financial aid](#financial-aid) recipients.

<table class="dotleader price">
    <thead>
        <tr>
            <th>Course Code</th>
            <th>Tuition (before financial aid adjustments)</th>
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

### Financial aid

Tech Learning Collective offers sliding scale pricing for each and every one of our courses, as well as many (but not all) workshops and special events. Well over half of accepted pre-enrolled students receive a financial aid adjustment as part of their course enrollment acceptance package.

Financial assistance for Tech Learning Collective courses is offered to accepted pre-enrolled students on a case-by-case basis. The determination of whether or not to offer a student financial assistance is made by TLC&rsquo;s Admissions team as part of the enrollment process and is based on the applicant&rsquo;s original pre-enrollment application, records of employment or unemployment history, and other concerns raised by the applicant during their interview. All financial aid decisions are final, but relate solely to the original application. Future pre-enrollment applications are potentially again eligible for financial aid.

Sliding scale adjustments offered by Tech Learning Collective as financial aid to our courses typically reduce a student&rsquo;s tuition cost from anywhere between 25% to 75% and ensures that all Tech Learning Collective courses are dramatically more affordable to those in need than comparable offerings elsewhere.

Financial aid decisions *do not* explicitly consider race, gender, sexual orientation, disability, ethnicity, religion, nationality, or other legally protected classes as part of the determination process. The *only* consideration is the applicant&rsquo;s financial means. However, since one key way colonialist, hetero-patriarchical, capitalist society often manifests itself is by economically disenfranchising people of color, ethnic or religious minorities, women, femmes, gender non-conforming, non-binary, queer, LGBTQIA+ individuals, and other minority groups, the overwhelming majority of Tech Learning Collective financial aid recipients are people of these same legally protected classes.

Tech Learning Collective has found that our determination process ensures a far more intersectional practice than many other programs because it forces us to prioritize the material reality of a given individual&rsquo;s personal situation above their ability to check a box that, in a perfect world, should never have been part of the enrollment equation in the first place.

### Booking fees

Tech Learning Collective prefers that all events for which we supply trainers are ticketed. We can provide a complete ticketing and sales solution to manage the entire event lifecycle from publication to sales reporting for you. For ticketed events, we do not charge a booking fee. Instead, Tech Learning Collective collects a percentage of the net ticket sales to pay its trainers and continue to fund community projects.

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
            <td><span>5</span></td>
            <td><span title="Our standard general admission ticket charge.">175</span></td>
        </tr>
        <tr>
            <td><span>10</span></td>
            <td><span title="One ticket is free of charge.">315</span></td>
        </tr>
        <tr>
            <td><span>20</span></td>
            <td><span title="Best value! Three tickets are free of charge.">595</span></td>
        </tr>
        <tr>
            <td><span>50</span></td>
            <td><span title="Five tickets are free of charge.">1,575</span></td>
        </tr>
        <tr class="no-currency">
            <td><span>More than 50</span></td>
            <td><span>Negotiated per-event</span></td>
        </tr>
    </tbody>
</table>

When an event for which we have sent an invoice is cancelled by the purchaser for any reason, Tech Learning Collective charges a cancellation fee equal to 50% of the invoiced amount if the event is more than two (2) weeks away from the scheduled date of the booked event. After the two-week deadline, our cancellation fee is 75% of the total invoiced amount.

### Add-on services

* **Video recording and transcription**: For private events, we can also supply a video recording (screencast) along with a written text transcript for an additional fee. We supply transcripts as plain text, WebVTT, and SRT caption files for hard-of-hearing users.
