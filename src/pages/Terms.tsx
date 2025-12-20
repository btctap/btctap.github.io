import type { Component } from "solid-js";

import "../style/legal.scss";

const Terms: Component = () => {
  return (
    <div class="terms-container">
      <h1>Terms of Service</h1>
      <h2>1. Introduction</h2>
      <p>
        BTC Tap is not a legal entity, but an open source code hosted on Github.
        The maintainers of the code and the benefactors (hereinafter, the "We")
        of the gifted Bitcoin (the "Funds") are anonymous. Coinos (the "Wallet")
        is an unaffiliated open source custodial Bitcoin wallet that can be
        hosted{" "}
        <a
          href="https://github.com/coinos/coinos-ui?tab=readme-ov-file#coinos"
          target="_blank"
        >
          anywhere
        </a>
        . Please read these Terms of Service (the "Terms") carefully before
        accepting the Funds and creating the Wallet (the "Service"). If you do
        not agree with these Terms or any of its clauses, you should not
        proceed.
      </p>

      <h2>2. Enforcement & Amendments</h2>
      <p>
        2.1. By accessing or using our Service, users confirm to have understood
        and agreed to be bound by these Terms.
      </p>
      <p>
        2.2. We reserve the right to amend, modify or alter these Terms from
        time to time, in our sole discretion.
      </p>

      <h2>3. Service Description</h2>
      <p>
        The Service grants users a small amount of Bitcoin (aka "satoshis") to
        educate themselves about its usage as private and uncensorable money.
        Users must not trust the custodial of the Wallet, because it can be
        someone not subject to the user's jurisdiction. Instead, users are
        advised to spend the Funds or to withdraw them to their own
        non-custodial wallet (or to a properly licensed custodial).
      </p>

      <h2>4. Service Rules</h2>
      <p>By using the service you warrant:</p>
      <p>4.1. You use our Service at your sole option, discretion and risk.</p>
      <p>
        4.2. You are solely responsible for any applicable taxes which may be
        payable while using our Service.
      </p>
      <p>
        4.3. A mobile phone equipped with an NFC reader is required to use the
        Service.
      </p>
      <p>
        4.4. Re-using or passing the NFC link to third parties is prohibited.
        You agree not to create the Wallet and receive the free Funds more than
        once.
      </p>
      <p>
        4.5. You are at least 18 years old or meet the minimum legal age
        requirement (if applicable) in your jurisdiction to use our Service.
      </p>
      <p>
        4.6. You agree that there are risks associated with Internet-based
        systems, such as the failure of hardware, software, and Internet
        connections and with the different Bitcoin protocols, such as any
        malfunction, unintended function, unexpected functioning of or attack on
        the Bitcoin layer's protocol.
      </p>
      <p>
        4.7. You hereby indemnify us, who are held to have no responsibility,
        against any direct, indirect, consequential, or any damages of any kind,
        arising out of or in any way connected with the use of our Service,
        including but not limited to those arising from users' personal error
        and/or misbehavior. This especially includes loss of Funds for any
        reason.
      </p>
      <p>
        4.8. We explicitly disclaim any responsibility or liability for any
        losses, damages, or harm incurred by users as a result of scams, frauds,
        or any other deceptive practices perpetrated by third parties in
        connection with the use of our Service.
      </p>
      <p>
        4.9. We reserve the right to monitor anonymous onboarding data to ensure
        users' compliance with these Terms.
      </p>

      <h2>5. Contact Info</h2>
      <p>
        Any problems with the Service should be reported at the repo's Issues
        Page. Any questions about the Wallet should be addressed to its
        respective maintainers.
      </p>

      <p class="last-updated">
        <strong>Last updated: December 20, 2025</strong>
      </p>
    </div>
  );
};

export default Terms;
