import NavBar from "../pages/NavBar";
import {Navigate, Outlet, useNavigate} from "react-router-dom";

const AuthenticatedLayout = () => {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user')) || null;

    const isAuthenticated = user.authenticated;

    const handleLogout = () => {
        localStorage.setItem('user', JSON.stringify({
            ...user,
            authenticated: false
        }));

        alert("Logged out successfully")

        navigate('/login')
    }

    return isAuthenticated ? (
        <>
            <div><NavBar/></div>

            <button onClick={handleLogout}>Logout</button>

            <Outlet/>
        </>
    ) : <Navigate to="/login"/>
}

export default AuthenticatedLayout;