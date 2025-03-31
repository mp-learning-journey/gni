import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const style = {
        backgroundColor: theme !== 'light' ? "black" : 'white',
        color: theme !== 'light' ? "white" : "black"
    }

    const handleSwitch = () => {
        const mode = theme === 'light' ? "dark" : 'light';
        setTheme(mode);
        localStorage.setItem('theme', mode);
    }

    return (
        <ThemeContext.Provider value={{ theme, handleSwitch }}>
            <div style={style}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;