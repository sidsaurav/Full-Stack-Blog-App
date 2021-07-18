import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [err, setErr] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); //to prevent from refreshing the page...
        setErr(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            if (res.status === 200) {
                alert("Yay!! Successfully signed up. Login now and create your first blog!")
            }
            // console.log(res);
            res.data && window.location.replace("/login")
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className="register">
            <span class="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    className="registerInput"
                    type="text"
                    placeholder="Enter your username"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <input
                    className="registerInput"
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <input
                    className="registerInput"
                    type="password"
                    minlength="5"
                    placeholder="Enter password, size >= 5"
                    required
                    onChange={e => setPassword(e.target.value)} />

                <button className="registerButton" type="submit">Register</button>
            </form>
            <Link to="/login" className="link"><button className="registerLoginButton"> Login</button></Link>
            {err && <div className="errorMsg">Uh..hoo Something went wrong. Please try again. If problem persists try changing credentials</div>}
        </div >
    )
}

export default Register
