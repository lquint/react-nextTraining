import CallbackCounter from "@/components/callbackCounter";
import ColoredCounter from "@/components/coloredCounter";
import MemoCounter from "@/components/memoCounter";

export default function MinRenders(){
    return(
        <>
            <MemoCounter/>
            <CallbackCounter/>
            <ColoredCounter/>
        </>
    )
}