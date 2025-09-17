import React from "react";
class Updating extends React.Component{
  constructor(props){
    super(props);
    this.state={count:0};
    console.log("Constructor: Component is being initialized");
  }
  componentDidMount(){
    console.log('componentDidMount: Component is created and added to DOM');
  }
  componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate: Component has been updated');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount: Component is about to removed from DOM');
  }
  increment=()=>{
    this.setState((prevState) =>({
        count: prevState.count+10
    }));
  };
    render(){
      console.log("Component is Rendering");
      return (
        <div>
            <h2>Counter:{this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>
        </div>
      );
    }
}
export default Updating;