import style from './TimerBlock.module.scss'


const TimerBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor


  return (
    <div className={style['timer-block']} >
      test
      {bgColor}
    </div>
  )
}

export default TimerBlock



