function ResultElem(props) {
    return (<p className={props.ok?"result-elem-ok":"result-elem-ko"}>{props.text}{props.ok?" 😎":" 👎"}</p>)
}
export default ResultElem