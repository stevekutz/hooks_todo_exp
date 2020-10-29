import React from 'react';

const AddClearForm = ({handleSubmit, clearTodos, className}) => {
    return (
    
        <form  onSubmit = {handleSubmit}>
            <div> 
                <div>
                    <button 
                        className = {className}
                        type = 'submit' > Add Todo </button> 
                    <button 
                        className = {className}
                        onClick = {clearTodos}
                        
                        > Clear All Todos</button>                                   
                </div>
            </div>
                        
        </form>
    
    
    
    )

}

export default AddClearForm