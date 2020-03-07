import Layout from "../components/MyLayout"
import { useState, useEffect } from 'react'
import ResultElem from "../components/resultelem"
function TabellineApp() {

    const [results, setResults]=useState([])
    const [currentquestion, setCurrentquestion]=useState([2+Math.floor(Math.random()*8),2+Math.floor(Math.random()*8)])
    const [currentanswer, setCurrentanswer]=useState("")
    const [questionlist, setQuestionlist]=useState([]) //added state which includes all random  couples defined
    const [timespent, setTimespent]=useState(10) // to be used as a timer backto 0 
    const emojirank=["😪","🤨","😐","😅","😉","😀","😄","😁","😎","🤩","🤩"]
    const [rank,setRank]=useState("")

    const handleSubmit=(event)=>{
        var [a,b]=randomChoose()
        setCurrentquestion([a,b])        
        // this has to change to improve randomness
        event.preventDefault()
        setCurrentanswer('')
        setTimespent(10)
        addResults()
        dumpTolocal()
    }
    const dumpTolocal=()=>{
        if (results.length>0) {
                let resAvg=results.reduce((acc,val)=>{
                    return val.ok?acc+val.time:acc-15
            },0)/results.length
            let statView =resAvg>=0?emojirank[Math.round(resAvg)]:emojirank[0]
            setRank(statView)
        }
    }
    const randomGenerate =()=>{
        let x=[]
        for (var i=2;i<10;i++) {
            for (var j=2;j<10;j++) {
                x.push([i,j])
            }   
        }
        setQuestionlist([...x])
    }

    const randomChoose =()=>{
        if (questionlist.length===1) {
            randomGenerate()
            //state variable scope issue
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
        let cnt=results.length

        if ((a*b)===currentanswer) {    
            setResults((prevState)=>([{id:cnt, text:`${a}x${b}=${currentanswer}`,rank:emojirank[timespent],time:timespent,ok:true},...prevState]))
        }
        else {
            setResults((prevState)=>([{id:cnt, text:`${a}x${b}=${currentanswer}`,ok:false},...prevState]))
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
    const displayLog = ()=>results.map((r,i)=>(<ResultElem pos={i} text={r.text} rank={r.rank} ok={r.ok} />))
    
    return (<div className="tabelline">
    
<span className="fadein" >{currentquestion[0]}X{currentquestion[1]}?  your rank:{rank}</span><br/>
                <span className="timer">{emojirank[timespent]}</span><br/>
                <form autoComplete="off"  onSubmit={handleSubmit}>
                    <input className="tabelline" autoFocus name="currentanswer"  value={currentanswer} inputMode="decimal" onChange={handleChange}/>
                    <button>ok</button>
                 </form>
                <div className="tabelline-log">
                    <ul >
                        {displayLog()}
                    </ul>
                </div>
            </div>)
}

export default function Tabelline() {
    return (<Layout content={TabellineApp()} />)
} 
