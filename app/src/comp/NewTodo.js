import React from 'react';
import classes from './newtodo.module.css';

const NewTodo = ({style, placeholder, value, onChange}) => {

    return (
        <div className = {classes.NewTodoStyle}>        
            <label className = {classes.Label}> New Todo </label>

            <input
                className = {classes.Input}
                placeholder = {placeholder}
                value = {value}
                onChange = {onChange}      
            />
        </div>
    )
}

export default NewTodo