import Alert from "../components/AlertComponent"
import useStack from "../hooks/useStack"
import {useRef, useState} from "react"
import { useDocumentTitle } from "@uidotdev/usehooks";

const StackPage= ()=> {

   useDocumentTitle("Stack Page")
   
   const [showAlert,setShowAlert]=useState(false)
   const [message,setMessage]=useState("")

   const onClose= ()=>{
    setShowAlert(false)
   }

   const {push,pop}= useStack<string>()

   const inputRef=useRef<HTMLInputElement>(null)

   const pushValue= ()=>{
     if(inputRef.current?.value){
        push(inputRef.current.value)
     }

   }

   const prepareAlert=(message:string)=>{
      setShowAlert(true)
      setMessage(message)
   }

   const popValue= ()=> {
    const poppedValue=pop()
    if(poppedValue){
      prepareAlert("Popped: "+poppedValue)
    }

    else {
      prepareAlert("No more element left in Stack")
    }

   }

   return (
    <>
    {showAlert && <Alert message={message} onClose={onClose} ></Alert>}
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
    </>
  );
  
}

export default StackPage