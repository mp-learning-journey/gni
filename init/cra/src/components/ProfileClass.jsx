import React, {Component} from "react";
import {profile} from "../util";

class ProfileClass extends Component {
    render() {
        return (
            <>
                <div>Name: {profile.name}</div>
                <div>Email: {profile.email}</div>
                <div>Position: {profile.position}</div>
            </>
        )
    }
}

export default ProfileClass;