import React from "react";
import {profile} from "../util";

const Profile = () => {
    return (
        <>
            <div>Name: {profile.name}</div>
            <div>Email: {profile.email}</div>
            <div>Position: {profile.position}</div>
        </>
    )
}

export default Profile;