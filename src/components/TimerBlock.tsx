import { RootState } from '@/store';
import { updateIsTap, updateRounds, updateRoundsWithRest } from '../store/currentSlice';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';


const TimerBlock = () => {

  const dispatch = useDispatch()

  // const [isTap, setIsTap] = useState(false)
  const valuesFromStore = useSelector((state: RootState) => state.settings)
  const currentValues = useSelector((state: RootState) => state.current)
  const [currentTime, setCurrentTime] = useState<number>(valuesFromStore.work*60)
  const [isWork, setIsWork] = useState(true)
  // const [currentRoundsWithRest, setCurrentRoundsWithRest] = useState(0)
  // const [currentRound, setCurrentRound] = useState(0)
  const audio = new Audio('../../alarm.wav')
  
  

  useEffect(() => {

    const intervalOfWork = setInterval(() => {
      if(currentValues.isTap && currentValues.rounds < valuesFromStore.rounds && isWork) {
        setCurrentTime((currentTime) => (currentTime >= 1 ? currentTime - 1 : 0))

        if(currentTime === 0) {
          dispatch(updateRoundsWithRest(currentValues.roundsWirtRest + 1))
          dispatch(updateRounds(currentValues.rounds+1))
          setIsWork(!isWork)
          setCurrentTime(valuesFromStore.rest*60)
          audio.play()
        }
      } 
    }, 1000)
    
    return () => {
      clearInterval(intervalOfWork)
    }
  }, [isWork, currentTime, currentValues])



  useEffect(() => {
    const intervalOfRest = setInterval(() => {
      if(currentValues.isTap && currentValues.rounds < valuesFromStore.rounds && !isWork) {
        setCurrentTime((currentTime) => (currentTime >= 1 ? currentTime - 1 : 0))
        if(currentTime === 0) {
          dispatch(updateRoundsWithRest(currentValues.roundsWirtRest + 1))
          setIsWork(!isWork)
          setCurrentTime(valuesFromStore.work*60)
          audio.play()
        } 
      } 
    }, 1000)

    return () => {
      clearInterval(intervalOfRest)
    }
  }, [isWork, currentTime, currentValues])

  useEffect(() => {
    if(currentValues.rounds === valuesFromStore.rounds){
      dispatch(updateRoundsWithRest(0))
      dispatch(updateRounds(0))
      dispatch(updateIsTap(false))
      setIsWork(true)
    }
  }, [currentValues, isWork])

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

  const resetTimer = () => {
    dispatch(updateRoundsWithRest(0))
    dispatch(updateRounds(0))
    dispatch(updateIsTap(false))
    setIsWork(true)
    setCurrentTime(valuesFromStore.work*60)
  }

  return (
    <div className="h-3/5 min-h-[230px]  bg-[#7469b5] rounded-2xl text-white flex flex-col justify-between items-center p-5 relative" onClick={()=>dispatch(updateIsTap(!currentValues.isTap))} >
      

      <p className="bg-[#fcc73b] rounded-lg p-2 text-black font-semibold self-end" onClick={(e) => {e.stopPropagation(),resetTimer()}} >reset</p>


      <CircularProgressbar value={getPercentage()} text={getTimeFormat()} strokeWidth={9} styles={buildStyles({
        textSize: '16px',
        pathColor: '#c4ff43',
        textColor: '#fff',
        trailColor: '#000',
      })} className='w-32  min-[350px]:w-60 min-[400px]:w-72  absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]' />

      {currentValues.isTap && isWork && <p className='font-bold' >work...</p>}
      {currentValues.isTap && !isWork && <p className='font-bold' >rest...</p>}
      
     
    </div>


  )
}

export default TimerBlock