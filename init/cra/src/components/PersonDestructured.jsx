import React from "react";

const PersonDestructured = ({name = "Victor", age, location}) => {
    function handleGreet () {
        alert("Hello How are you today");
    }

    return (
        <>
            <h1>{name}</h1>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Location: {location}</div>

            <button onClick={handleGreet}>Greet</button>
        </>
    )
}

export default PersonDestructured;