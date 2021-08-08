import {server} from "../../../config";

export default function blog({ blog }) {
    return (
        <div >
            Hello
            {blog.title}
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

