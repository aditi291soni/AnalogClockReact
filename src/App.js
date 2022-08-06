import React, { useState,useEffect,useRef } from 'react';


import './App.css'

const App = () => {
  
  const d=new Date()
  
  
  
  const mins = d.getMinutes()
const secs = d.getSeconds()
const hrss = d.getHours()

const [date, setdate] = useState(new Date());
const [hrs, sethrs] = useState(hrss);
const [min, setmin] = useState(mins);
const [sec, setsec] = useState(secs);
const update=()=>{

  setdate(d)
  if(hrss>12){
    sethrs(hrss-12)
  }
  else{
    sethrs(hrss)
  }

setmin(mins)
setsec(secs)


}
useEffect(() => {
 const interval= setInterval(() => {
    update()
    
  },1000);
  console.log(date,hrs,min,sec);
  return()=>{
    clearInterval(interval)
  }
  
  
}, [date]);


  return (
    <div>
    <div class="page-header"> Analog Clock </div>
<div   class="clock">

	<div style={{transform:`rotate(${30*hrs+min*0.5}deg)`}} class="hour"></div>
	<div style={{transform:`rotate(${6*min}deg)`}} class="min"></div>
	<div style={{transform:`rotate(${6*sec}deg)`}} class="sec"></div>
</div>

    </div>
  );
}

export default App;