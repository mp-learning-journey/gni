import {NavLink, useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/login');
    }
    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><button onClick={handleGetStarted}>Get Started</button></li>
            </ul>
        </>
    )
}

export default NavBar;