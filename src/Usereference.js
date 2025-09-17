import React,{useState,useEffect,useRef} from "react";

function Usereference(){
    const [inputValue, setInputValue] = useState("");
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    })
    return(
        <>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
        <h2>Here Render is count:{count.current}</h2>
        </>
    )
}
export default Usereference;