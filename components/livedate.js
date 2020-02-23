import { useEffect } from 'react';
import { useState } from 'react';

function Livedate(){
    const [now,setNow]=useState(new  Date().toLocaleString())
    function updateNow() {
        setNow(new  Date().toLocaleString())
    }
    useEffect(()=>{
        //this effect will be fired on MOUNT of functional component, the array at the end will be the set of sensitive state variable that will trigger the useEffect
        const intervalId=setInterval (()=>{updateNow()},1000)
        //using return content will be fired once componentUNMOUNT
        return ()=> clearInterval(intervalId)
      },[])

    return (
    <span>{now}</span>
        )
}

export default Livedate
