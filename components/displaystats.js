import ResultElem from "../components/resultelem"
//this should display a constant statistics: how many hits on different timer values 
const Displaystats = props =>{ 
    const displa = ()=>props.content.map((r,i)=>(<ResultElem pos={i} text={r.text} rank={r.rank} ok={r.ok} />))
    return (
    <div>{displa()}</div>
        )
}
export default Displaystats;
