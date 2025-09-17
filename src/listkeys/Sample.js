function Sample(){
    const colors=["Red","Black","Pink","Yellow"];
    return(
        <>
        <h1>List in React</h1>
        <ul>
            {colors.map((color,index)=>(
                <li key={index}>{color}</li>
            ))}
        </ul>
        </>
    );
}
export default Sample;