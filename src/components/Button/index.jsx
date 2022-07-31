import './Button.css';

function Button(props){
    return(
        <button className="tombol" onClick={props.onClick} style={props.style}>{props.text}</button>
    )
}

export default Button;