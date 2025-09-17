import React from "react";
function Propsptoc(props){
    console.log(props);
    return(
    <div>
        <h2>This is child component</h2>
        <h1>{props.getData.name}</h1>
        <h1>{props.getData.id}</h1>
    </div>
    )
}
export default Propsptoc;