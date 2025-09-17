import Component1 from "./Component1";
import Component2 from "./Component2";
function Components(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return<Component1></Component1>
    }
    else{
        return<Component2></Component2>
    }
}
export default Components;