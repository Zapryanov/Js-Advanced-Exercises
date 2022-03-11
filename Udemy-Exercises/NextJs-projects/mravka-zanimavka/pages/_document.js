import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/images/logo.png" />
                    <meta name="robots" content="index, follow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;