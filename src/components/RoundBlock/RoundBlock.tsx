import style from './RoundBlock.module.scss'
const RoundBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor

  return (
    <div className={style['round-block']}  style={{background: bgColor === '#212d3b' ? '#ffffff' : '#212d3b'}} >RoundBlock</div>
  )
}

export default RoundBlock