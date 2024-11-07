

function Inputs({value, name, handleOnchange}){
    

    return(
        <div>
        <input type="text" value={value} onChange={handleOnchange} name ={name}/>
        </div>
    )
}

export default Inputs