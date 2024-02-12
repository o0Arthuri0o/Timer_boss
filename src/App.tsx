
import './App.scss'
import ProgressBlock from './components/ProgressBlock/ProgressBlock'
import RoundBlock from './components/RoundBlock/RoundBlock'
import SettingsBlock from './components/SettingsBlock/SettingsBlock'
import TimerBlock from './components/TimerBlock/TimerBlock'

declare global {
  interface Window {
    Telegram: {
      WebApp: any
    };
  }
}


function App() {

  return (
    <div className='app'>

      <TimerBlock/>

      <ProgressBlock/>

      <div className='bottom-wrapper' >
        <RoundBlock/>
        <SettingsBlock/>
      </div>
    </div>
  )
}

export default App
