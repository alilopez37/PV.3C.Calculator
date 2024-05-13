import './Button.css'

function Button(props){
    const handlerClick = (event) => {
        if (event.target.name === 'C')
            props.setExp('')    
        else
            props.setExp(props.exp + event.target.name)    
    }

    return <button id="cal-btn" onClick={handlerClick} name={props.val}>{props.val}</button>
}

export default Button