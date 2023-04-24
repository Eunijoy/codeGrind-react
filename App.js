import React, { Component } from "react";
import Todos from './components/Todos';
import './App.css';


class App extends Component{
  state = {
    todos: [
      {
        id:1,
        title: "Monkey D. Luffy",
        comment: "React is amazing",
        time: "January 25, 2022 3:00 PM",
        img: "https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
      },
      {
        id:2,
        title: "Roronoa Zoro",
        comment: "This website is cool",
        time: "January 25, 2022 3:00 PM",
        img: "https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        id:3,
        title: "Sanji Vinsmoke",
        comment: "I love React Js",
        time: "January 25, 2022 3:00 PM",
        img: "https://images.unsplash.com/photo-1638016213453-ea0be6a7c938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
      }
    ]
  }
  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;