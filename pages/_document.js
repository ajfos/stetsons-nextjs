import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";
import { GA_TAG } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TAG}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TAG}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Righteous&display=swap"
            rel="preload stylesheet"
          />
          <meta name="facebook-domain-verification" content="cyzbv14ni5d3j58emjcixxnc9m3b7e" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}
