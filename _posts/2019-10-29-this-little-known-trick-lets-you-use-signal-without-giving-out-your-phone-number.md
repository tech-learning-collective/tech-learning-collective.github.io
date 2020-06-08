---
title: This little-known trick lets you use Signal without giving out your phone number
image: /static/images/photo.signal-private-number.1280x720.jpg
---

The [Signal Private Messenger](https://signal.org/) app has become the de-facto standard for end-to-end encrypted messaging. Its battle-tested encryption protocol is licensed for use by the likes of Facebook in WhatsApp, and it has been adopted by the XMPP Standards Foundation for use as the basis of [OMEMO Multi-End Message and Object Encryption](https://conversations.im/omemo/). In short, Signal is great, except for the fact that you need a phone number to use it. Or do you?

One of the most common reasons some people cite for not using Signal is because they don&rsquo;t want to give out their phone number to the same people they want to send encrypted messages to. In situations where you need both privacy *and* anonymity, this reluctance makes a lot of sense. But what they may not know is that Signal does not require you to use *your* phone number at all.

[![Poster image for Tech Learning Collective&rsquo;s &ldquo;Signal and Surveillance&rdquo; workshop.]({% link static/images/workshop.signal-and-surveillance-how-to-exercise-digital-civil-liberties-in-a-surveillance-state.rectangle.png %}){:style="width: 100%;"}]({% link _workshops/Signal and Surveillance: How to Exercise Digital Civil Liberties in a Surveillance State.md %})

As our instructors explain in more depth during our [Signal and Surveillance workshop]({% link _workshops/Signal and Surveillance: How to Exercise Digital Civil Liberties in a Surveillance State.md %}), what most people don&rsquo;t realize is that Signal &ldquo;phone numbers&rdquo; are not really phone numbers. They are more like *numeric user names*.

Contrary to popular belief, your Signal account is not linked to your phone number, but rather to an automatically generated number called a *private key*. In order to make the app easy to use, this private key or cryptographic identity is then associated with some arbitrary other number that again, for convenience&rsquo;s sake, just happens to be a phone number. The reason it&rsquo;s a phone number is so that the Signal service can send you a verification code in a text message during the sign-up and account registration process. But there&rsquo;s no reason you have to give Signal your real phone number.

**By providing Signal with any phone number at which you can receive an SMS or text message, you can register a Signal account at that other phone number.** For example, you can create a pseudonymous Google account, register a [Google Voice](https://www.google.com/voice) VoIP number, and use that as your Signal number. Or you can even use a [free throw-away SMS account](https://github.com/AnarchoTechNYC/meta/wiki/Disposable-SMS-services) and use that number when you sign up for your Signal account instead of your real phone number. The Signal service will happily send the throw-away number a text message with the verification code, letting you complete the account sign-up process.

Now that you have a Signal account registered to a phone number other than your own, you should [set a Signal Registration Lock PIN](https://support.signal.org/hc/en-us/articles/360007059792-Registration-Lock) so that no one else can register the same number as you without knowing your PIN. To do this, access the Signal setings menu and select *Privacy* &rarr; *Registration Lock PIN*. Enter a strong PIN, and consider using a secrets management app such as [KeePass](https://keepass.info/) to write it down in a secure location. And if you&rsquo;re new to secrets management apps or password managers, Tech Learning Collective&rsquo;s [Password Superpowers workshop]({% link _workshops/Password Superpowers: How to Crack Hashes and Stump Hackers.md %}) has your back.

![Photo of Signal Registration Lock PIN setting on an iOS device.](https://support.signal.org/hc/article_attachments/360008169991/registration_lock.jpg){:style="width: 100%;"}

One very important note here is that the Registration Lock PIN will expire after seven days of inactivity. This means that you must send a Signal message at least once a week to ensure that the Registration Lock PIN stays on your account and protects your Signal number from being hijacked by another user who wants to register their own Signal account using the same number that you did.

This way, you can give out your Signal number independently of your real phone number. Messages sent to your phone number will arrive as they normally would, and messages sent to your dedicated Signal number will arrive in the Signal app.

Tech Learning Collective covers this and many more advanced privacy and cybersecurity techniques related to Signal use at our Signal workshop. Be sure to check out our [events calendar]({% link events/index.md %}) to make sure you don&rsquo;t miss your chance to attend our next Signal workshop.
