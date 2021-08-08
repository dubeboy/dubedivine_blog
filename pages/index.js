import styles from '../styles/Home.module.css'
import {server} from "../config";

export default function Home({ blogs }) {
  return (
    <div className={styles.mainContainer}>
        {blogs.map((blog) => (

             <div className={styles.blogCard}>
               <div className={styles.tags}>
                 <p>tag</p>
                 <p>tag</p>
               </div>
                <p className={styles.cardHeadingText}>{blog.title}</p>
               <div className={styles.contentSnippet}>
                 <p className={styles.subject}>{blog.content}</p>
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


