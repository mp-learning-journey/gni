const useAuth = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null

    const register = () => {

    }

    const login = () => {

    }

    const logout = () => {

    }

    return {
        user,
        login,
        logout,
        register
    }
}

export default useAuth;