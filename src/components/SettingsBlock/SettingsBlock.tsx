import style from './SettingsBlock.module.scss'


const SettingsBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor


  return (
    <div className={style['settings-block']} style={{background: bgColor === '#212d3b' ? '#487d49' : '#000000'}} >SettingsBlock</div>
  )
}

export default SettingsBlock