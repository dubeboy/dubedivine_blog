import styles from "../styles/About.module.css";
import {server} from "../config";
import ReactMarkdown from "react-markdown";

export default function About({ author }) {
    return (
        <div className="mainContainer">
            <p className="title">About {author.divine}</p>
            <ReactMarkdown>{author.about}</ReactMarkdown>
        </div>
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
