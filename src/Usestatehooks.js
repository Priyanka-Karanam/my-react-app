import React,{useState} from "react";
function App(){
    const[color,setcolor]=useState("Pink");
    return(
        <div><h1>UseState in hooks{color}</h1>
        <button onClick={()=>setcolor("Red")}>Color</button>
        </div>
    )
}
export default App;