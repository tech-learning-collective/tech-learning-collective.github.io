---
title: "Bare Bones Crypto: Understanding Critical Cryptographic Primitives"
image: static/images/workshop.bare-bones-crypto-understanding-critical-cryptographic-primitives.square.png
persona_matrix:
    - 3
    - 3
simple_description: This workshop shows you real-time examples of modern cryptography by breaking down the process of how computers protect messages from spies and eavesdroppers by scrambling messages, and clearly explains the confusing words that cryptographers and programmers use to talk about information security. You'll literally see the differences between different encryption schemes and "cipher modes" and will be able to understand how today's most complex algorithms and data security protocols are built up out of extremely straightforward mathematical functions like simple addition.
---

Every time you use a modern computer, you invoke numerous simple mathematical functions that make it possible to do things like logging in to Web sites safely or &ldquo;locking&rdquo; (encrypting) your secret documents behind passwords. At their root, these functions, called *[cryptographic primitives](https://en.wikipedia.org/wiki/Cryptographic_primitive)*, are not that much more complicated than simple addition or division. But when used in concert with the massive storage capacities and processing speeds of our modern electronic devices, they serve as the bedrock atop which every provably secure system works, from [password vaults]({% link _workshops/Password Superpowers: How to Crack Hashes and Stump Hackers.md %}) to [Virtual Private Networks (VPNs)]({% link _workshops/Two Places at Once: Understanding Virtual Private Networks.md %}) to BitCoin and beyond.

Today, everyone has full access to bulletproof &ldquo;military grade encryption&rdquo; for free, even if they don&rsquo;t realize it. [Signal Private Messenger]({% link _workshops/Signal and Surveillance: How to Exercise Digital Civil Liberties in a Surveillance State.md %})&rsquo;s &ldquo;Safety Numbers?&rdquo; Those are cryptographic hash functions! One-time passwords generated by apps like Google Authenticator or Authy? They use nonces! The [Tor anonymity network]({% link _workshops/Tor: What is it Good For? (Absolutely Everything!).md %})? That&rsquo;s a mixnet! The padlock icon in the address bar of your Web browser? Block ciphers (and public-key cryptography, and digital signatures, oh my)!

Knowledge of cryptography was deemed so dangerous during the Cold War that ever since the end of World War II the United States and its military allies attempted to regulate access to these crypto powers by classifying them as &ldquo;munitions&rdquo; (i.e., mathematical *weapons*, literally) and criminalizing their sale or export. But as the Internet gained widespread commercial adoption and more people became familiar with the underlying math, the government largely relented. It eventually lost what is now retroactively known as the &ldquo;[Crypto Wars](https://en.wikipedia.org/wiki/Crypto_Wars)&rdquo; in the 1990&rsquo;s.

In this workshop, you&rsquo;ll learn the kind of math that governments tried to keep secret for decades, even if you&rsquo;re &ldquo;not a math person.&rdquo; You&rsquo;ll see hash functions in practice, learn why longer &ldquo;keys&rdquo; are stronger by understanding how RSA secrets are generated, practice developing your own simple ciphers, and start combining primitives to create security protocols that satisfy multiple requirements like confidentiality (privacy), integrity-protection (authenticity), and more. By the end of this workshop, the dizzying vocabulary crytographers use will be well within your reach, as will the ability to understand any new &ldquo;encryption&rdquo; product on the market.