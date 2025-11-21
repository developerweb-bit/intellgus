import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body
        // style={{
        //   background:
        //     "linear-gradient(to bottom, #ffffff 0%, #f0f7ff 35%, #e9f0ff 70%, #f7ecff 100%)",
          
        // }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
