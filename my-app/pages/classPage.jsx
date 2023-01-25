//import ClassClock from "@/components/classClock";
import dynamic from 'next/dynamic'
import ClassWelcome from "@/components/classWelcome";
const ClassClock = dynamic(
    () => import('../components/classClock'),
    { ssr: false }
)

export default function ClassPage(){
    return(
        <>
        <h1 className="m-4 text-lg font-bold">Train writing class components (which I never usually do)</h1>
        <ClassWelcome name="Bob"/>
        <ClassClock/>
        </>
    )
}