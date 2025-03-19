import React, {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
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
    }, [])


    useEffect(() => {
        // window.addEventListener('load', function (e){
        //     e.preventDefault();
        //     document.getElementById('heading').textContent = "Our Users";
        // })
    }, []);

    if(loading) return <p>Loading user.....</p>

    return (
        <>
            <h2 id='heading'>All Users</h2>
            {
                users && ( users.map(user => (
                    <div>
                        <h1>{user.name}</h1>
                        <div>Phone: {user.phone}</div>
                        <div>Email: {user.email}</div>
                        <div>Website: {user.website}</div>
                    </div>
                )))
            }
        </>
    )
}

export default Users;