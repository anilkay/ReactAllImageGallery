import useStack from "../hooks/useStack"
import {useRef} from "react"
const StackPage= ()=> {
   const {push,pop}= useStack<string>()

   const inputRef=useRef<HTMLInputElement>(null)

   const pushValue= ()=>{
     if(inputRef.current && inputRef.current.value){
        push(inputRef.current.value)
     }

   }

   const popValue= ()=> {
    const poppedValue=pop()
    if(poppedValue){
        alert(poppedValue)
    }

    else {
        alert("No more element left in Stack")
    }

   }

   return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        ref={inputRef}
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="mt-4">
        <button
          type="button"
          onClick={pushValue}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Push Value
        </button>
        <button
          type="button"
          onClick={popValue}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Pop Value
        </button>
      </div>
    </div>
  );

}

export default StackPage