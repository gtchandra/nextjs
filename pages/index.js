import Layout from "../components/MyLayout"
import { useState, useEffect } from 'react'
import ResultElem from "../components/resultelem"
function TabellineApp() {

    const [results, setResults]=useState([])
    const [currentquestion, setCurrentquestion]=useState([2+Math.floor(Math.random()*8),2+Math.floor(Math.random()*8)])
    const [currentanswer, setCurrentanswer]=useState("")
    const [timespent, setTimespent]=useState(10) // to be used as a timer backto 0 
    
    const handleSubmit=(event)=>{ 
        setCurrentquestion([2+Math.floor(Math.random()*8),2+Math.floor(Math.random()*8)])
        event.preventDefault()
        setCurrentanswer('')
        setTimespent(10)
        addResults()
    } 
    const addResults=()=>{
        let a=currentquestion[0] 
        let b=currentquestion[1] 
       
        if ((a*b)===currentanswer) {
            setResults((prevState)=>([{text:`${a}x${b}=${currentanswer} t=${timespent}`,ok:true},...prevState]))
        }
        else {
            setResults((prevState)=>([{text:`${a}x${b}=${currentanswer}`,ok:false},...prevState]))
        }

    }
    function  updateTimer () {
         setTimespent((prev)=>(prev>0?prev-1:0))
    }

useEffect (()=>{
        const timerOn=setInterval(()=>{updateTimer()},1000)
        return ()=>clearInterval(timerOn)
     },[])

    const handleChange=(event)=>{
        setCurrentanswer(parseInt(event.target.value,10))
    }
    const displayLog = ()=>results.map((r)=>(<ResultElem text={r.text} ok={r.ok} />))
    
    return (<div className="tabelline">
                <span className="fadein" >Solve: {currentquestion[0]}X{currentquestion[1]}</span><br/>
                <span className="timer">&gt;{timespent}&lt;</span><br/>
                <form autoComplete="off"  onSubmit={handleSubmit}>
                    <input className="tabelline" autoFocus name="currentanswer"  value={currentanswer} type="number" onChange={handleChange}/>
                    <button>ok</button>
                 </form>
                <div className="tabelline-log">
                  {displayLog()}
                </div>
            </div>)
}

export default function Tabelline() {
    return (<Layout content={TabellineApp()} />)
} 
