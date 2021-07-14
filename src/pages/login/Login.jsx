import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <span class="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your email" />
                <label>Password</label>
                <input className="loginInput" type="text" placeholder="Enter your password" />
                <button className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton"><Link to="/register" className="link"> Register</Link></button>
        </div>
    )
}

export default Login
