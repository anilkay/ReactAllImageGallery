import { useState, useEffect, useRef } from 'react';
import * as signalR from '@microsoft/signalr';

// Define the type for the hook's return value
interface UseSignalRResult {
  sendMessage: (methodName:string,sensorId:string,sensorName:string,sensorData:number) => Promise<void>;
  isConnected: boolean;
}

// Custom hook to manage SignalR connection
const useSignalR = (hubUrl: string, subscribedMethod:string ,onMessageReceived?: (sensorId:string,sensorName:string,sensorData:number) => void): UseSignalRResult => {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const latestOnMessageReceived = useRef(onMessageReceived);

  // Update the ref each time the onMessageReceived callback changes
  useEffect(() => {
    latestOnMessageReceived.current = onMessageReceived;
  }, [onMessageReceived]);

  // Establish SignalR connection
  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl, {
        skipNegotiation:true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect()
      
      .build();

    setConnection(newConnection);

    return () => {
      // Clean up the connection on unmount
      if (newConnection) {
        newConnection.stop();
      }
    };
  }, [hubUrl]);

  // Manage the connection lifecycle
  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('Connected to SignalR hub!');
          setIsConnected(true);

          // Set up the event listener for receiving messages
          connection.on(subscribedMethod, (sensorId:string,sensorName:string,sensorData:number) => {
            if (latestOnMessageReceived.current) {
              latestOnMessageReceived.current(sensorId,sensorName,sensorData);
            }
          });
        })
        .catch((err) => console.error('Error connecting to SignalR hub:', err));

      // Handle reconnection
      connection.onreconnected(() => {
        console.log('Reconnected to SignalR hub!');
      });

      // Handle disconnection
      connection.onclose(() => {
        console.log('Disconnected from SignalR hub.');
        setIsConnected(false);
      });

      // Clean up event listeners on disconnection
      return () => {
        connection.off(subscribedMethod);
        connection.stop();
      };
    }
  }, [connection,subscribedMethod]);

  // Function to send messages to the hub
  const sendMessage = async (methodName:string,sensorId:string,sensorName:string,sensorData:number): Promise<void> => {
    if (connection && isConnected) {
      try {
        await connection.invoke(methodName,sensorId,sensorName,sensorData);
      } catch (err) {
        console.error('Error sending message:', err);
      }
    }
  };

  return { sendMessage, isConnected };
};

export default useSignalR;