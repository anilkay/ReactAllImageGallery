interface IBattery {
    level:number |null,
    charging:boolean |null, 
    chargingTime: number | null,
    disChargingTime:number |null
}

const Battery= (props:IBattery)=> {

    function chargeLevelAsPercentage(){
        if(!props.level) return 0
        return props.level*100 //Percentage
    }

    function chargingTime(){
        if(props.charging){
            return (props.chargingTime ?? 0) /60 //Minutes
        }
        return 0
    }

    function disChargingTime(){
        if(!props.charging){
            return (props.disChargingTime ?? 0) /60 //Minutes
        }
        return 0;
    }

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-700">
              Charge Percentage: <span className="text-blue-600">%{chargeLevelAsPercentage()}</span>
            </h2>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-700">
              Charging Time: <span className="text-blue-600">{chargingTime()} Minutes</span>
            </h2>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-700">
              Remaining Battery Time: <span className="text-blue-600">{disChargingTime()} Minutes</span>
            </h2>
          </div>
          <div className="mt-6">
            <h3 className={`text-xl font-semibold ${props.charging ? 'text-green-600' : 'text-red-600'}`}>
              {props.charging ? 'Charging' : 'DisCharging'}
            </h3>
          </div>
        </div>
      );
}

export default Battery