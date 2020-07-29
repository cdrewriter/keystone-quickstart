import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

import './styles.scss';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }
  render() {
    return (
      <html lang="ru" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
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

