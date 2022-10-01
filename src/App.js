import React from "react";
import { useState } from "react";
import './CSS.css';


function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div  className="todo">

        <div className="text-box">
        <span className="text" style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        </div>

        <div className="button-box">
            <button className="button" onClick={() => markTodo(index)}>Done</button>{' '}
            <button className="button" onClick={() => removeTodo(index)}>Remove</button>
        </div>

      </div>
    );
}

function TO_DO({ addTodo }) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(value === "")
        {
            setValue("");
            return;
        }
        else
        {
            addTodo(value);
            setValue("");
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Add To Do</label>
            <input className="input" type={"text"} value={value} onChange={e => setValue(e.target.value)} placeholder=""/>
            <button className="add-button" onClick={"submit"}>Add</button>
        </form>
    );
}


//main app
const App = () => {

    const [todo, set_todo] = useState([]);

    const addTodo = text => {
        const newTodo = [...todo, { text }];
        set_todo(newTodo);
    }

    const markTodo = index => {
        const newTodo = [...todo];
        newTodo[index].isDone = true;
        set_todo(newTodo);
      };
    
      const removeTodo = index => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        set_todo(newTodo);
      };

    return (
        <div className="app">
            <h1 className="title">Aman's To-Do List</h1>

            <TO_DO addTodo={addTodo} />

            <div className="todo_list">
                {todo.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        markTodo={markTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>

        </div>
    );

}

export default App;