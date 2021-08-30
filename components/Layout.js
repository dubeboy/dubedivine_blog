import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Head from "next/head";
import Footer from "./Footer";
import {useRouter} from "next/router";

const Layout = ({children, title, metaDescription }) => {

    const { asPath } = useRouter()

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={metaDescription} charSet="utf-8" />
                <link rel="canonical" href={`https://dubedivine.com${asPath}`} />
                <link rel="icon" href="/favicon.ico" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@divinedube" />
                <meta name="twitter:creator" content="@divinedube" />
                <meta property="og:url" content={`https://dubedivine.com${asPath}`} />
                <meta property="og:title" content={ title } />
                <meta property="og:description" content={ metaDescription } />
                <meta property="og:image" content="/divine_dube.jpeg" />
            </Head>
            <Nav/>
            <div className={styles.container}>
                <main>
                    { children }
                </main>

            </div>
            <Footer />
        </>
    )
}

export default Layout