//class based component using state
import React, { Component } from 'react'; 

class Home extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:"",
        };
        }
        getData=(event)=>{
            var value=event.target.value;
            var name=event.target.name;
            this.setState({
                [name]:value
            })
        }
        submitData=(event)=>{
            event.preventDefalut();
            console.log("Final State",this.state);

        }

    render() { 
        return (
            <div>
                <form>
                    <input type="text" onChange={this.getData} name='username'></input><br></br>
                    <input type="password" onChange={this.getData} name='password'></input><br></br>
                    <button onClick={this.submitData}>Login</button>
                </form>
            </div>
        );
    }
}

export default Home;
