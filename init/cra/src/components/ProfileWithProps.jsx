import React from "react";

const ProfileWithProps = ({profile}) => {
    return (
        <>
            <div>Name: {profile.name}</div>
            <div>Email: {profile.email}</div>
            <div>Position: {profile.position}</div>
        </>
    )
}

export default ProfileWithProps;