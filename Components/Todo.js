"use client"
import React, { useState } from 'react'

function Todo() {
  const [newItem, setnewItem] = useState("")
  const [todos, settodos] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()  //prevent refresh
    
     settodos(currentTodos=>{
      return [...currentTodos,//new todo array
      { 
        id:crypto.randomUUID(),
        title:newItem,
        completed:false
      },
      ]}
     );

     setnewItem("")
  }

  const toggletodo=(id,completed)=>{
       settodos(currentTodos=>{
         return currentTodos.map(todoo =>{
               if(todoo.id===id){
                 return {...todoo,completed}
               }
            return todoo   
         })
       })
  }

function deleteTodo(id){
     settodos(currentTodos=>{
      return currentTodos.filter(todoo =>todoo.id !=id)
       
     })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
         <div className="form-row">
           <label htmlFor='item' className='title'>New Item</label>
           <input value={newItem} type="text" id='item' onChange={e=>setnewItem(e.target.value)} className='databox'/> 
         </div>
         <button className="btn">Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className="list">
       <h2 className='warning'>{todos.length=== 0 && "No Todos"} </h2>
        {todos.map(todoo =>{
            return (
            <li key={todoo.id}>
             <label htmlFor="">
               <input type="checkbox" className='chk' checked={todoo.completed} onChange={e=>toggletodo(todoo.id,todoo.checked)} />
                      {todoo.title}
             </label>
             
             <button className="btn-danger" onClick={()=>deleteTodo(todoo.id)}>
               Delete
             </button>
            
           </li> )
        })}
       
       
      </ul>
    </>
  )
}

export default Todo