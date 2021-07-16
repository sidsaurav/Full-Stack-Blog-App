import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts")
            // console.log(res);
            setPosts(res.data)
        }
        fetchPosts()
    })
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
