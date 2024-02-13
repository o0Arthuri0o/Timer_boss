import style from './SettingsBlock.module.scss'


const SettingsBlock = () => {

  const bgColor = window.Telegram.WebApp.backgroundColor


  return (
    <div className={style['settings-block']} style={{background: bgColor === '#212d3b' ? '#ffffff' : '#212d3b'}} >SettingsBlock</div>
  )
}

export default SettingsBlock