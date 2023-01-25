import React,{ useCallback, useState } from "react";
import Counter from "./counter";

const CallbackCounter = () => {
    const [count,setCount]=useState(0)
    const handleClick = useCallback(function() {
            console.log('Bonjour')
        }, [])
    
    console.log("render")
    return ( 
    <>
        <button onClick={handleClick}>Bonjour</button>
        <Counter></Counter>
    </>
    );
}
 
export default CallbackCounter;