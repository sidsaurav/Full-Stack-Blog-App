import "./topbar.css"
import { Link } from "react-router-dom"

const Topbar = () => {
    let user = true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className=" topIcon fab fa-pinterest-square"></i>
                <i className=" topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link">HOME</Link></li>
                    <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>
                    <li className="topListItem"><Link to="/about" className="link">ABOUT</Link></li>
                    <li className="topListItem"><Link to="/contact" className="link">CONTACT</Link></li>
                    <li className="topListItem"><Link to="/" className="link">{user && "LOGOUT"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {user ? <>
                    <img className="topImg" src="https://i.pinimg.com/736x/70/18/27/701827f915f3b68876368f260537e732.jpg" alt="pp" />
                    <i className="topSearchIcon fas fa-search"></i> </> : (
                    <Link to="/login" className="link">Login</Link>
                )}
            </div>
        </div>
    )
}

export default Topbar
