import './Button.css';

function Button(props){
    return(
        <button className="tombol" onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;