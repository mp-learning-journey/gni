import {createContext, useEffect, useState} from "react";

const UserContext = createContext({});
const UserProvider = ({children}) => {
    const [user, setUser] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/2`);
            const data = await response.json();
            setUser(data);
        }catch (e) {
            console.log(e);
        }
        finally {
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <UserContext.Provider value={{user, language: "PHP"}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }