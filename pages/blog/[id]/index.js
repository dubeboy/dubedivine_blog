import {server} from "../../../config";
import styles from '../../../styles/Blog.module.css'
import ReactMarkdown from 'react-markdown'


export default function blog({ blog }) {
    return (
        <div className="mainContainer">
            <div className="tags">
                {blog.tags.map((tag) => (
                    <p style={{backgroundColor: tag.color}}>tag</p>
                ))}
            </div>
            <p className={styles.publisedDate}>Published on {new Date(blog.published_at).toDateString()}</p>
            <p className={styles.blogTitle}>{blog.title}</p>
            <div className={styles.blogContent}>
                <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/blogs/${context.params.id}`)
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

    const ids = blogs.map(blog => blog.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

