import { RootState } from '@/store';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';


const TimerBlock = () => {

  // const dispatch = useDispatch()

  const [isTap, setIsTap] = useState(false)
  const valuesFromStore = useSelector((state: RootState) => state.settings)
  // const currentValues = useSelector((state: RootState) => state.current)
  const [currentTime, setCurrentTime] = useState<number>(valuesFromStore.work*60)
  const [isWork, setIsWork] = useState(true)
  const [currentRoundsWithRest, setCurrentRoundsWithRest] = useState(0)
  const [currentRound, setCurrentRound] = useState(0)

  useEffect(() => {
    setCurrentTime(valuesFromStore.work*60)
  }, [valuesFromStore])

  useEffect(() => {
    // const workSeconds = valuesFromStore.work * 60
    // const restSeconds = valuesFromStore.rest * 60  


    const intervalOfWork = setInterval(() => {
      if(isTap && currentRound <= valuesFromStore.rounds && isWork) {
        setCurrentTime((currentTime) => (currentTime >= 1 ? currentTime - 1 : 0))
        if(currentTime === 0) {
          setCurrentRound(currentRound+1)
          setCurrentRoundsWithRest(currentRoundsWithRest+1)
          setIsWork(!isWork)
        }
      } 
    }, 1000)

    // const intervalOfRest = setInterval(() => {
    //   if(isTap && currentRound <= valuesFromStore.rounds && !isWork) {
    //     setCurrentTime((currentTime) => (currentTime >= 1 ? currentTime - 1 : 0))
    //     if(currentTime === 0) {
    //       // setCurrentRound(currentRound+1)
    //       setCurrentRoundsWithRest(currentRoundsWithRest+1)
    //       setIsWork(isWork)
    //     }
    //   } 
    // }, 1000)
    
    return () => {
      clearInterval(intervalOfWork)
      // clearInterval(intervalOfRest)
    }
  }, [isTap])

  const getTimeFormat = () => {
    const minute = Math.floor(currentTime/60)
    const seconds = currentTime-Math.floor(currentTime/60)*60

    if(seconds.toString().length === 1) {
      return `${minute}:0${seconds}`
    } 
    return `${minute}:${seconds}`
  }

  const getPercentage = () => {
    if(isWork) {
      return (currentTime / (valuesFromStore.work * 60)) * 100;
    } else {
      return (currentTime / (valuesFromStore.rest * 60)) * 100;
    }
  }


  return (
    <div className="h-3/5 bg-[#7469b5] rounded-2xl text-white flex flex-col justify-between items-center p-5 relative" onClick={()=>setIsTap(!isTap)} >

      <p className="bg-[#fcc73b] rounded-lg p-2 text-black font-semibold self-end" >reset</p>

      <CircularProgressbar value={getPercentage()} text={getTimeFormat()} strokeWidth={9} styles={buildStyles({
        textSize: '16px',
        pathColor: '#c4ff43',
        textColor: '#fff',
        trailColor: '#000',
      })} className='w-40 h-40 min-[340px]:w-72 min-[340px]:h-72 absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]' />


      <p className='text-black' >
        Tap to {isTap ? 'stop' : 'start'}
      </p>
    </div>


  )
}

export default TimerBlock