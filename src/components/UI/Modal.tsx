import { useDispatch, useSelector } from "react-redux"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../../@/components/card"

import { Slider } from "../../../@/components/slider"
import { Separator } from "../../../@/components/separator"
import { Button } from "../../../@/components/button"


import { RootState } from "@/store"
import { Dispatch, SetStateAction, useState } from "react"
import { updateSettings } from "../../store/settingsSlice";
import { updateCurrent } from "../../store/currentSlice";
  

type ModalProp = {
    setIsModal: Dispatch<SetStateAction<boolean>>
  }



const Modal = ({setIsModal}: ModalProp) => {


    const dispatch = useDispatch()
    const valuesStore = useSelector((state: RootState) => state.settings)
    const [settingsValues, setSettingsValues] = useState({work: valuesStore.work, rest: valuesStore.rest, rounds: valuesStore.rounds})
 
    const saveNewSettings = () => {
        dispatch(updateSettings(settingsValues))
        dispatch(updateCurrent(settingsValues))
        localStorage.setItem('settings', JSON.stringify(settingsValues))
        setIsModal(false)
    }

  return (
    <>
        <Card className="absolute z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" >
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Set your time</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center" >

                <div className="w-full" >
                    <div className="flex justify-between" >
                        <div className="flex items-center gap-7 mb-5" >
                            <p className="font-semibold text-xl" >Work</p>
                            <div className="text-2xl flex justify-between min-w-[87px]" >
                                <p>{settingsValues.work}</p>
                                <p>min</p>
                            </div>
                            
                        </div>
                        <div className="flex" >
                            <Button variant="outline" size="icon" onClick={()=> setSettingsValues({...settingsValues, work: settingsValues.work - .5})} >
                                <MdKeyboardArrowLeft className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={()=> setSettingsValues({...settingsValues, work: settingsValues.work + .5}) } >
                                <MdKeyboardArrowRight  className="w-5 h-5"/>
                            </Button>
                        </div>
                    </div>
                    <Slider value={[settingsValues.work]} max={60} step={0.5} onValueChange={([e])=>setSettingsValues({...settingsValues, work: e})} />
                </div>
                <Separator className="m-4"/>

                <div className="w-full">
                    <div className="flex justify-between" >
                        <div className="flex items-center gap-7 mb-5" >
                            <p className="font-semibold text-xl" >Rest</p>
                            <div className="text-2xl flex justify-between min-w-[87px]" >
                                <p>{settingsValues.rest}</p>
                                <p>min</p>
                            </div>
                        </div>
                        <div className="flex" >
                            <Button variant="outline" size="icon" onClick={()=> setSettingsValues({...settingsValues, rest: settingsValues.rest - .5})} >
                                <MdKeyboardArrowLeft className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={()=> setSettingsValues({...settingsValues, rest: settingsValues.rest + .5}) } >
                                <MdKeyboardArrowRight  className="w-5 h-5"/>
                            </Button>
                        </div>
                    </div>
                    <Slider value={[settingsValues.rest]} max={60} step={0.5} onValueChange={([e])=>setSettingsValues({...settingsValues, rest: e})} />
                </div>
                <Separator className="m-4"/>

                <div className="w-full">
                <div className="flex justify-between" >
                        <div className="flex items-center gap-7 mb-5" >
                            <p className="font-semibold text-xl" >Rounds</p>
                            <p className="text-2xl" >{settingsValues.rounds}</p>
                        </div>
                        <div className="flex" >
                            <Button variant="outline" size="icon" onClick={()=> setSettingsValues({...settingsValues, rounds: settingsValues.rounds - 1})} >
                                <MdKeyboardArrowLeft className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="icon" onClick={()=> setSettingsValues({...settingsValues, rounds: settingsValues.rounds + 1}) } >
                                <MdKeyboardArrowRight  className="w-5 h-5"/>
                            </Button>
                        </div>
                    </div>
                    <Slider value={[settingsValues.rounds]} max={20} step={1} onValueChange={([e])=>setSettingsValues({...settingsValues, rounds: e})} />
                </div>
                <Separator className="m-4"/>

            </CardContent>
            <CardFooter className="flex gap-5">
                <Button variant="destructive" className="w-1/2" onClick={()=> setIsModal(false)} >Cancel</Button>
                <Button className="w-1/2" onClick={saveNewSettings} >Save</Button>
            </CardFooter>
        </Card>

        <div className='bg-black opacity-30 h-screen w-screen absolute top-0 left-0 z-40' >
        </div>
   </> 
  )
}

export default Modal