import "./posts.css"
import Post from "../post/Post"
const Posts = ({ posts }) => {
    return (
        posts.map((p) => {
            return <Post post={p} />
        })
    )
}

export default Posts
