import useScreenRecording from "../hooks/useScreenRecording"
const ScreenRecorder= ()=>{
    const screenRecording=useScreenRecording()

    

    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-6">Screen Recording App</h1>
    
          {/* Request Permission Button */}
          <button
            onClick={screenRecording.startVideoPermission}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 shadow hover:bg-blue-600"
          >
            Request Permission
          </button>
    
          {/* Start Recording Button */}
          {!screenRecording.isRecording && (
            <button
              onClick={screenRecording.startRecording}
              className="bg-green-500 text-white px-4 py-2 rounded mb-4 shadow hover:bg-green-600"
            >
              Start Recording
            </button>
          )}
    
          {/* Stop Recording Button */}
          {screenRecording.isRecording && (
            <button
              onClick={screenRecording.stopRecording}
              className="bg-red-500 text-white px-4 py-2 rounded mb-4 shadow hover:bg-red-600"
            >
              Stop Recording
            </button>
          )}
    
          {/* Download Recording Button */}
          <button
            onClick={screenRecording.downloadRecording}
            className="bg-purple-500 text-white px-4 py-2 rounded mb-4 shadow hover:bg-purple-600"
            disabled={screenRecording.isRecording}
          >
            Download Recording
          </button>
        </div>
      );
}
export default ScreenRecorder