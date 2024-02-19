import { RootState } from "../store"
import { useSelector } from "react-redux"

const ProgressBlock = () => {

  const currentValues = useSelector((state: RootState) => state.current)
  const valuesFromStore = useSelector((state: RootState) => state.settings)

  const getPercentage = () => {
    const totalTime = (valuesFromStore.rounds * valuesFromStore.work + (valuesFromStore.rounds-1) * valuesFromStore.rest)*60
    console.log(Math.floor(currentValues.progressTime/totalTime * 100))
    return Math.floor(currentValues.progressTime/totalTime * 100)
  }

  return (
    <div className="h-16 bg-black rounded-2xl flex justify-around relative">
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      
      <div className="h-full transition-all opacity-50 bg-[#c4ff43] absolute left-0 rounded-2xl " style={{width: `${getPercentage()}%`}} ></div>
      <div className="absolute text-white top-1/2 translate-y-[-50%] z-30 text-2xl" >{getPercentage()}%</div>
    </div>
  )
}

export default ProgressBlock