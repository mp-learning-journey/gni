import {useEffect, useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(0);

    useEffect(() => {
        // send request to backend
        alert("useEffect")
    },[])

    function handlePlus () {
        setCount(count + 1);
    }

    function handleMinus () {
        if(count >= 1)
            setCount(count - 1);
    }

    function handleSwitch () {
        setToggle((prevState) => prevState === 0 ? 1 : 0);
    }

    const switchStyle = {
        background: `${toggle === 1 ? "green" : 'red'}`,
        color: "white"
    }

    return(
        <>
            <div>
                Counter: {count}
            </div>

            <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus}>+</button>

            <div style={switchStyle}>
                {toggle === 1 ? "Green" : 'Red'}
            </div>

            <button onClick={handleSwitch}>switch</button>
        </>
    )
}