import Layout from "../components/MyLayout"
import { useState, useEffect } from 'react'
import ResultElem from "../components/resultelem"
function TabellineApp() {

    const [results, setResults]=useState([])
    const [currentquestion, setCurrentquestion]=useState([2+Math.floor(Math.random()*8),2+Math.floor(Math.random()*8)])
    const [currentanswer, setCurrentanswer]=useState("")
    const [questionlist, setQuestionlist]=useState([]) //added state which includes all random  couples defined
    const [timespent, setTimespent]=useState(10) // to be used as a timer backto 0 
    
    const handleSubmit=(event)=>{
        var [a,b]=randomChoose()
        setCurrentquestion([a,b])        
        // this has to change to improve randomness
        event.preventDefault()
        setCurrentanswer('')
        setTimespent(10)
        addResults()
    }
    const randomGenerate =()=>{
        let x=[]
        for (var i=2;i<10;i++) {
            for (var j=2;j<10;j++) {
                x.push([i,j])
            }   
        }
        setQuestionlist(x)
    }

    const randomChoose =()=>{
        if (questionlist.length===0) {
            randomGenerate()
        }
        let chosen=Math.floor(Math.random()*questionlist.length)
        let [out1,out2]=questionlist[chosen]
        setQuestionlist((prevState)=>prevState.filter((x,i)=>((chosen!=i)?x:null)))
        //return random couple and remove it from the array
        return ([out1,out2])
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
        if (questionlist.length===0) {
            randomGenerate()
        }
        return ()=>clearInterval(timerOn)
     },[])

    const handleChange=(event)=>{
        setCurrentanswer(parseInt(event.target.value,10))
    }
    const displayLog = ()=>results.map((r)=>(<ResultElem text={r.text} ok={r.ok} />))
    
    return (<div className="tabelline">
                {/* <span> TEST:{questionlist.length}</span><br/> */}
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
