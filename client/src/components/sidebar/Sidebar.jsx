import "./sidebar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Sidebar = () => {
    const PF = "http://localhost:5000/images/"
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="profileImg" src={PF+"shinchan.png"} alt="profile" />
                <p className="aboutText">
                Hello internet. I am Siddharth Saurav, an undergraduate from IIT(BHU), Varanasi. I am a Web Developer. I also do competitive programming as a hobby. I love building things and you can always find me involved in some sort of projects.
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
