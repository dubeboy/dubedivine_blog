import styles from "../styles/About.module.css";
import {server} from "../config";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

export default function About({ author }) {
    return (
        <Layout title="About Divine Dube " metaDescription="About this website">
            <div className="mainContainer">
                <p className="title">About {author.divine}</p>
                <ReactMarkdown>{author.about}</ReactMarkdown>
            </div>
        </Layout>

    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/author`)
    const author = await res.json()
    return {
        props: {
            author
        }
    }
}
