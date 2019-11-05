---
title: How to start catching phishermen before they catch you
image: /static/images/workshop.gone-phishing-how-to-recognize-fake-websites-and-other-online-scams.blue.rectangle.png
authors:
    - anarchotechnyc
excerpt: Remember, remember the tech antifa on the fifth of November! Antifa activists defend against the rise or spread of fascism by combating threats to anti-fascist groups, anti-racist organizers, and others for whom fascist groups pose a clear and present danger. The NYC chapter of the Anarcho-Tech Collective provides computer training for activists and advocacy groups, direct assistance with digital components of advocacy efforts, and private audits of an ally&rsquo;s security posture when requested. At Tech Learning Collective&rsquo;s Hackers Next Door conference in December and in this blog post, anonymous members from Anarcho-Tech NYC will show you how attackers work and think so you know how to first spot and then stop them in their tracks.
---

*Editor&rsquo;s note: This is a guest post by {{ site.data.authors[page.authors.first].name }}, who will be presenting at Tech Learning Collective&rsquo;s year-end event, the [Hackers Next Door 2019 conference](https://hnd.techlearningcollective.com/speakers/#{{ site.data.authors[page.authors.first].name | slugify }}). Tech Learning Collective is excited to include them on the program this year and to have this opportunity to learn more about their work. Be sure to [get your con tickets](https://hnd.techlearningcollective.com/tickets/) today so you don&rsquo;t miss your chance to see them speak at the conference in December!*

As part of the &ldquo;tech antifa,&rdquo; one of Anarcho-Tech NYC&rsquo;s missions is defending against the rise or spread of fascism in New York City and the surrounding area. In addition to digital security education, members of our collective often conduct security assessments of an allied group&rsquo;s cybersecurity posture. When asked, we take a look at how easy it might be to infiltrate antifa communications channels such as secret or closed Facebook groups, Signal threads, e-mail listserves, and more.

## How attackers go phishing

Perhaps unsurprisingly, the weakest link is often *not* the communication tools activists use, like Facebook groups&mdash;although if you don&rsquo;t consider Facebook an enemy of fascism, we have some deeper concerns about your organizing principles. Rather, the weak point in their security is how they use those tools. It&rsquo;s surprisingly difficult to get activists to pay close enough attention to the warning signs of an attack as it&rsquo;s happening, probably because even though most antifa know how to throw and defend against a punch, they don&rsquo;t have any equivalent experience while using their computer.

In other words, breaking into Facebook or GMail is far harder than tricking you into giving us your Facebook or Google Account password. Bad operational security (&ldquo;OPSEC&rdquo;) practices like sharing passwords insecurely are forgivable if the people involved don&rsquo;t have any cybersecurity education, but activist groups need to start taking online safety seriously if they ever hope to be effective organizing forces.

One of the easiest and most common ways attackers get username and password combinations for other people&rsquo;s accounts is by getting their targets to try to log in to &ldquo;spoofed&rdquo; websites. These are websites that look similar enough to the legitimate website to make the target believe they truly are logging in at the correct place when in fact the site they&rsquo;re logging in to is actually a fake controlled by the attacker. Once the target types their password into a look-alike website instead of the real one, the game is over and the attacker wins.

This technique, called *phishing*, has become so prevalent that according to several cybersecurity companies there are now more than one and a half million *phishing websites* launched every month. Of course, most of these phishing sites are not targeting *your* domains. Instead, they&rsquo;re creating fake PayPal, Facebook, or other big-name websites. And believe it or not, it&rsquo;s just as easy to spoof Facebook&rsquo;s login page as it is to spoof the login page for your group&rsquo;s website.

In [one of our *Hackers Next Door* conference sessions, &ldquo;Gone Phishing: Recognize Online Entrapment and Other Scams by Learning How to Launch Your Own Phishing Attack Website,&rdquo;](https://hnd.techlearningcollective.com/events/gone-phishing-recognize-online-entrapment-and-other-scams-by-learning-how-to-launch-your-own-phishing-attack-website) we&rsquo;ll show you step-by-step how we can compromise the Facebook and social media accounts of our fellow activists by using this same technique. Our goal is to make sure you&rsquo;ve been exposed to all the dirty tricks attackers try to play to get you to give them your account credentials.

In this post, we&rsquo;re going to take it one step further and briefly explain how your organization can easily and freely monitor the Internet for signs that phishermen&mdash;and yes, the kinds of people who attack anti-fascist and anti-racist activists are usually men&mdash;are preparing to go after your members. This advanced defensive technique relies on watching a public ledger called the [Certificate Transparency Log (CTL)](https://www.certificate-transparency.org/what-is-ct) for suspicious issuances of website security certificates and is particularly helpful for groups that maintain their own domain name.

## What is the Certificate Transparency Log?

![Interaction between CT log servers, monitors, and auditors.](https://www.certificate-transparency.org/_/rsrc/1472780090452/what-is-ct/ct_intro_system.png){:style="float: right; margin-left: 1em; width: 25%;"}

Most of the time, to successfully spoof a target website an attacker needs to first get a security certificate for the website in question. This website security certificate, called a Transport Layer Security (TLS) certificate, is what your Web browser is checking for whenever it shows the padlock icon indicating that you&rsquo;re visiting a &ldquo;secured&rdquo; (HTTPS) website. Each time you load a secured Web page (using HTTPS), your browser compares the domain name of the page you loaded with the domain name embedded in the security certificate. If they match, you see the lock icon. If they don&rsquo;t, you see a security error page instead of the page you were in the process of loading, and alarm bells start going off.

In order to fool you into thinking that you&rsquo;re loading your own website&rsquo;s secured pages, attackers have to get look-alike security certificates. For example, if you run a WordPress site at `exampleactivist.com`, then an attacker might try getting a certificate for `exampleactivist.com-wp-login-php.com`. This is a completely different website, but after merely a glance at the URL bar, the difference between the URL of the login page to your WordPress blog (`exampleactivist.com/wp-login.php`) and the domain of the phishing site (`exampleactivist.com-wp-login-php.com`) might not immediately stand out to you. This is doubly true if you&rsquo;ve only been taught to pay attention to the healthy-looking padlock icon.

Thankfully, each time a website security certificate is issued by reputable companies, that company records its issuance in a public ledger called the Certificate Transparency Log (CTL). The CTL is a decentralized database, not unlike the BitCoin public ledger. In fact, the implementations of both BitCoin and the Certificate Transparency Log are closely related to the much-hyped &ldquo;blockchain&rdquo; technology. The purpose of the CTL is to create a publicly shared, append-only record of every single HTTPS website security certificate ever issued so that the entire Internet community (which includes you!) can see for themselves what domain names have been issued security certificates along with when and by whom those certificates were issued.

## How Certificate Transparency helps catch the phishers

Under normal circumstances, you or your team should be the only ones requesting certificates for your domain. If you are monitoring the CTL and notice a certificate issued for your domain that you did *not* intend, you can be pretty sure something is wrong. Similarly, because the CTL gives you visibility into *every* security certificate issued across *every* domain name, you can search the log looking for certificates issued for domain names that look similar to your own or that match patterns often used to phish members of your group.

Even better, since the log records certificate issuances in near real time, you can be alerted to a potential phishing site that is going to, but has not yet had the opportunity to actually, target your members. This lets you pre-emptively alert your group&rsquo;s members that an attack is being prepared before it even gets a chance to phish you.

## Monitoring the CTL for suspicious certificate issuances

Since the technology&rsquo;s initial release in 2013, many Certificate Transparency monitoring tools have been developed. Perhaps the simplest is [SSLMate&rsquo;s CertSpotter](https://sslmate.com/certspotter/). Simply sign-up with a free account and SSLMate will send you an email every time a new certificate for one of your domain names is issued. Unfortunately, the service limits you to monitoring a maximum of 5 domain names. To monitor more than five, you have to [self-host the CertSpotter code yourself](https://github.com/SSLMate/certspotter). This makes the free SSLMate service more useful for spotting duplicate certificates than it is for finding look-alike certs.

For the latter case, we&rsquo;ll use a free tool called [Phishing Catcher](https://github.com/x0rz/phishing_catcher), which itself relies on a free service called [CertStream](https://certstream.calidog.io/). The CertStream service is simply a firehose of all new certificates recorded in the CTL wrapped up in a simple to use Application Programming Interface (API). You don&rsquo;t need to do any coding to use the service, though, because they also supply a command line tool (predictably named `certstream`) as well.

![CertStream demo showing simple usage from a command line.](https://certstream.calidog.io/static/img/demo1.gif){:style="width: 100%;"}

Using the `certstream` command, you can get a running tally of every new TLS certificate recorded in the CTL.

One of the very first things you&rsquo;ll notice is that there are *a lot* of certificates being issued. Too many, in fact, to manually make sense of. This is where Phishing Catcher comes in.

Phishing Catcher reads data from the same firehose, but scores each new record it sees using a simple algorithm to determine if that certificate is &ldquo;suspicious.&rdquo; If Phishing Catcher determines that the certificate is not suspicious, the record is ignored. Otherwise, the certificate is deemed either &ldquo;potentially,&rdquo; &ldquo;likely,&rdquo; or &ldquo;suspiciously&rdquo; similar to a possible phishing domain and gets logged to a file. At your earliest convenience, you can then examine this subset of issued certificates to see if they are indeed phishing domains that have been set up to target you.

To use Phishing Catcher, you must have [Python](https://www.python.org/) installed on your computer, and then you have to [install the Python package management tool, `pip`](https://packaging.python.org/installing/). With those requirements satisfied, Phishing Catcher itself is a simple download from GitHub and a standard `pip` requirements installation invocation:

{% highlight shell %}
git clone https://github.com/x0rz/phishing_catcher.git
cd phishing_catcher
python -m venv venv      # Optional, but nice.
source venv/bin/activate # Only necessary if you did the above.
pip install -r requirements.txt
{% endhighlight %}

Once you have Phishing Catcher downloaded, you&rsquo;ll want to edit its configuration file, `external.yaml`, to customize Phishing Catcher&rsquo;s behavior for your needs. The tool loads sensible defaults from a second file (`suspicious.yaml`), but you can adjust or add to both the keywords it contains and the score assigned to each keyword by editing the `external.yaml` file. For example, in the default file, you&rsquo;ll see a snippet like this:

{% highlight yaml linenos %}
# In file `suspicious.yaml`
keywords:
    'login': 25
{% endhighlight %}

Here, a score of 25 &ldquo;suspicion points&rdquo; is added to the generic keyword `login` when it is found in a TLS certificate domain name. Increasing this value will raise the level of suspicion against domains with the string `login` in them, thus allowing you to subject these certificate issuances to increased scrutiny.

Continuing from the example above, if you are running an activist group with the domain name `exampleactivist.com`, then you will probably want to add the string `exampleactivist` into Phishing Catcher&rsquo;s `keywords` dictionary and give it a pretty high score by adding this string as a key to the `external.yaml` configuration file&rsquo;s `keywords` dictionary:

{% highlight yaml linenos %}
# In file `external.yaml`
keywords:
    'exampleactivist': 60
{% endhighlight %}

You&rsquo;ll also want to include certain permutations of your domain names common in phishing attacks, such as misspellings, letter transpositions (e.g., replacing `i`&rsquo;s with `l`&rsquo;s), and so on. (Have a look at tools like [`dnstwist`](https://github.com/elceef/dnstwist) to automatically generate this list for you.) Once configured to your liking, running Phishing Catcher is as simple as invoking its main `catch_phishing.py` script:

{% highlight shell %}
./catch_phishing.py
{% endhighlight %}

![Screencast of example Phishing Catcher usage.](https://i.imgur.com/4BGuXkR.gif){:style="width: 100%;"}

In addition to the terminal output, Phishing Catcher also writes a log file of all certificate issuances it sees that it thinks are suspicious based on the configuration file you supply.

As we hope you can see, monitoring the Certificate Transparency Logs like this is something cybersecurity Blue Teams of any size can do easily and cheaply as part of an early warning system to detect imminent cyber attacks and potentially alert or better defend the users whose online safety they are partly responsible for protecting.

We&rsquo;re looking forward to going into more detail on this and other techniques that both attackers and defenders in the cybersecurity space use on a daily basis at the [Tech Learning Collective&rsquo;s Hackers Next Door conference](https://hnd.techlearningcollective.com/). See you then!
