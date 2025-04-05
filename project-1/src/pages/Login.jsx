import Layout from "../component/Layout";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const handleLogin = () => {
        // validation
        const user = JSON.parse(localStorage.getItem('user')) || null;

        if(!user || user.email !== email) {
            alert("Invalid credential")
            return
        }

        localStorage.setItem('user', JSON.stringify({
            ...user,
            authenticated: true
        }));

        alert("Logged in successfully")

        navigate('/dashboard')
    }
    return (
        <Layout>
            <div>
                <h1>Login page</h1>

                <div>
                    <p>Email:</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>

                <div>Dont have an account? <Link to="/register">Register</Link></div>
            </div>
        </Layout>
    )
}

export default Login;