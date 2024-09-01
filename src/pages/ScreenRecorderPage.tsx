import ScreenRecorder from "../components/ScreenRecorder"
import { useDocumentTitle } from "@uidotdev/usehooks";
const ScreenRecorderPage: React.FC = () => {
    
    useDocumentTitle("Screen Recording")

    return (
        <ScreenRecorder></ScreenRecorder>
    )
}
export default ScreenRecorderPage