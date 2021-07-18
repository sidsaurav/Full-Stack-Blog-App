import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Context } from "../../context/Context"
import "./login.css"

const Login = () => {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
        }
    };

    // console.log(user);
    return (
        <div className="login">
            <span class="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="Enter your username" required ref={userRef} />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password" required ref={passwordRef} />
                <button className="loginButton" type="submit">{isFetching ? "Please wait..." : "Login"}</button>
            </form>
            <Link to="/register" className="link"><button className="loginRegisterButton"> Register</button></Link>
        </div>
    )
}

export default Login
