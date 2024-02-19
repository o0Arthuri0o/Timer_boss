import { RootState } from "../store/index"
import { useSelector } from "react-redux"


const RoundBlock = () => {

  const currentValues = useSelector((state: RootState) => state.current)
  const valuesFromStore = useSelector((state: RootState) => state.settings)

  return (
    <div className="min-h-[20vh] bg-[#fb5f22] rounded-2xl text-white w-1/2 flex flex-col gap-3 justify-center items-center" >
      <p className="text-3xl font-bold" >{currentValues.roundsWirtRest + '/' + (valuesFromStore.rounds + valuesFromStore.rounds - 1)}</p>
      <div className="bg-[#fcc73b] rounded-lg p-2 text-black text-2xl font-bold" >{currentValues.rounds} round</div>
    </div>
  )
}

export default RoundBlock