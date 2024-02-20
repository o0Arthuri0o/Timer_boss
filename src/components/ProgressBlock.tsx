import { RootState } from "../store"
import { useSelector } from "react-redux"

const ProgressBlock = () => {

  const currentValues = useSelector((state: RootState) => state.current)
  const valuesFromStore = useSelector((state: RootState) => state.settings)

  const getPercentage = () => {
    const totalTime = (valuesFromStore.rounds * valuesFromStore.work + (valuesFromStore.rounds-1) * valuesFromStore.rest)*60
    if(+(currentValues.progressTime/totalTime * 100).toFixed(1) > 100) return 100.0
    if(currentValues.progressTime === 0) return 0
    return +(currentValues.progressTime/totalTime * 100).toFixed(1)
  }

  return (
    <div className="h-16 bg-black rounded-xl flex justify-around relative overflow-x-hidden">
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      
      <div className="z-0 h-full transition-transform opacity-70 bg-[#c4ff43] absolute rounded-xl w-full " style={{transform: `translateX(${-100.0 + getPercentage()}%)`}} ></div>
      <div className="absolute text-white top-1/2 translate-y-[-50%] z-30 text-2xl" >{getPercentage()}%</div>
    </div>
  )
}

export default ProgressBlock