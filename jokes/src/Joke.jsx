export default function Joke(props){
    return(
        <>
            {props.setup && <b>Setup: {props.setup}</b>}
            <br/><br/>
            Punchline: {props.punchline}<br/><br/><hr/>
        </>
    )
}