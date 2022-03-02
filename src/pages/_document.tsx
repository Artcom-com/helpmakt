/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html, Head, Main, NextScript, DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <title>Ajudando o Marketing</title>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="overlay"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
