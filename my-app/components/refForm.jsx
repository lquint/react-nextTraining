import { useRef } from "react";

const RefForm = () => {
    const input = useRef(null)

    const handleSubmit= () => {
        console.log(input.current.value)
    }
    return ( 
    <>
        <input className="border border-black" type="text" ref={input}/>
        <button type="submit" onClick={handleSubmit}>Send text</button>
    </> 
    );
}
 
export default RefForm;