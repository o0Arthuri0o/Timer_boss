import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const TimerBlock = () => {

 
 

  return (
    <div className="h-3/5 bg-[#7469b5] rounded-2xl text-white flex flex-col justify-between items-center p-5 relative" >

      <p className="bg-[#fcc73b] rounded-lg p-2 text-black font-semibold self-end" >reset</p>

      <CircularProgressbar value={1} text={'22:00'} strokeWidth={9} styles={buildStyles({
        textSize: '16px',
        pathColor: '#c4ff43',
        textColor: '#fff',
        trailColor: '#000',
      })} className='w-72 h-72 absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]' />


      <p className='text-black' >
        Tap to {'start'}
      </p>
    </div>


  )
}

export default TimerBlock