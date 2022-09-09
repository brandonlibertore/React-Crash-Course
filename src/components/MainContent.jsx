import React from 'react'
import "../components_css/MainContent.css"
import ToDoItem from './ToDoItem'

export default function MainContent() {
  return (
    <div className='todo-list'>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
    </div>
  )
}
