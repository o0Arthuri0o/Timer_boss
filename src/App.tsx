import { useState } from "react"
import ProgressBlock from "./components/ProgressBlock"
import RoundBlock from "./components/RoundBlock"
import SettingsBlock from "./components/SettingsBlock"
import TimerBlock from "./components/TimerBlock"
import Modal from "./components/UI/Modal"

declare global {
  interface Window {
    Telegram: {
      WebApp: any
  }
}
}


function App() {

  

  const [isModal, setIsModal] = useState(false)

  return (
    <div className="flex flex-col gap-5 h-screen p-8">
      { isModal &&
        <Modal setIsModal={setIsModal} />
      }

      <TimerBlock/>

      <ProgressBlock/>

      <div className="flex justify-between gap-5 " >
        <RoundBlock/>
        <SettingsBlock  setIsModal={setIsModal}  />
      </div>
    </div>
  )
}

export default App
