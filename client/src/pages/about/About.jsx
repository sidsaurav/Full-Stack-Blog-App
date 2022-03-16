import { Link } from "react-router-dom"
import "./About.css"

const About = () => {
    const PF = "http://localhost:5000/images/"
    return (
        <div>
            <div className="main-img">
                <img src={PF+"sid.jpg"}/>
            </div>
            <div className="about-text">
               <p>
                    Hello internet. I am Siddharth Saurav, an undergraduate from IIT(BHU), Varanasi. I am a Web Developer. I also do competitive programming as a hobby. I love building things and you can always find me involved in some sort of projects.<br/><br/>
                    Checkout my handles - <br/>
                    LinkedIn: <Link to={{ pathname: "https://www.linkedin.com/in/siddharth-saurav/" }} target="_blank" >linkedin.com/in/siddharth-saurav/</Link><br/>
                    Github: <Link to={{ pathname: "https://www.github.com/5idd" }} target="_blank" >github.com/5idd</Link><br/>
                    Codeforces: <Link to={{ pathname: "https://codeforces.com/profile/sidd_11" }} target="_blank" >codeforces.com/profile/sidd_11</Link><br/>
                    
                </p> 
            </div>
        </div>
    )
}

export default About
