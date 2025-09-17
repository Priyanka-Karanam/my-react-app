import React from "react";
class Mounting extends React.Component{
  constructor(props){
    super(props);
    console.log("Constructor: Component is being initialized");
  }
  componentDidMount(){
    console.log('componentDidMount: Component is created and added to DOM');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate: Component has been updated');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount: Component is about to removed from DOM');
  }
    render(){
      console.log("Component is Rendering");
      return <h2>Phases of Life Cycle of React</h2>
    }
}
export default Mounting;