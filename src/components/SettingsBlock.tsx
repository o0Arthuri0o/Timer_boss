
import { RootState } from "../store";
import { Dispatch, SetStateAction } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

type SettingsBlockProp = {

  setIsModal: Dispatch<SetStateAction<boolean>>
}

const SettingsBlock = ({setIsModal} : SettingsBlockProp) => {

  const currentValues = useSelector((state: RootState) => state.current)

  const openModal = () => {
    if(!currentValues.isTap) {
      setIsModal(true)
    }
  }

  return (
    <div onClick={openModal} className='min-h-[20vh] bg-[#79bae2] rounded-2xl text-white w-1/2 flex justify-center items-center ' >
      <IoSettingsSharp className="w-20 h-20" /> 
    </div>
  )
}

export default SettingsBlock