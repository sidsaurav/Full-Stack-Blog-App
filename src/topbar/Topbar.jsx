import "./topbar.css"

const Topbar = () => {
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://i.pinimg.com/736x/70/18/27/701827f915f3b68876368f260537e732.jpg" alt="pp"/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
