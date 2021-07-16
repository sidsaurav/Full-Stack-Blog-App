import "./post.css"
import { Link } from "react-router-dom"

const Post = ({ post }) => {
    return (
        <div className="post">
            {post.photo &&
                (<img
                    className="postImg"
                    src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg" alt="img" />)}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => {
                        return <span className="postCat">{c}</span>
                    })}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDesc">{post.desc}</p>
            </div>
        </div>

    )
}

export default Post
