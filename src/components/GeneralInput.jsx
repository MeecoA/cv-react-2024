

function GeneralInput({value, handleOnchange}){
    

    return(
        <>
        <input type="text" value={value} onChange={handleOnchange}/>
        </>
    )
}

export default GeneralInput