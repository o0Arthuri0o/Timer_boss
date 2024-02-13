import style from './RoundBlock.module.scss'
const RoundBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor

  return (
    <div className={style['round-block']} style={{background: bgColor === '#212d3b' ? '#487d49' : '#000000'}} >RoundBlock</div>
  )
}

export default RoundBlock