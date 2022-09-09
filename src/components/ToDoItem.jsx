import React from 'react'
import "../components_css/ToDoItem.css"



class ToDoItem extends React.Component {
  render(){
    return (
      <div className='todo-item'>
          <input type="checkbox" checked={this.props.completed}/>
          <p>{this.props.text}</p>
      </div>
    )
  }
}

export default ToDoItem
