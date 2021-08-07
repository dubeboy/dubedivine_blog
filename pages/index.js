import styles from '../styles/Home.module.css'
import {server} from "../config";

export default function Home({ blogs }) {
  return (
    <div className={styles.mainContainer}>
     <div className={styles.blogCard}>

     </div>
      <div className={styles.blogCard}>

      </div>
      <div className={styles.blogCard}>

      </div>
      <div className={styles.blogCard}>

      </div>
      <div className={styles.blogCard}>

      </div>

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


