import Layout from "../component/Layout";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleRegister = () => {
        const user = {
            email,
            name,
            authenticated: false
        }

        localStorage.setItem('user', JSON.stringify(user));

        alert("Registered in successfully")

        navigate('/login')
    }

    return (
        <Layout>
            <div>
                <h1>Register Page</h1>

                <div>
                    <p>Name:</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <p>Email:</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <button onClick={handleRegister}>Register</button>
            </div>
        </Layout>
    )
}

export default Register;