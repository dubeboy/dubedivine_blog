import {server} from "../../config";
import styles from '../../styles/Blog.module.css'
import ReactMarkdown from 'react-markdown'
import Layout from "../../components/Layout";


export default function blog({ blog }) {
    return (
        <Layout title={`${blog.title} | Divine Dube Blog`} metaDescription={blog.metaDescription}>
            <div className="mainContainer">
                <div className="tags">
                    {blog.tags.map((tag) => (
                        <p style={{backgroundColor: tag.color}}>tag</p>
                    ))}
                </div>
                <p className={styles.publisedDate}>Published on {new Date(blog.published_at).toDateString()}</p>
                <h1 className="title">{blog.title}</h1>
                <div className={styles.blogContent}>
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>
            </div>
        </Layout>

    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/blogs/${context.params.slug}`)
    const blog = await res.json()

    return {
        props: {
            blog: blog
        }
    }
}

export const  getStaticPaths = async () => {
    const res = await fetch(`${server}/blogs`)
    const blogs = await res.json()

    const slugs = blogs.map(blog => blog.slug)
    const paths = slugs.map(slug => ({params: {slug: slug}}))

    return {
        paths,
        fallback: false
    }
}

