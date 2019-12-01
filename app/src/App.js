import React from 'react';
import {useState} from 'reinspect';
import Select from 'react-select';

const taskStyle = {borderRadius: '1px 2px 2px 4px', margin: '2px', border: '1px solid grey'}
 
const options = [
    { value: 'low', label: "Low" },
    { value: 'medium', label: "Medium" },
    { value: 'high', label: "High"}
];

function App (){
    const [task, setTask] = useState('', "Task");
    const [todos, setTodos] = useState([], "Todos");
    const [priority, setPriority] = useState('', "Priority");
    const [updatedTask, setUpdatedTask] = useState('', "Updated Task");
    const [activeIndex, setActiveIndex] = useState('', 'Active Index');
    
    
    const initial = {selectedKey: null};
    const [dropDownVal, setDropDownVal] = useState(initial, "DropDownValues")
    
    const updateDropDown = value => {
        setDropDownVal({...dropDownVal, selectedKey: value});  
    }
    
    const handleChange = e => {
        const {value} =  e.target;    
        setTask(value); 
    }

    const handleActiveIndex = (e) => {
        const {value, id} = e.target;

       setActiveIndex(id);

        // initialize input field with current todo value
        // if(value !== undefined) causes "Cannot read property 'value' of undefined'
        //   truthy / falsey   to the rescue
        if(value) setUpdatedTask(todos[id].value)
    }
    
    const handleUpdatedTask = (e) => {
        const {value, id} = e.target;

        if(activeIndex === id) {
            setUpdatedTask(value);
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTask = {
            value: task,
            priority: dropDownVal.selectedKey,
            complete: false,
        }

        if(task !== '' && priority !== null) {
            setTodos([...todos, newTask]);
            setTask('');
            setDropDownVal(initial);
        }        
    }  
    
    const clearTodos = () => {
        setTodos([]);
        resetPriorityTaskIndex();
    }
    
    const handleDelete = (id) => {
        todos.splice(id, 1);
        setTodos([...todos]);
    }
    
    const toggleComplete = (e) => {
        let {id} = e.target
        
        todos[id].complete = !todos[id].complete;
        setTodos([...todos]);
    }
    
    const handlePriority = async (e) => {    
        const {value} =  e.target;    
        return await setPriority(value);        
    }
    
    const updateTask = (e) =>{
        let {id} = e.target

        if(activeIndex === id ){
            if(priority !== ''){
                todos[id].priority = priority;
            }
            if(updatedTask) {
                todos[id].value = updatedTask;
            }
            setTodos([...todos]);
        } 
        
        resetPriorityTaskIndex();
    }

    const resetPriorityTaskIndex = () => {
        setPriority('');
        setActiveIndex('');
    }

  return (
   
    <div style = {{width: '30%', margin: '10px auto'}}> 
        <h3> Todos with controlled components using hooks</h3>     
        <div> 
            <label> Choose todo priority:</label>
            <Select
                width = '50px'
                value = {options.filter(({value}) => value === dropDownVal.selectedKey)}
                onChange={({ value }) => updateDropDown(value)}
                options = {options}
            />
            
            <label> enter todo description: </label>
            <input
                style = {{width: '100%', outlineStyle: 'none'}}
                placeholder = 'the placeholder text'
                value = {task}
                onChange = {handleChange}          
            />
        
            <form  onSubmit = {handleSubmit}>
                <div> 
                    <div>
                        <button type = 'submit' > Add Todo </button> 
                        <button onClick = {clearTodos}> Clear All Todos</button>                                   
                    </div>
                </div>
                    
            </form>
        </div>
    
        <div > 
            {todos.map((item, index) => (
                <div key = {index} id = {index}  style = {taskStyle}>
        
                    <div > Task : {item.value}    </div>
                    <div> index is of type : {typeof(index)}</div>
                    <label>Task:</label>
                    <input
                        style = {{outlineStyle: 'none'}}
                        label = 'Task: '
                        placeholder = {todos[index].value}
                        id = {index}
                        value = {index.toString() === activeIndex  ? updatedTask : todos[index].value}
                        onChange = {(id) => handleUpdatedTask(id)}
                        onClick = {(index) => handleActiveIndex(index)}
                    />
                    <div id = {index} onClick = {(id) => toggleComplete(id)}  > Done: {item.complete.toString()}    </div>
                    <div>Priority: {item.priority}</div>

                    <select id = {index} onChange = {handlePriority} onClick = {(index) => handleActiveIndex(index)} >
                        <option> Low </option>
                        <option> Medium </option>
                        <option> High </option>
                    </select>

                    <button 
                        id = {index} 
                        disabled = {index.toString() === activeIndex ? false : true}
                        onClick = {updateTask}
                    > Update Task</button>
                    <button onClick = {handleDelete} > delete todo</button>
                    <button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</button>

                </div>
            ))}
        
        </div>  
        
    </div>
   
  );
}

export default App;

