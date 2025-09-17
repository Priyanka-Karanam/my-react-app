import React from "react";
function Propsctop(props){
    var student=[{
        name:"Prya",
        id:21
    },
    {
     name:"venky",
     id:29
    } ]
     props.getDetails(student);

    return(
        <div>
            <h2>This is child component</h2>
        </div>
    )
}
export default Propsctop;