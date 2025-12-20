![BTC Tap](https://raw.githubusercontent.com/btctap/btctap.github.io/c28f8de034fcf29082fd41c0557e8dc875162af5/src/assets/logo.svg)

# An NFC gateway to the Bitcoin journey

## How this works

BTC Tap is a fun way to orange pill your neighbours. Tapping a phone on the NFC sticker and pressing 'Continue' will create a new fund, using the funding wallet's API token (env variable `VITE_TOKEN`), with predefined amount of satoshis (`VITE_GIFT_AMOUNT`). The phone will then navigate to the Coinos web site to receive the sats.

The web app identifies valid visits via a secret parameter '?s=' (`VITE_SECRET`). Further taps on the tag by the same phone will just open the wallet. Private browser modes and non-mobile visits are invalid. Onboardings are reported to the benefactorvia Telegram (`VITE_TELEGRAM_TOKEN` and `VITE_TELEGRAM_CHAT_ID`). There is code obfuscation and fingerprint blacklist against some obvious attacks.

## How to prepare your stickers

1. Clone the repo. You may run it directly from github as `YOUR_REPO_TITLE.github.io` and adding all env variables as the repo secrets. VITE_SECRET will be some long random string. `VITE_BACKEND` is "coinos.io" unless you want to be the custodian yourself.

2. NFC Stickers (Ntag 213/215/216) can be programmed by [NFC Tools App](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&hl=en-US). Use the following URL format: `https://YOUR_REPO_TITLE.github.io/?s=VITE_SECRET&id=ID. The last parameter can code location of the sticker so you can track your donations. If you plan to put the tag on a metal surface use special "Anti Metal" type.

3. Cover the tag with a regular round sticker with [this](https://raw.githubusercontent.com/btctap/btctap.github.io/c28f8de034fcf29082fd41c0557e8dc875162af5/public/icon.svg) graphics or of your own design.

4. When someone collects your sats, you will be notified by a Telegram message like this:

`Fp: a72f0f9...710b85
Id: null
Fund: coinos.io/fund/8c2b18...13569d7
Paid: XXXX
Balance: YYYYY`

### Go orange pill your block!
