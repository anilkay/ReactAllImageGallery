
interface IAlert {
    message: string,
    onClose:()=> void,
}

const  Alert= (props:IAlert)=>{


    return  <div className="p-4 rounded-md bg-red-100 border border-red-400 text-red-700 mb-4">
    <div className="flex justify-between items-center">
      <span>{props.message}</span>
      <button onClick={props.onClose} className="ml-4 text-red-500 hover:text-red-700">
        X
      </button>
    </div>
  </div>   
     
}

export default Alert
