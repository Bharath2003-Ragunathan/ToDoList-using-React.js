import React, { useState } from "react";

function AddTask({addTask}){
    const [input,setInput] = useState('');

    function handleInput(e){
        setInput(e.target.value);

    }

    function handleSubmit(e){
        e.preventDefault();
        addTask(input);
        setInput('')
    }


    return(
        <form onSubmit={handleSubmit}>
           <input style={{margin:'5px'}} type="text" value={input} onChange={handleInput} placeholder="Enter Task..." />
           <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTask;