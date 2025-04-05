const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            <div>

                <h1>Profile Page</h1>
                <div>
                    <h2>Name: {user.name}</h2>
                    <h2>Email: {user.email}</h2>
                </div>

            </div>
        </>
    )
}

export default Profile;