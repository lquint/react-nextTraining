import CallbackCounter from "@/components/callbackCounter";
import MemoCounter from "@/components/memoCounter";
import dynamic from 'next/dynamic'
const ColoredCounter = dynamic(
    () => import('../components/coloredCounter'),
    { ssr: false }
)

export default function MinRenders(){
    return(
        <>
            <MemoCounter/>
            <CallbackCounter/>
            <ColoredCounter/>
        </>
    )
}