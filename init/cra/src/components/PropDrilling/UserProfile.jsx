import UserDetails from "./UserDetails";
import {useTheme} from "../ContextAPI/ThemeProvider";

const UserProfile = () => {
    const {theme, handleSwitch} = useTheme();
    return (
        <>
            <button onClick={handleSwitch}>switch to {theme === 'light' ? 'dark' : 'light'} mode</button>

            <h2>Logged in User</h2>
            <UserDetails/>
        </>
    );
}

export default UserProfile;