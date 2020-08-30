import '../tailwind.css';
import "@reach/tooltip/styles.css";

import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                html,
                body,
                #__next {
                    padding: 0;
                    margin: 0;
                    height: 100%;
                }

                .font-russo {
                    font-family: 'Russo One', sans-serif;
                }

                .font-body {
                    font-family: 'Baloo Tamma 2', sans-serif;
                }

                .sw-text-blue {
                    color: #246bdf;
                }
            `}</style>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Russo+One&family=Baloo+Tamma+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
            {process.env.NODE_ENV === 'production' && (
                <script
                    data-goatcounter="https://styles-wiki.goatcounter.com/count"
                    async
                    src="//gc.zgo.at/count.js"
                ></script>
            )}
        </>
    );
}
