import { Dispatch, SetStateAction } from "react";
import { IoSettingsSharp } from "react-icons/io5";

type SettingsBlockProp = {

  setIsModal: Dispatch<SetStateAction<boolean>>
}

const SettingsBlock = ({setIsModal} : SettingsBlockProp) => {


  return (
    <div onClick={()=>setIsModal(true)} className='min-h-[20vh] bg-[#79bae2] rounded-2xl text-white w-1/2 flex justify-center items-center ' >
      <IoSettingsSharp className="w-20 h-20" /> 
    </div>
  )
}

export default SettingsBlock