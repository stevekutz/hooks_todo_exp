import React from 'react';

const NewTodo = ({style, placeholder, value, onChange}) => {

    return (
        <React.Fragment>        
            <label> enter todo description: </label>

            <input
                style = {style}
                placeholder = {placeholder}
                value = {value}
                onChange = {onChange}      
            />
        </React.Fragment>
    )
}

export default NewTodo