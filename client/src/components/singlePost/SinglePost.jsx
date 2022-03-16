import { useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./singlePost.css"
import { Context } from "../../context/Context";

const SinglePost = () => {
    const location = useLocation();
    let path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/"
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/posts/${path}`)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)

        }
        fetchPost()
    }, [])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`,
                { data: { username: user.username } });
            window.location.reload("/")
        } catch (err) { }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            });
            window.location.reload("/")
        } catch (err) { }
    }

    return (
        <div className="singlePost">
            <div class="singlePostWrapper">
                {post.photo &&
                    <img
                        className="singlePostImg"
                        src={PF + post.photo} alt="pic" class="singlePostImg" />
                }{
                    updateMode ? <input type="text" value={title} className="singlePostTitleInput" autofocus="true"
                        onChange={(e) => { setTitle(e.target.value) }} /> : (

                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author :
                        <Link to={`/?user=${post.username}`} className="link">
                            <b> {post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostAuthor">{new Date(post.updatedAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea value={desc} className="singlePostDescInput"
                    onChange={(e) => { setDesc(e.target.value) }}
                /> : (

                    <div class="singlePostDesc">
                        {desc}
                    </div>
                )}
                {updateMode && <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
            </div>
        </div>
    )
}

export default SinglePost
