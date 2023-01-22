import { useEffect, useState } from "react";

const AutoCounter = () => {
    const count = useAutoIncrement()

    function useAutoIncrement(initialValue=0,step=1){
        const [value,setValue]= useState(initialValue)
        useEffect(()=>{
            const timer= window.setInterval(function(){
                setValue(c=>c+step)
            }, 1000)

            return function(){
                clearInterval(timer)
            }
        }, [])
        return value
    }
    return (
        <div className="flex items-center">
        <p>Seconds since this component have been mounted</p>
        <span className="p-1 m-4 rounded-md bg-slate-300">{count}</span>
        </div>
     );
}
 
export default AutoCounter;