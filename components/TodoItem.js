import React, { Component } from 'react'


export class TodoItem extends Component {
  render() {
    const opstyle ={
      background: "skyblue",
      width : "300px",
      height: "100px",
      display: "inline-block",
      margin: "10px 0 0 100px",
      padding: "10px 0 0 60px"
    };
    const imgstyle ={
      width: "50px",
      height: "50px",
      position: "relative",
      right: "40px",
    };
    const pstyle= {
      position: "relative",
      bottom: "55px",
      left: "20px"
    };

    const time ={
      position: "relative",
      bottom: "55px",
      left: "20px",
      fontSize: "0.6rem",
      color: "gray"
    }
    return (
        <div style={opstyle}>
          <img src={this.props.todo.img} alt='images' style={imgstyle}></img>
            <p style={pstyle}>{this.props.todo.title}</p>
            <p style={pstyle}>{this.props.todo.comment}</p>
            <p style={time}>{this.props.todo.time}</p>
        </div>
    )
  }
}


export default TodoItem
