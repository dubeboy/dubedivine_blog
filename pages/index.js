import styles from '../styles/Home.module.css'
import {server} from "../config";
import Link from 'next/link'
import Layout from "../components/Layout";


export default function Home({blogs}) {
    return (
        <>
        <Layout title="Divine Dube Tech Blog"
                metaDescription="A Blog about Flutter, iOS and Android development">
            <div className={styles.mainContainer}>
                {blogs.map((blog) => (
                    <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
                        <div className={styles.blogCard}>
                            <div className="tags">
                                {blog.tags.map((tag) => (
                                    <p style={{backgroundColor: tag.color}}>tag</p>
                                ))}
                            </div>
                            <p className={styles.cardHeadingText}>{blog.title}</p>
                            <div className={styles.contentSnippet}>
                                <p className={styles.subject}>{blog.content.substring(0, 140)}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
        </>
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


