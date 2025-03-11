import React from "react";

const Person = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>Location: {props.location}</div>

            <button onClick={props.handleGreet}>Greet</button>

        </>

    )
}

export default Person;