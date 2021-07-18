import "./sidebar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Sidebar = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="profileImg" src="https://i.pinimg.com/736x/70/18/27/701827f915f3b68876368f260537e732.jpg" alt="profile" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => {
                        return <li className="sidebarListItem">
                            <Link to={`/?cat=${c.name}`} className="link">
                                {c.name}
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fab fa-facebook-square"></i>
                    <i className=" sidebarIcon fab fa-twitter-square"></i>
                    <i className=" sidebarIcon fab fa-pinterest-square"></i>
                    <i className=" sidebarIcon fab fa-instagram-square"></i>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
