import './Button.css';

function Button(props){
    return(
        <button className="tombol">{props.text}</button>
    )
}

export default Button;