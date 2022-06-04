import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                {/* <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300&family=Pacifico&display=swap" rel="stylesheet"/> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300&family=Pacifico&family=Playfair+Display:ital,wght@1,400;1,500&display=swap" rel="stylesheet"/> */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Merriweather:wght@300;400&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300&family=Pacifico&family=Playfair+Display:ital,wght@1,400;1,500&display=swap" rel="stylesheet"/> */}
                <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Merriweather:wght@300;400&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,300&family=Open+Sans:wght@300;400;500&family=Pacifico&family=Playfair+Display:ital,wght@1,400;1,500&display=swap" rel="stylesheet"/>
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