import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"

const single = () => {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    )
}

export default single
