import React from 'react';

const taskStyle = {borderRadius: '1px 2px 2px 4px', margin: '2px', border: '1px solid grey'}

const Todos = ({todos, handleUpdatedTask, handleUpdatedDescriptionId, handlePriority, updateTask, activeIndex, updatedTask, handleDelete, toggleComplete}) => {
        
    return (
        <div > 
            {todos.map((item, index) => (
                <div key = {index} id = {index}  style = {taskStyle}>
        
                    <div > Task : {item.value}    </div>
                    <div>
                    
                        <label>Task:</label>
                        <input
                            style = {{outlineStyle: 'none'}}
                            label = 'Task: '
                            placeholder = {todos[index].value}
                            id = {index}
                            value = {index.toString() === activeIndex  ? updatedTask : todos[index].value}
                            onChange = {(id) => handleUpdatedTask(id)}
                            onClick = {(id) => handleUpdatedDescriptionId(id)}
                        />

                        <label>Priority: {item.priority}</label>
                        <select id = {index} onChange = {handlePriority}>
                            <option> Low </option>
                            <option> Medium </option>
                            <option> High </option>
                        </select>
                    </div>
                    <button 
                        id = {index} 
                        disabled = {index.toString() === activeIndex ? false : true}
                        onClick = {updateTask}
                    > Update Task</button>

                    <button onClick = {handleDelete} > delete todo</button>
                    <div id = {index} onClick = {(id) => toggleComplete(id)}  > Done: {item.complete.toString()}    </div>
                    <button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</button>

                </div>
            ))}
                
        </div>
    
    )
}


export default Todos;