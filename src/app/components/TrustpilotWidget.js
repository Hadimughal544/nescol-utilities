"use client";
import { useEffect } from "react";

export default function TrustpilotWidget() {
  useEffect(() => {
    // Load Trustpilot script once
    const script = document.createElement("script");
    script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6344413913a51175c4a30dcf"
      data-style-height="38px"
      data-style-width="100%"
      data-token="806ab1ce-2e90-4468-a97a-df6f0a6a7ce9"
    >
      <a
        href="https://www.trustpilot.com/review/nescolutilities.co.uk"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>  
    </div>
  );
}
