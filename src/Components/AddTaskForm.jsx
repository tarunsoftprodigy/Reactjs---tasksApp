import React, {useRef} from 'react'
import { useTasksContext } from '../Context/TasksContext'

const AddTaskForm = () => {
     const taskRef = useRef()
     const {dispatch} = useTasksContext() //consuming taskcontext here
     
     const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_TASK', task : taskRef.current.value}) //sending payload to perform action
        taskRef.current.value = ''
    }
    return (
        <>  
           <form className="addtaskform" onSubmit={handleSubmit}>
                <h3>Add your tasks here</h3>
               <input 
                type="text" 
                name='task'
                ref = {taskRef}
                placeholder="..."
                required
                />
                <button>Add</button>
           </form>
        </>
    )
}

export default AddTaskForm
