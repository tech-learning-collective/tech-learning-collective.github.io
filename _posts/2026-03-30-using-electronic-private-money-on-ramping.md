---
title: "Using Private Electronic Money: On-ramping"
#image: https://web.archive.org/web/20220411130413if_/https://podcast.firewallsdontstopdragons.com/wp-content/uploads/2022/04/be-prepared-640x360-1.jpg
---

> Editor's note: This post is the third in a four-part series about making privacy-preserving cryptocurrency accessible and useful for underserved populations. Its original author, [Violet Rollergirl](https://VioletRollergirl.com/){:target="_blank"}, is a transgender sex worker who has modified the post from [its original](https://VioletRollergirl.com/resources/for-providers/using-cryptocurrency/on-ramping/){:target="_blank"} in order to speak to a broader audience. We are republishing her work here with her express permission.

# On-Ramping: Acquiring Cryptocurrency Funds (as a Gig Worker)

Now that you have a privacy-preserving [cryptocurrency wallet app](https://violetrollergirl.com/resources/for-providers/using-cryptocurrency/wallet-apps/) and can receive funds in a privacy coin like Zcash or Monero, it’s time to start acquiring some funds. The cryptocurrency world calls this “on-ramping,” using the analogy of a highway on-ramp from one place (the fiat economy) to another (the so-called “crypto-native” economy, or whatever).

# Getting paid directly in crypto

I’ll be blunt: the easiest way for many of us to start getting crypto is to just get a client or customer to pay or tip us in cryptocurrency. This simply avoids any interaction with the fiat economy entirely. This is of course even better if we get paid directly in a privacy coin like Zcash or Monero and don’t have to convert, exchange, or swap the money we make into one of these privacy-preserving cryptocurrencies, but my favorite Zcash wallet app, Zodl, even makes it easy to [receive deposits in Zcash from a range of cryptocurrencies](https://violetrollergirl.com/resources/for-providers/using-cryptocurrency/on-ramping/#getting-paid-in-zcash-when-your-client-or-customer-only-has-bitcoin).

## Receiving the same cryptocurrency being sent

The simplest way to get paid in crypto is to simply receive the same cryptocurrency your client or customer has to send you. More often than not, this is likely to be Bitcoin, because all of the major cryptocurrency exchanges support that.

My more privacy-conscious clients actually prefer paying directly in Zcash, though, which is why I have both Zodl (the most private Zcash wallet app) and Cake Wallet (a privacy-focused wallet app that supports most other major currencies, but not yet Zcash); together, these two wallets let me accept dozens upon dozens of cryptocurrencies without needing to swap or exchange one currency for another.

To get paid in this situation when you don’t need to perform a currency swap, find the “Receive” button in your wallet app. Every wallet app makes this button very big and clear, because everyone likes getting paid and that’s what wallet apps are for. Tap or click the Receive button and you’ll be presented with options to reveal the full address, a QR code of the address, and sometimes also other ways to share the address of your wallet such as by sharing a link. (This is exactly [how my own cryptocurrency tips and donation links work](https://violetrollergirl.com/colophon/#cryptocurrency-tips-and-donation-links), by the way.)

Send the address or the generated QR code to your client or customer however you’re already talking with them. Ideally, you’re [messaging discreetly](https://violetrollergirl.com/resources/for-clients/messaging-discreetly/), such as over [Signal Private Messenger](https://Signal.org/), but any method of sending them some text or an image (email, text message, whatever), will work. Have them press the complementary “Send” button in their wallet app, enter the address you gave them, whether via copy-and-paste or by scanning the QR code you showed them, and you’ll have your money a few moments after they confirm the transaction on their side.

Zodl even has a “Request” button in its “Receive” screen that lets you enter an amount you’d like to receive and embeds this amount into a QR code that you can display, or save as an image to send. If your client or customer also has Zodl (or any other wallet app that supports Zcash QR codes), they can just scan the QR code to send you exactly that amount of money in Zcash’s cryptocurrency, called *ZEC, the Zcash Electric Coin*.

You can think of Zodl’s “request via QR code” feature like a simplistic point-of-sale system. I love it because it’s perfect for us as providers since we’re so often interactively requesting payment from customers and clients who need things to be as easy as “scan-and-send.”

## Getting paid in Zcash when your client or customer only has Bitcoin

Zodl also has a neat feature worth knowing about that makes it possible for you to receive cryptocurrency deposits (or even payments\!) regardless of whether your client or customer will send you shielded Zcash directly. It’s called a “swap deposit,” and it’s one way I make paying me in cryptocurrency easy for clients who won’t deal with anything except Bitcoin, Ethereum, or whatever their cryptocurrency of choice is.

As swap deposits require entering a “refund” address for cases where the currency swap fails, there are two ways to perform one with Zodl.

* The simpler option, if your only means of accessing cryptocurrency is the Zodl wallet app itself, causes failed swaps to get refunded to the client’s address. I’d only recommend this in situations where you trust your client to try again, and where your client is not likely to become fatigued by trouble ensuring you have been paid.
* The second option requires you to have another cryptocurrency wallet app that supports holding the same cryptocurrency that your client is sending you, such as using Zodl and Cake Wallet together. This way you can ensure all the funds from failed swaps are still sent to *you*, not back to your client, just not have your money immediately show up in Zodl as shielded ZEC.

This second method is one of the main reasons why I use a combination of Zodl with Cake Wallet.

In the example below, let’s assume your client wants to pay in Bitcoin, but you want to receive the most private currency you can as quickly as you can, which is shielded Zcash in Zodl.

The way we do this is by initiating a currency swap trade, but we’ll have the client play the role of the seller while we act as the buyer. Put another way, even though our client is sending the funds, we will receive his failed trade’s refund, and we’ll also be where his successfully traded funds are sent. This means the “trade” actually serves as a full cross-currency, cross-chain payment in one fell swoop.

Note: In the following step-by-step walkthrough of how Zodl lets us perform a swap deposit, Cake Wallet and Bitcoin are just examples. You can replace Cake Wallet with whatever other self-custodial cryptocurrency wallet you are comfortable using, and Bitcoin with whatever cryptocurrency your client or customer wants to send you that your chosen self-custodial wallet app supports holding.

**Do this** to get paid from a client or customer by performing a swap deposit in Zodl using your Cake Wallet as the “refund” address for the Bitcoin your client is paying in:

1. Open Cake Wallet to the wallet of the cryptocurrency your client is sending you, such as Bitcoin.
2. Tap the **Receive** button. This reveals your own Bitcoin wallet’s address.
3. Copy your own Bitcoin wallet’s address and make a note of it somewhere. We’ll use this as the “refund” address in Zodl’s Swap feature.
   * I like to send this to myself using [Signal Private Messenger’s “Note to self” feature](https://support.signal.org/hc/en-us/articles/360043272451-Note-to-Self).
4. Open your Zodl wallet.
5. Tap **Swap** to open Zodl’s decentralized exchange (DEX) integration.
6. In the **From** cryptocurrency selection drop-down menu, choose the currency (and network) your client or customer wants to send. In this example, we’ll choose `BTC` (Bitcoin on the main Bitcoin network, also known as “Bitcoin mainnet”).
7. In the **Refund Address** field, paste the Bitcoin address of your own self-custodial wallet, like Cake Wallet, that you noted earlier.
8. In the **Amount** field, enter how much you’re asking your client or customer to pay.
   * This is the exact amount you expect to receive in ZEC. Any additional funds will be sent to the Refund Address you entered earlier.
   * You don’t need to calculate transaction fees yourself; you’ll get an automated estimate for this shortly.
9. In the **To** section, choose a **slippage tolerance**, that is, how much *more* than the target price your client or customer is likely comfortable paying.
   * I tell clients that this covers “all transaction and payment processing fees, inclusive.”
   * I usually leave this at its default of `1%`. This is low enough that it’s usually a much cheaper option than many fiat services such as wishlists or [tipping sites](https://violetrollergirl.com/resources/for-providers/using-cryptocurrency/on-ramping/#mintpay-fiat-income-with-cryptocurrency-withdrawals).
   * You can set a custom slippage tolerance if you want to be extra sure the swap succeeds and you think your client or customer will not care much about the increase in total price.
10. Tap the **Get a quote** button to generate a swap trade quote with a total estimate, including fees and any extra price slippage.
11. Review the quote. It’ll look something like what’s shown in the screenshot below:

     Screenshot showing a swap quote in the Zashi wallet app.

12. Tap **Confirm** to generate the swap trade’s address, amount, and QR code.
13. Show, share, or send this payment information to your client or customer.
    * Tell your client or customer that they have about 1 hour to confirm the send. This is a very common grace period to hold a quoted price in cryptocurrency ecommerce systems such as [BTCPay Server](https://btcpayserver.org/).
    * The swap deposit’s “payment” address shown here is *ephemeral* (temporary), much like other cryptocurrency shopping cart checkout pages. You cannot reuse it ever again.
    * (If you’re using this technique to swap (i.e., “convert” or “exchange”) your own non-private Bitcoin into private shielded Zcash, rather than using this technique to get a client or customer to pay you, this is when you go to your other Bitcoin wallet app or log in to your exchange service account and send your own cryptocurrency funds to the address Zodl showed you.)
14. Tap the **I’ve sent the funds** button.

At this point, the swap trade is “`pending deposit`.” Remember, when using this technique to collect a crypto deposit or payment, it’s actually *your client or customer* who’s sending funds, not you. Moreover, they’re not sending funds directly to you, but rather to the decentralized exchange to which you’ve requested a currency swap from their currency into yours.

The address shown in the quote confirmation isn’t your address, but rather a deposit address for the underlying DEX associated with the currency swap trade you were quoted. This is why the address will eventually expire and why your client or customer needs to send the funds sooner rather than later.

When your client or customer actually sends those funds to the exchange’s deposit address, the exchange will attempt to make the trade between currencies. When it does, one of two things will happen:

* If the swap trade **succeeds**:
  * your Zodl wallet app will see the receipt of exactly the amount you’ve requested and will immediately auto-shield it, making your funds completely private.
  * your Cake Wallet app will see any overage paid, i.e., the difference between the slippage tolerance you set and the actual realized slippage of the trade as it was made, “refunded” to you from the exchange. This amount is also now yours, completely immune from chargebacks.
* If the swap trade **fails**:
  * your Zodl wallet app will report the trade as unsuccessful for whatever reason, but…
  * …your Cake Wallet app will see *all* of the original currency (Bitcoin, in this example), received as a “refund” and is completely immune from chargebacks. You can now try the swap again or use another exchange to swap into Monero. (I like Cake Wallet because [Trocador, a centralized exchange aggregator and proxy site](https://noscript.trocador.app/) is built into Cake Wallet\!)

What’s clever about this is that no matter what happens, *you* receive the money the client or customer sends. Moreover, you are never interacting directly with the client’s wallet; there’s no next-neighbor connection between you and them. You only ever interact with the currency exchanges, keeping any digital association between you and your client or customer to an absolute minimum, providing ultimate payment discretion.

For some of us, however, getting paid directly in crypto seems like a stretch. Our clients or customers are wary of cryptocurrency, they don’t have the technical skill to do it, they have no existing cryptocurrency funds themselves, or they don’t have the same cryptocurrencies that we want to accept payments in. So, next, let’s talk about on-ramping in other ways.

# Converting fiat currency to cryptocurrency

If you have existing fiat currency, like US Dollars (USD), Euros (EUR), or whatever, the simplest way to acquire cryptocurrency of any kind is to buy it. This works like any other foreign currency conversion. By way of analogy, when you’re converting fiat currencies from one to another, you go to a currency exchange counter such as those that are at airports. There, you ask the person at the currency exchange service counter for an equivalent amount of the local currency given your available foreign currency.

Fiat-to-cryptocurrency conversions work just like that, except instead of going up to a physical counter, you visit the currency conversion service’s website. Many such fiat-to-cryptocurrency exchanges exist. Today, the biggest and most famous of these are Coinbase, Kraken, and Binance, although both CashApp and PayPal also function as cryptocurrency exchanges, albeit for a smaller array of cryptocurrencies.

While this method is very easy, the downside is that you will likely be asked to show your government ID to the exchange, especially if you’re trying to convert currencies in large amounts. This can be a big privacy risk if you’ve previously used that exchange’s services to make other kinds of transactions that you don’t want linked to you legal identity. In this case, consider creating a brand-new account from scratch.

The good news here is that it’s in no way shady to be buying cryptocurrency. These are just currencies and securities like any other. However, doing so at a cryptocurrency exchange means the exchange is still holding your funds for you, so I’d suggest that sooner rather than later you move your funds out of the exchange account and into a self-custodial wallet, like Zodl or Cake Wallet.

## Buy ZEC via cryptocurrency exchanges

If you already have some fiat currency like US Dollars and want to enter the cryptocurrency ecosystem, you can treat cryptocurrency like money from another country. Just as you might convert your dollars into Euros at a foreign currency exchange service desk when you visit France, so too can you convert your dollars into ZEC (or another cryptocurrency).

This means you need to open an account at a cryptocurrency exchange service, and this will almost certainly require you to upload your legal identity documents when opening the account or making your first exchange. Once you do this, though, you can move fiat funds into crypto and then from there move your newly-acquired crypto to a [self-custody wallet](https://violetrollergirl.com/resources/for-providers/using-cryptocurrency/primer/#self-custody-or-bust) (like Zodl) outside of the exchange’s control.

Since some people’s clients face way less banking discrimination than de-banked populations do, it’s far more likely that they will be able to create and keep accounts with such exchanges open. However, if you are lucky enough to have avoided banking discrimination and can also do this, you can pretend to be your own client and walk through the steps I’ve written for how to do this in my client-facing guide just as they would:

[Crypto Quick(est) Start](https://violetrollergirl.com/resources/for-clients/using-cryptocurrency/quick-start/)

### Withdrawing funds privately

One very important thing to remember is that buying Zcash at a cryptocurrency exchange is *not* private. You’re buying transparent ZEC from a custodial account, not shielded ZEC held in a self-custodial wallet app. Moreover, if a cryptocurrency exchange doesn’t support [shielded ZEC withdrawals](https://www.gemini.com/blog/youre-one-step-closer-to-financial-freedom-with-shielded-zec-withdrawals), you cannot privately move ZEC to your self-custodial wallet.

As I write this guide, [the *only* major cryptocurrency exchange that supports shielded ZEC withdrawals is Gemini](https://electriccoin.co/blog/gemini-sets-the-standard-for-privacy-on-cexs-with-shielded-zec-withdrawals/), a feature they should be praised for. This makes it possible to move ZEC from your Gemini account directly to a Zcash shielded address.

This lack of support for shielded ZEC withdrawals from the cryptocurrency exchanges that support Zcash in the first place is why I often advise buying Bitcoin or Ethereum from those exchanges and then using [the swap deposit method](https://violetrollergirl.com/resources/for-providers/using-cryptocurrency/on-ramping/#complete-your-crypto-purchase-via-gemini) I described above to withdraw those funds from your cryptocurrency exchange account.

Another important thing to understand is that buying ZEC from one of these custodial exchanges and sending it directly to your self-custodial wallet app is not the same as buying ZEC and then keeping it in the account you created at the exchange. By moving your funds out of the exchange and into your self-custodial wallet app immediately, you’re doing the equivalent of withdrawing your money from the bank so you can hold onto and protect it yourself.

The ultimate takeaway is that by choosing to hold a privacy coin, once you receive your ZEC or XMR in your self-custodial wallet app, you can move it about freely and privately. That’s the only way to effectively free your money from others’ control.

# Summary and Next Steps

The easiest way to get crypto is for someone to just give you some that they already have. This also demonstrates the easiest and most natural way to transact with cryptocurrency, since it just requires scanning a QR code of the receiving wallet from the sending wallet, and confirming the transaction. You can receive cryptocurrency like this as a gift or a payment.

Other ways are more complex, and require a fiat-to-cryptocurrency “on-ramp,” which requires opening (yet another) service account at a cryptocurrency exchange.

Once you have cryptocurrency, though, what can you do with it, besides just hold onto like a stock portfolio? Well, you can buy stuff with it, of course. That’s called off-ramping, and we’ll look at that next.
