import "./topbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost/5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

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
                    <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? <>
                    <Link to="/settings">
                        <img className="topImg" src={PF + user.profilePic} alt="pp" />
                    </Link>
                    <i className="topSearchIcon fas fa-search"></i> </> :
                    (<>
                        <Link to="/login" className="link topListItem">Login</Link>
                        <Link to="/register" className="link topListItem">Register</Link>
                    </>
                    )}
            </div>
        </div>
    )
}

export default Topbar
