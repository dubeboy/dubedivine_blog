import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Head from "next/head";
import Footer from "./Footer";
import {useRouter} from "next/router";

const Layout = ({children, title, metaDescription, }) => {

    const { asPath, pathName} = useRouter()

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="description" content={metaDescription} charSet="utf-8" />
                <link rel="canonical" href={`https://dubedivine.com/${asPath}`} />
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