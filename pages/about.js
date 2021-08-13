import styles from "../styles/Home.module.css";
import Link from "next/link";
import {server} from "../config";

export default function About({ blogs }) {
    return (
        <div className="mainContainer">
            <p>Hello</p>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/blogs`)
    const blogs = await res.json()
    return {
        props: {
            blogs
        }
    }
}
