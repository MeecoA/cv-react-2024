

function Inputs({value, name, handleOnchange}){
    
    return(
        <div>
        <input type="text" value={value} onChange={handleOnchange} name ={name} autoComplete="true"/>
        </div>
    )
}

export default Inputs