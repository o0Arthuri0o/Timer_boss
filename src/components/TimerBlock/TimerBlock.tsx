import style from './TimerBlock.module.scss'


const TimerBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor


  return (
    <div className={style['timer-block']} style={{background: bgColor === '#212d3b' ? '#ffffff' : '#212d3b'}}>
      test
      {bgColor}
    </div>
  )
}

export default TimerBlock



