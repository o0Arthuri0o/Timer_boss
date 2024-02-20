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

  const bg = window.Telegram.WebApp.backgroundColor
  window.Telegram.WebApp.expand()
  const [isModal, setIsModal] = useState(false)


  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(() => {
    // Create an audio element and set the source to the audio file
    var audio = new Audio('../public/alarm.wav');
    audio.play();
  })

  return (
    <div className='flex flex-col gap-5 h-screen p-8' style={{background: bg}}>
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
