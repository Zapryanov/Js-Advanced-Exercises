import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=El+Messiri&family=Merriweather:wght@300;400&family=Montserrat:wght@100;200;300;400;500;600&family=Pacifico&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/images/logo-leaf.png" />
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