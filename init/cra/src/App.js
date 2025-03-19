import React, {useEffect, useState} from "react";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import Person from "./components/Person";
import PersonDestructured from "./components/PersonDestructured";
import ProfileWithProps from "./components/ProfileWithProps";
import Blog from "./components/Blog/Blog";
import {Counter} from "./components/HooksAndEvents/Counter";
import {RegistrationForm} from "./components/HooksAndEvents/RegistrationForm";
import Users from "./components/HooksAndEvents/Users";

function App () {

    function handleGreet() {
        alert("Good Evening")
    }

    return (
        <>
            {/*<h1>Hello World Class Component</h1>*/}
            {/*<ProfileClass/>*/}

            {/*<h1>Hello World Function Component</h1>*/}
            {/*<Profile />*/}

            {/*<ProfileWithProps profile={{*/}
            {/*    name: "Dami",*/}
            {/*    email: "dami@ymail.com",*/}
            {/*    position: "software developer"*/}
            {/*}} />*/}

            {/*<ProfileWithProps profile={{name: "Chukwudi", email: "shola@ymail.xom", position: "Lawter"}} />*/}
            {/*<Person name="Dami" age={18} location="Lagos, Nigeria" handleGreet={handleGreet} />*/}
            {/*<Person name="Shola" age={20} location="Owerri, Nigeria" />*/}
            {/*<PersonDestructured age={18} location="Lagos, Nigeria" />*/}

            {/*<Blog />*/}
            {/*<Counter />*/}
            {/*<RegistrationForm />*/}
            <Users />
        </>
    )
}

export default App;