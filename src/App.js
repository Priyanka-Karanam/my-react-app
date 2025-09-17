//**1Sampile React app */

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//------------------------------------------------
//**class based component**
import React from 'react';
import Democomponent from './components/Democomponent';

function App() {
  return (
    <div className="App">
      <Democomponent />
    </div>
  );
}

export default App;
//-----------------------------------------
//**function based component**

// import React from "react";
// import Demofunction from './components/Demofunction';
// function App(){
//   return(
//     <h1>This is function based component</h1>
//   )   
  
// }
// export default App;
//------------------------------------------------------
//**Render Menthod class based using state**
// import React from "react";
// import './App.css';
// import Home  from "./components/Home";
// function  App(){
// return(
//   <div className="App">
//     <h2>This is first Render Method using class based using state</h2>
//     <Home></Home>
//   </div>

// )
// }
// export default App;
//-----------------------------------------------
//**function based using state**
// import React from "react";
// import Funstate from "./components/Funstate";
// import './App.css';
// function App(){
//   return(
//     <div className="App">
//       <h3>This is function based component using state</h3>
//       <Funstate></Funstate>
//     </div>
//   )
// }
// export default App;
//--------------------------------------------------

//**parent to child components props**
// import React from "react";
// import Propsptoc from './components/Propsptoc';
// import './App.css';

// function App(){
//   var emp={
//     name:"geetha",
//     id:3
//   }
//   return(
//     <div>
//       <h1>This is parent component</h1>
//       <Propsptoc getData={emp}></Propsptoc>
//     </div>
//   )
// }
// export default App
//------------------------------------------------
// **child to parent components props**
// import React from "react";
// import Propsctop from './components/Propsctop';
// import './App.css';

// function App(){
//   var getstudent=(std) =>{
//     console.log(std);
//   }

//   return(
//     <div className="App">
//       <h2>This is parent component</h2>
//   <Propsctop getDetails={getstudent}></Propsctop> 
//     </div>
//   );
// }
// export default App;
//--------------------------------------------------------

//*Life Cycle of react mounting**
// import React from "react";
// import Mounting from './Mounting';
// import './App.css';

// function App(){

//   return(
//     <div className="App">
//       <h2>This is Life Cycle Of React</h2>
//       <Mounting></Mounting>
//     </div>
//   );
// }
// export default App;
//---------------------------------------------
//**Life Cycle of react Updating */
// import React from "react";
// import './App.css';
// import Updating from "./Updating";

// function App(){

//   return(
//     <div className="App">
//       <h2>This is Life Cycle Of React</h2>
//       <Updating></Updating>
//     </div>
//   );
// }
// export default App;
//-----------------------------------------------

//UseState in hooks
// import React from "react";
// import Usestatehooks from './Usestatehooks';

// function App(){
//   return(
//     <div ><h1>This is UseState in hooks</h1>
//     <Usestatehooks></Usestatehooks>
//     </div>
  
//   )
// }
// export default App;
//---------------------------------------------------
//UseEffect in hooks
// import React from "react";
// import Useeffecthooks from "./Useeffecthooks";
// function App(){
//   return(
//     <div><h1>This is UseEffect of Hooks</h1>
//     <Useeffecthooks></Useeffecthooks>
//     </div>
//   )
// }
// export default App;
//-------------------------------------------------------

// Usecontext in hooks
// import React,{useContext} from "react";
// import{Usecontext} from './Usecontext';
// import Auth from './Auth';
// import Unauth from './Unauth';
// function App(){
//   const{user}=useContext(Usecontext);
//   return user.auth? <Auth/>:<Unauth/>;
// }
// export default App;
//---------------------------------------------------------

//Usereference in hooks
// import React from "react";
// import Usereference from "./Usereference";
// function App(){
//   return(
//     <div><h1>This is Usereference of Hooks</h1>
//     <Usereference></Usereference>
//     </div>
//   )
// }
// export default App;
//-------------------------------------------------
//GMS project
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LoginPage from "./Loginpage";
// import RegisterPage from "./Registerpage";
// import './App.css';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <h1>GMS App</h1>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
//-------------------------------------------------------------

//useReducer in hooks//
// import React from "react";
// import Usereduce from './Usereduce';
// function App(){
//     return(
//         <div><h1>UseReducer hooks</h1>
//         <Usereduce></Usereduce>
//         </div>
//     )
// }
// export default App;
//--------------------------------------------------------

//useCallback in hooks
// import React from "react";
// import Usecall from './Usecall';
// function App(){
//   return(
//     <div className="root">
//       <Usecall></Usecall>
    
//     </div>
//   )
// }
// export default App;
//----------------------------------------------

