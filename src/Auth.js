//it is parent comopnent
import React,{useContext} from "react";
import{Usecontext} from './Usecontext';

function Auth(){
    const{user,logout}=useContext(Usecontext);
    return(
        <>
        <h2>Hey, {user.name}!</h2>
        
        <button onClick={logout}>Logout</button>
        </>
    );
}
export default Auth;