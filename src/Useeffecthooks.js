import React,{useEffect, useState} from "react";
function Useeffecthooks(){
   const[count,setCount]=useState(0);
    useEffect( ()=>{
        setTimeout( ()=>{
        setCount((count)=>count+1);
        },1000);
        //return()=>clearTimeout(timer)
    },[]);
    return(
        <div>
            <h2>useEffect of hooks</h2>
            <h3>Here I have Rendered {count} times</h3>
        </div>
    )
}
export default Useeffecthooks;