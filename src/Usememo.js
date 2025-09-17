import React,{useState,useMemo} from "react";

function Usememo(){
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");

    //it recalculates when name changes

    const FullName=useMemo(()=>{
        return name;

    },[name]);
    return(
        <>
        <p>count :{count}</p>
        <button onClick={()=>setCount(count+1)}>increment count</button>
         <p>
            Fullname:{name}</p>   

            <input type="text" value={FullName} onChange={(e)=>setName(e.target.value)}></input>
        </>
    )

}
export default Usememo;