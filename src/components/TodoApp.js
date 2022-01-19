import React, { useState } from 'react';



function TodoApp() {
    const [todos,settodos] = useState([])
    const [initialTodo, setinitialTodo] = useState({
        task:'',
        completed:false
    })

    const addTodo =()=>{
        const todosCopy= [...todos] 
        const index=todosCopy.findIndex((todo)=>{
            return todo.task === initialTodo.task
        })
        console.log(index);
        if(index  === -1){
            todosCopy.push(initialTodo)
            settodos(todosCopy)
        } else{
            console.error('Todo already exists')
        }
    }

    const handleChange=(event)=>{
        // console.log(event.target.value)
        const initialTodoCopy={...initialTodo}
        initialTodoCopy.task=event.target.value
        initialTodoCopy.completed=false;
        setinitialTodo(initialTodoCopy)
    }

    const completeTodo=(index)=>{
        console.log(index);
        if(index >= 0 && index < todos.length){
            const todosCopy=[...todos]
            todosCopy[index].completed = ! todosCopy[index].completed
            settodos(todosCopy)
            // if(todosCopy[index.completed === true]){
            //     todosCopy[index].completed = false
            // }else {
            //     todosCopy[index].completed = true
            // }            
        }
    }
    const deleteTodo =(index)=>{
        const todosCopy=[...todos]
        const filteredTodos = todosCopy.filter((todo,i)=>{
            return i !==index
        })
        settodos(filteredTodos)
    }
 
    return (
        <div>
            <div>
              <input type="text"
                name="task"
                value={initialTodo.task}
                onChange={(event)=>{
                    handleChange(event)
                }} />
                <button onClick={()=>{
                    addTodo()
                }}>Add Todo</button>
            </div>
            <div>
                {todos.length >0 ? todos.map((todo,index)=>{
                    return <div key={index}>
                        <span style={todo.completed ?
                        {
                            textDecoration : 'line-through'
                        }:{

                        }}>{todo.task}</span>

                        <button onClick={()=>{
                            completeTodo(index)
                        }}>completed</button>

                        <button onClick={()=>{
                            deleteTodo(index)
                        }}>
                            Delete
                        </button>
                    </div>
                }) : 'No Todos..'} 
            </div>
            
        </div>
    )
}

export default TodoApp