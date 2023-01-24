import { useState, useEffect } from "react";

const GradeTable = () => {
    const [ grades,setGrades]= useState([])
    const [loading,setLoading]=useState(true)
    const classes=["Math","Physics","Spanish","Art","Chemistry","History"]
    let avgGrades=[]

    useEffect(function(){
        (async function(){
            const response=await fetch("/api/grades")
            const responseData = await response.json();
            console.log(response.ok);
            if (response.ok) {
                setGrades(responseData.grades.sort((a,b)=>{return a.class.localeCompare(b.class)}));
            } else {
                alert(JSON.stringify(responseData));
            }
            setLoading(false);  
        })()
    }, [])
    console.log(grades)
    return ( 
    <>
        {loading ?
        <p>Loading</p>
        :
        <table className="border-collapse shadow-lg">
            <tr>
                <th className="px-8 py-4 text-left bg-blue-100 border border-gray-400">Class</th>
                <th className="px-8 py-4 text-left bg-blue-100 border border-gray-400">Average grade</th>
            </tr>
            {classes.forEach((className)=>{
                const classGrades=grades.filter((element)=>{
                    return element.class===className
                })
                const moy=Math.floor(classGrades.reduce((previousValue,currentValue)=>{return currentValue.grade/classGrades.length+previousValue},0)*10)/10
                console.log(moy)
                avgGrades.push({class:className,grade:moy})
                console.log(avgGrades)
            })
            }
            {avgGrades.map((item)=>{return <tr><td className="px-8 py-4 border border-gray-400">{item.class}</td>  <td className="px-8 py-4 border border-gray-400">{item.grade}</td></tr>})}
        </table>
        }
    </> 
    );
}
 
export default GradeTable;