import useSignalR from "../hooks/useSignalR"

const SensorData= ()=> {
   function onMessageReceived(sensorId:string,sensorName:string,sensorData:number){
    console.log(sensorId,sensorName,sensorData)
   }
   const signalr= useSignalR("http://localhost:5208/sensorhub","ReceiveSensorData",onMessageReceived);

   //signalr.sendMessage("sensorData")

   function sendMessage(){
      signalr.sendMessage("SendSensorData",crypto.randomUUID(),"sensor1",15)
   }
   
   
    return <div>
        <button
          type="button"
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >Send Message</button>
        {signalr.isConnected}
        </div>
}

export default SensorData