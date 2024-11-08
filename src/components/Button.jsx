

function Button({handleClick,btnText}){
    return(
        <div>
        <button onClick={handleClick} >{btnText}</button>
        </div>
    )
}

export default Button