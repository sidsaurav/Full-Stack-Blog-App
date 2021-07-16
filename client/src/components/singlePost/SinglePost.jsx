import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios"
import "./singlePost.css"

const SinglePost = () => {
    const location = useLocation();
    let path = location.pathname.split("/")[2];

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
        }
        fetchPost()
    }, [path])

    return (
        <div className="singlePost">
            <div class="singlePostWrapper">
                {post.photo &&
                    <img
                        className="singlePostImg"
                        src={post.photo} alt="pic" class="singlePostPhoto" />
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>{post.username}</b></span>
                    <span className="singlePostAuthor">{new Date(post.updatedAt).toDateString()}</span>
                </div>
                <div class="singlePostDesc">
                    {post.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePost
