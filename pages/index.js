import styles from '../styles/Home.module.css'
import {server} from "../config";

export default function Home({ blogs }) {
  return (
    <div className={styles.mainContainer}>
        {blogs.map((blog) => (
             <div className={styles.blogCard}>
                <p className={styles.cardHeadingText}>{blog.title}</p>
               <div className={styles.contentSnippet}>
                 <span className={styles.subject}>{blog.content}</span>
               </div>
             </div>
        ))}
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


