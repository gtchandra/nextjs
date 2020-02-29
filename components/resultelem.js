function ResultElem(props) {
    return (<li className={props.ok?"result-elem-ok":"result-elem-ko"} key={props.pos}>{props.text}{props.ok?props.rank:" 👎"}</li>)
}
export default ResultElem