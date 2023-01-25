import React,{ useMemo, useState } from "react";
import Counter from "./counter";

const MemoCounter = () => {
    const [count,setCount]=useState(0)
    const handleClick = useMemo(function(){
        return function() {
            console.log('Bonjour')
        }
    }, [])
    
    console.log("render")
    return ( 
    <>
        <button onClick={handleClick}>Bonjour</button>
        <Counter></Counter>
    </>
    );
}
 
export default MemoCounter;