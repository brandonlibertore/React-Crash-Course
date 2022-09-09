import React from 'react'
import "../components_css/MainContent.css"
import ToDoItem from './ToDoItem'

export default function MainContent() {
  const toDosData = [
    {id: 1, text: "Take out the trash", completed: true},
    {id: 2, text: "Grocery Shopping", completed: false},
    {id: 3, text: "Clean tank", completed: false},
    {id: 4, text: "Mow lawn", completed: true},
    {id: 5, text: "Catch up", completed: false}
  ]
  const toDosDataUpdated = toDosData.map((toDos) => {
      return  <ToDoItem key={toDos.id} text={toDos.text} completed={toDos.completed}/>
  })
  return (
    <div className='todo-list'>
      {toDosDataUpdated}
    </div>
  )
}
