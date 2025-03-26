import {useContext} from "react";
import {UserContext} from "../ContextAPI/UserProvider";

const UserDetailCard = () => {
    const user = useContext(UserContext).language;
    return (
        <div>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
        </div>
    );
}

export default UserDetailCard;