import { useState } from "react"

function useStack<T>()
{
    const [stack,setStack]=useState<T[]>([])

    const push=(value:NonNullable<T>)=>{
        setStack([value,...stack])
    }

    const pop=()=>{
        const poppedElement= stack[0]
        setStack(stack.slice(1))
        return poppedElement
    }

    return {push,pop}

}
export default useStack