//useMemo in hooks
// import Usememo from "./Usememo";
// function App(){
//     return(
//         <div className="root">
//             <Usememo></Usememo>
//         </div>
//     )
// }
// export default App;
//-------------------------------------------------------------
//Employee addList task using hooks
// import React,{useState} from "react";
// import Employees from "./Employees";
// function App(){
//     const [employees,setEmployees]=useState([]);

//     // taking input fileds 
//     const [name,setName]=useState("");
//     const [position,setposition]=useState("");
//     // adding the new empolyees
//     const handleEmployees=()=>{
//         if(name&&position){
//             const newEmployees={name,position};
//             setEmployees([...employees, newEmployees]);
//             setName("");
//             setposition("");
//         };
//     };
//         return(
//             <div className="App">
             
//                 <h1>
//                     EmployeeManagement
//                 </h1>
//                 <div> <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Please Enter name " value={name}></input><br></br><br></br>
//                 <input
//               type="text"
//               placeholder="Enter Your position"
//               value={position}
//               onChange={(e) => setposition(e.target.value)}
//             /><br></br><br></br>
//             <button onClick={handleEmployees}>Add Employee</button>
//                 </div>
//                 <Employees employees={employees} />
               
//             </div>
            
//         )
//     }
//    export default App;
//-------------------------------------------------------------------------

//* Conditional Rendering*//
// import React from "react";
// import Components from "./conditionalRendering/Components";
// function App(){
//     return(
//         <div><h1>Conditional Rendering</h1>
//         <Components></Components>
//         </div>
//     )
// }
// export default App;
//-------------------------------------------------------------------------

//*List and Keys*//
// import Sample from "./listkeys/Sample";

// function App(){
//     return(
//         <div className="root">
//             <Sample></Sample>
//         </div>
//     )
// }
// export default App;
//---------------------------------------------------------

//Accessbility Fragment*//
// import React from "react";
// import Fragment from "./Fragment";
// function App(){
//     return(
//         <div>
//             <Fragment></Fragment>
//         </div>
//     )
// }
// export default App;
//-----------------------------------------------------------

//Accessbility by Semantic Elements*//
// import React from "react";
// import Semantic from "./Semantic";
// function App(){
//     return(
//         <div>
//             <Semantic></Semantic>
//         </div>
//     )
// }
// export default App;
//-------------------------------------------------------------------
//*CodeSplitting*//
// import React, { useState } from 'react'; 
// import LazyButton from './codesplitting/LazyButton';
// const App = () => {
// const [showButton, setShowButton] = useState(false);
// return (
// <div>
// <button onClick={() => setShowButton(true)}>Load Button</button>
// {showButton && <LazyButton />}
// </div>
// );
// };
// export default App;
//---------------------------------------------------------------------

//*Event handlers OnClick*//
// import React from "react";
// import Onclickp from "./eventhandlers/Onclickp";
// function App(){
// return(
//     <div>
//         <h1>Onlclick</h1>
//         <Onclickp></Onclickp>
//     </div>
//     )
// }
// export default App;
//--------------------------------------------------------------
//OnMouse Event
// import React from "react";
// import Onmouse from "./eventhandlers/Onmouse";
// function App(){
// return(
//     <div>
//         <h1>Onmouse</h1>
//         <Onmouse></Onmouse>
//     </div>
//     )
// }
// export default App;
//-----------------------------------------------------
//Onkey Event
// import React from "react";
// import Onkey from "./eventhandlers/Onkey";
// function App(){
// return(
//     <div>
//         <h1>Onkey</h1>
//         <Onkey></Onkey>
//     </div>
//     )
// }
// export default App;
//-------------------------------------------------------------
//*Onsubmit**//
// import React from "react";
// import Onsubmit from "./eventhandlers/Onsubmit";
// function App(){
// return(
//     <div>
//         <h1>Onsubmit</h1>
//         <Onsubmit></Onsubmit>
//     </div>
//     )
// }
// export default App
//---------------------------------------------------------------------
//**ErrorBoundary */
// import React from "react";
// import Eboundary from "./errorBoundary/Eboundary";
// import Counter from "./errorBoundary/Counter";
// const App=()=>{
//    return(
//     <Eboundary>
//     <Counter/>
//     </Eboundary>
//    );
// };
// export default App;
//------------------------------------------------------------------------

//**React Routing */
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './routingReact/Layout';
// import Home from './routingReact/Home';
// import Blogs from './routingReact/Blogs';
// import Contact from './routingReact/Contact';
// import Nopage from './routingReact/Nopage';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="contact" element={<Contact />} />
//                     <Route path="*" element={<Nopage />} />
//                 </Route>
//             </Routes>
//         </Router>
//     );
// }

// export default App;

