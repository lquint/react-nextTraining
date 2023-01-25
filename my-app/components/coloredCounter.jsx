import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";

const ColoredCounter = () => {
    const [count,setCount]=useState(0)
    const button = useRef(null)

    const increment = useCallback(()=> {
        setCount(c=>c+1)
    })
    //A l'inverse de useEffect, useLayoutEffect est synchrone
    //Pour manipuler le dom avant un rendu il vaut mieux utiliser le useLayoutEffect
    //Pour manipuler des effets de bord qui n'affectent pas l'interface, il vaut mieux utiliser useEffect
    useLayoutEffect(()=>{
        if(count%2===0){
            button.current.style.color="green"
        } else {
            button.current.style.color="red"
        }
    },[count])
    return ( 
        <>
            <button ref={button} onClick={increment}>Increment : {count}</button>
        </>

     );
}
 
export default ColoredCounter;