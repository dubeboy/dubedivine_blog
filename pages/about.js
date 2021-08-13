import styles from "../styles/About.module.css";
import {server} from "../config";

export default function About({ blogs }) {
    return (
        <div className="mainContainer">
            <p className={styles.aboutHeading}>About Divine</p>
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
