import React from 'react';

const AddClearForm = ({handleSubmit, clearTodos}) => {
    return (
    
        <form  onSubmit = {handleSubmit}>
            <div> 
                <div>
                    <button type = 'submit' > Add Todo </button> 
                    <button onClick = {clearTodos}> Clear All Todos</button>                                   
                </div>
            </div>
                        
        </form>
    
    
    
    )

}

export default AddClearForm