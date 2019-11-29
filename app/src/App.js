import React , {useEffect}from 'react';
import './index.css';
import {useState} from 'reinspect';
import Select from 'react-select';
//import SelectCreateFilter from './CustomiizedSelect';
// import {Button, Card, Container, Form, Grid, Input, Label} from 'semantic-ui-react';

// const divStyle = {display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',
//                   margin: '2px auto', flexDirection: 'column', width: '95%', border: '1px solid blue' }
const taskStyle = {borderRadius: '1px 2px 2px 4px', margin: '2px', border: '1px solid grey'}

// const filterOptions = (candidate, input) => {
//     if (input) {
//       return candidate.value === customOptions[0].value;
//     }
//     return true;
//   };
  
const selectOptions = [
    { value: 'low', label: "Low" },
    { value: 'medium', label: "Medium" },
    { value: 'high', label: "High"}
];

//   const customOptions = [
//     {
//       value: null,
//       label: 'Select Priority Level',
//     },
//     ...selectOptions,
//   ];

function App (){
    const [task, setTask] = useState('', "Task");
    const [todos, setTodos] = useState([], "Todos");
    const [priority, setPriority] = useState('', "Priority");
    const [updatedTask, setUpdatedTask] = useState('', "Updated Task");
    const [activeIndex, setActiveIndex] = useState('', 'Active Index');
    const [updatedTaskIndex, setUpdatedTaskIndex] = useState('', 'updatedTaskIndex');

    const initial = {selectedKey: null};
    const [options, setOptions] = useState(selectOptions, "Options Array")
    const [dropDownVal, setDropDownVal] = useState(initial, "DropDownValues")

    const updateDropDown = value => {
        setDropDownVal({...dropDownVal, selectedKey: value});  
    }

    const handleChange = e => {
        const {value, name} =  e.target;

        setTask(value);
        console.log('value is ', value);

    }

    const handleActiveIndex = (e) => {
        const {value, id} = e.target;
        console.log('Active id is currently ', id);
        setActiveIndex(id);
    }

    const handleUpdatedTask = (e) => {
        const {value, id} = e.target;
        console.log('updated Task value is ', updatedTask);
        console.log('handleUpdateTask id is currently ', id);
        setUpdatedTaskIndex(id);
        if(activeIndex === id) {
            setUpdatedTask(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('~~~~~  e   is ', e);
        console.log('dropDownVal is ', dropDownVal.selectedKey);
        console.log(' dropDownVal ', dropDownVal);

        const newTask = {
            value: task,
            priority: dropDownVal.selectedKey,
            complete: false,
        }

        console.log('newTask is ', newTask);  
        if(task !== '' && priority !== null) {
            setTodos([...todos, newTask]);
            setTask('');
            setDropDownVal(initial);
        }

  }  

    const clearTodos = () => {
        setTodos([]);
    }

    const handleDelete = (id) => {
        console.log('id  is ', id);
        todos.splice(id, 1);
        setTodos([...todos]);
    }

    // const updateForm = value => {
    //     setMyForm({ ...myForm, mySelectKey: value });
    // };
    
    const toggleComplete = (e, value2) => {
        let {id} = e.target
        console.log('toggle  e', e);  
        console.log('id  is ', e.target.id);
        console.log('value2 is', value2);

        todos[id].complete = !todos[id].complete;
        setTodos([...todos]);
    }
  
    const handlePriority = async (e) => {
    
        const {value, id} =  e.target;
        console.log('>>>> id is ', id);
        console.log('>>>> value is ', value);
        return await setPriority(value);
 
    }
  
    const updateTask = (e) =>{
        let {id} = e.target
        // console.log('UP name is ', e.target);

        // console.log('UP value is ', value);

        console.log('UP index is ', id);
        // await setPriority(value);
        if(activeIndex === id ){
            if(priority){
                todos[id].priority = priority;
            }
            if(updatedTask) {
                todos[id].value = updatedTask;
            }
        setTodos([...todos]);
        }

        // setPriority('');
        setUpdatedTask('');
        setActiveIndex('');
    }

    // useEffect( () => {
    //     const findActiveID= (e) => {
    //         let {id} = e.target
    
    //         setActiveIndex(id);


    //     }
    //     console.log('Active index is ', activeIndex);

    // }, [task, activeIndex]); 

  return (
   
    <div style = {{width: '30%', margin: '10px auto'}}>      
        <div> 
            <Select
                width = '50px'
                value = {options.filter(({value}) => value === dropDownVal.selectedKey)}
                getOptionLabel={({ label }) => label}
                getOptionValue={({ value }) => value}
                onChange={({ value }) => updateDropDown(value)}
                //options={options}
                options = {selectOptions}
                // filterOptions = {filterOptions}
            />

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
                    <input
                        id = {index}
                        /// placeholder = {id === activeIndex ? updatedTask : todos[index].value}
                        value = {index == activeIndex  ? updatedTask : todos[index].value}   // merge this properly
                        onChange = {(index) => handleUpdatedTask(index)}
                        onClick = {(index) => handleActiveIndex(index)}
                    
                    />
                    <div id = {index} onClick = {(id) => toggleComplete(id)}  > Done: {item.complete.toString()}    </div>
                    <div>Priority: {item.priority}</div>
                    <select id = {index} onChange = {handlePriority}>
                        <option  id = {index} > Low </option>
                        <option  id = {index} > Medium </option>
                        <option  id = {index} > High </option>
                    </select>
                    <button id = {index} onClick = {(id) => updateTask(id)} > Update Task</button>
                    <button onClick = {handleDelete} > delete todo</button>
                    <button id = {index} onClick = {(id) => toggleComplete(id)} > Toggle Complete</button>
                </div>
        ))}
        
        </div>  
        

    </div>
   
  );
}

export default App;

