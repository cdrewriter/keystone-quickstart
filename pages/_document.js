import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <noscript>
            <strong>
              We&apos;re sorry but this page doesn&apos;t work properly without JavaScript enabled. Please enable it to
              continue. (Chúng tôi vô cùng xin lỗi nhưng trang web này có thể sẽ không hiển thị như ý muốn nếu bạn không
              mở JavaScript trên trình duyệt)
            </strong>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
