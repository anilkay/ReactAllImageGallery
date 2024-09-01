import {useState,useRef} from "react"


const useScreenRecording = () => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaStreamRef = useRef<MediaStream | null>(null); 
    const mediaRecorderRef=useRef<MediaRecorder| null>(null)

    const mediaStreamChunks= useRef<Blob[]>([])


    const startVideoPermission= ()=>{
        navigator.mediaDevices.getDisplayMedia({
            video:true,
            audio:true
        })
        .then(function(stream){
            mediaStreamRef.current=stream

        })
    }

    const startMediaChunkSaving= ()=>{
        if(mediaRecorderRef.current != null){
            mediaRecorderRef.current.ondataavailable=(ev)=>{
                mediaStreamChunks.current.push(ev.data)
                
            }
        }
    }

    const startRecording= ()=> {
        if(isRecording){
            return;
        }

        if(mediaStreamRef.current !=null){
           mediaRecorderRef.current=new MediaRecorder(mediaStreamRef.current)
           startMediaChunkSaving()
           mediaRecorderRef.current.start()
           setIsRecording(true)
        }
    }

    const stopRecording= ()=>{
        if(!isRecording){
            return;
        }
        
        if(mediaRecorderRef.current!=null){
        mediaRecorderRef.current.stop()
        setIsRecording(false)
        }
    }

    const downloadRecording= ()=>{
        const blob=new Blob(mediaStreamChunks.current,{type:mediaRecorderRef.current?.mimeType})
        const videoUrl=window.URL.createObjectURL(blob)

        const a = document.createElement('a');
        a.href = videoUrl;
        a.download = 'recording.mkv'; // İndirilen dosya adı
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click(); // İndirme başlat
        URL.revokeObjectURL(videoUrl); // URL'yi serbest bırak
        mediaStreamChunks.current=[]
      
        
    }

    return {
        isRecording,
        startVideoPermission,
        startRecording,
        stopRecording,
        downloadRecording,
    }

}
export default useScreenRecording