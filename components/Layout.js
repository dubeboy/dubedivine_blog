import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({children, title, metaDescription}) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={metaDescription} charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
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