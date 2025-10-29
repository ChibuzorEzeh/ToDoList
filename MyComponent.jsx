import React, {useState, useEffect, useRef} from "react"

function MyComponent (){ 
 const [isRunning, setIsRunning] = useState (false) ;
 const [elapsedTime, setElapsedTime] = useState (0) ; 
 const intervalIdRef = useRef (null);
 const startTimeRef = useRef (0) ;
 

 useEffect (() =>  {
      if (isRunning){
        intervalIdRef.current = setInterval (() =>{
            setElapsedTime (Date.now () - startTimeRef.current)
         }, 10)
      }
      return () => { 
         clearInterval (intervalIdRef.current)
      }
 }, [isRunning]) ; 

 function addZero(number){
   return number < 10 ? "0" + number : number ;
 }
 function start(){
   setIsRunning (true)
   startTimeRef.current = Date.now() - elapsedTime
 }
 function stop (){
   setIsRunning(false)
 }
 function reset (){ 
   setElapsedTime(0)
   setIsRunning(false)
 }
 function formatTime (){ 
   let hours = Math.floor(elapsedTime / Math.floor(1000 * 60 * 60)) 
   let minutes = Math.floor(elapsedTime / Math.floor(1000 * 60) % 60) 
   let seconds = Math.floor(elapsedTime / Math.floor(1000) % 60) 
   let milliseconds = Math.floor((elapsedTime % 1000) / 10) 
   
   return `${addZero(hours)}: ${addZero(minutes)}: ${addZero(seconds)}: ${addZero(milliseconds)}`
 }
return (
 <div className="stop-watch">
    <div className="display-time">
      {formatTime()}
    </div>
    <div className="controls">
      <button className="start-button" onClick={start}>Start</button>
      <button className="stop-button" onClick={stop}>Stop</button>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
 </div>
)
}
export default MyComponent

