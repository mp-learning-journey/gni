import React, {useEffect, useState} from "react";
import {useTheme} from "../ContextAPI/ThemeProvider";
import NavBar from "../pages/NavBar";

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    const {theme} = useTheme();

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=2`);
            const data = await response.json();
            setUsers(data);
        }catch (e) {
            console.log(e);
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [page])


    useEffect(() => {
        // window.addEventListener('load', function (e){
        //     e.preventDefault();
        //     document.getElementById('heading').textContent = "Our Users";
        // })
    }, []);

    if(loading) return <p>Loading user.....</p>

    return (
        <>
            <NavBar />
            <h2 id='heading'>All Users</h2>
            {
                users && (users.map(user => (
                    <div>
                        <h1>{user.name}</h1>
                        <div>Phone: {user.phone}</div>
                        <div>Email: {user.email}</div>
                        <div>Website: {user.website}</div>
                    </div>
                )))
            }

            <button
                style={{
                backgroundColor: theme === 'light' ? "black" : 'white',
                color: theme !== 'light' ? "black" : 'white'
                }}
                onClick={() => setPage(page - 1)}>Prev</button>

            {page}

            <button onClick={() => setPage(page + 1)}>Next</button>
        </>
    )
}

export default Users;