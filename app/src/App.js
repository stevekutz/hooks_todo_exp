import React from 'react';
import {useState} from 'reinspect';
// import Select from 'react-select';
import AddClearForm from './comp/AddClear';
import NewTodo from './comp/NewTodo';
import Todos from './comp/Todos';
import SelectDropDown from './comp/SelectDropDown';

// const options = [
//     { value: 'Low', label: "Low" },
//     { value: 'Medium', label: "Medium" },
//     { value: 'High', label: "High"}
// ];

function App (){
    const [task, setTask] = useState('', "Task");
    const [todos, setTodos] = useState([], "Todos");
    const [priority, setPriority] = useState('', "Priority");
    const [updatedTask, setUpdatedTask] = useState('', "Updated Task");
    const [activeIndex, setActiveIndex] = useState('', 'Active Index');
        
    const initial = {selectedKey: null};
    const [dropDownVal, setDropDownVal] = useState(initial, "DropDownValues")
    
    // const updateDropDown = value => {
    //     setDropDownVal({...dropDownVal, selectedKey: value});  
    // }
    
    const handleChange = e => {
        // if you are debugging and want to see event details
        // e.persist()
        const {value} =  e.target; 
        console.log('>>> value', e)   
        setTask(value); 
    }

    const handleUpdatedDescriptionId = (e) => {
        const {value, id} = e.target;    
        setActiveIndex(id);
        if(value !== undefined) setUpdatedTask(todos[id].value)
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
        const {id} = e.target
        
        todos[id].complete = !todos[id].complete;
        setTodos([...todos]);
    }
    
    const handlePriority = async (e) => {    
        const {value, id} =  e.target;

        setActiveIndex(id);    
        return await setPriority(value);        
    }
    
    const updateTask = (e) =>{
        const {id} = e.target

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
        setUpdatedTask('');
        setPriority('');
        setActiveIndex('');
    }

  return (
    <div>
        <div style = {{width: '60%', margin: '50px auto'}} >
            <h3> Todos with controlled components using hooks</h3>       
        </div>
    
    
        <div style = {{width: '90%', margin: '10px auto'}}> 
                
            <div> 

                <SelectDropDown 
                    dropDownVal = {dropDownVal}
                    setDropDownVal = {setDropDownVal}
                />    

                <NewTodo 
                    // style = {{width: '100%', outlineStyle: 'none', color: 'dodgerblue'}}
                    placeholder = 'the placeholder text'
                    value = {task}
                    onChange = {handleChange}                
                />

                <AddClearForm 
                    handleSubmit = {handleSubmit}
                    clearTodos = {clearTodos}
                />

            </div>
            
            <Todos
                todos = {todos}
                handleUpdatedTask = {handleUpdatedTask}
                handleUpdatedDescriptionId = {handleUpdatedDescriptionId}
                handlePriority = {handlePriority}
                updateTask = {updateTask}
                activeIndex = {activeIndex}
                updatedTask = {updatedTask}
                handleDelete = {handleDelete}
                toggleComplete = {toggleComplete}
            />
            
        </div>
    </div>
  );
}

export default App;

