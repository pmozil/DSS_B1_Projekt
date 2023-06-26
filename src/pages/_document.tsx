import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div data-netlify-identity-menu></div>
      </body>
    </Html>
  )
}