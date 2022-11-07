import Document, {Head, Html, Main, NextScript} from "next/document";
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="theme-color" content="#FFF"/>
                    <meta
                        name="description"
                        content="Andrea Storace is a web Developer whom decide to build his own website to have proof he didn't waste money on a Computer Science Bachelor Degree"
                    />
                    <meta property="og:image" content="/og_image.webp"/>
                    <title>Andrea Storace | Home</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;