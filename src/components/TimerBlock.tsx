import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const TimerBlock = () => {

  const percentage = 40
  const min = "22:00"

  return (
    <div className="h-3/5 bg-[#7469b5] rounded-2xl text-white flex justify-center items-center p-5" >

      
    <CircularProgressbar value={percentage} text={min} strokeWidth={9} styles={buildStyles({
      textSize: '16px',
      pathColor: '#c4ff43',
      textColor: '#fff',
      trailColor: '#000',
    })} className='w-72 h-72' />
     
    </div>


  )
}

export default TimerBlock