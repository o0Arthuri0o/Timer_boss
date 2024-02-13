import style from './TimerBlock.module.scss'


const TimerBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor


  return (
    <div className={style['timer-block']} style={{background: bgColor === '#212d3b' ? '#487d49' : '#000000'}}>
      test
      {bgColor}
    </div>
  )
}

export default TimerBlock



