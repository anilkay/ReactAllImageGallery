import { useState } from "react";
import useSignalR from "../hooks/useSignalR"

type SensorTableData= {
   sensorId:string,
   sensorName:string,
   sensorData:number | string,
   receivedSensorDate:Date
}

const SensorTable: React.FC<{ data: SensorTableData[] }> = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left font-bold">Sensor ID</th>
              <th className="py-3 px-6 text-left font-bold">Sensor Name</th>
              <th className="py-3 px-6 text-left font-bold">Sensor Data</th>
              <th className="py-3 px-6 text-left font-bold">Received Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.length > 0 ? (
              data.map((sensor, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left border border-gray-300">{sensor.sensorId}</td>
                  <td className="py-3 px-6 text-left border border-gray-300">{sensor.sensorName}</td>
                  <td className="py-3 px-6 text-left border border-gray-300">{sensor.sensorData}</td>
                  <td className="py-3 px-6 text-left border border-gray-300">{sensor.receivedSensorDate.toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-3 px-6 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

const SensorData= ()=> {
   function onMessageReceived(sensorId:string,sensorName:string,sensorData:number){

    setTableData([...tableData,{ sensorId, sensorName, sensorData, receivedSensorDate: new Date() }])

   }

   const signalr= useSignalR("http://localhost:5208/sensorhub","ReceiveSensorData",onMessageReceived);
   const [tableData,setTableData]=useState<SensorTableData[]>([])

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
        <SensorTable data={tableData}>

        </SensorTable>
        </div>
}

export default SensorData