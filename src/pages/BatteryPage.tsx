import { useBattery } from "@uidotdev/usehooks";
import Battery from "../components/Battery";
import { useDocumentTitle } from "@uidotdev/usehooks";

const BatteryPage= ()=> {
    
    useDocumentTitle("Battery Page")

    const {loading, supported,level,charging,chargingTime,dischargingTime } = useBattery()

    if(!supported){
        return <h2>Battery Api is Not Supported.</h2>
    }

    if(loading){
        return <h2>Loading...</h2>
    }
    
    return(
    <div>
        <Battery
        level={level}
        charging={charging}
        chargingTime={chargingTime}
        disChargingTime={dischargingTime}
        >

        </Battery>
    </div>)


}

export default BatteryPage