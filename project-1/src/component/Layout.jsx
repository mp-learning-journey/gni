import NavBar from "../pages/NavBar";

const Layout = ({children}) => {
    return (
        <>
            <div><NavBar /></div>
            <div>{children}</div>
        </>
    )
}

export default Layout;