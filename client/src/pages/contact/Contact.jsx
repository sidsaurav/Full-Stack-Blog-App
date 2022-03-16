import { Link } from "react-router-dom"
import "./Contact.css"

const Contact = () => {
    const PF = "http://localhost:5000/images/"
    return (
        <div>
            <div className="main-img">
                <img src={PF+"sid.jpg"}/>
            </div>
            <div className="about-text">
               <p>
                    Feel free to reach out to me at - <br/><br/>
                    Email: sid.saurav11@gmail.com<br/>
                    LinkedIn: <Link to={{ pathname: "https://www.linkedin.com/in/siddharth-saurav/" }} target="_blank" >linkedin.com/in/siddharth-saurav/</Link><br/>
                    
                </p> 
            </div>
        </div>
    )
}

export default Contact
