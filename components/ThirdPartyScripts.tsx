import Script from "next/script";

export function ThirdPartyScripts() {
  const callRailScript = process.env.NEXT_PUBLIC_CALLRAIL_SCRIPT;

  if (!callRailScript) {
    return null;
  }

  return (
    <>
      {/*
        Paste the full CallRail swap script into NEXT_PUBLIC_CALLRAIL_SCRIPT.
        The site works without this variable. Displayed phone numbers include
        the `callrail-phone` class plus data attributes for CallRail/GTM hooks.
      */}
      <Script
        id="callrail-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: callRailScript }}
      />
    </>
  );
}
