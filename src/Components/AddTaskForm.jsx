import React, {useRef} from 'react'
import { useTasksContext } from '../Context/TasksContext'

const AddTaskForm = () => {
     const taskRef = useRef()
     const {addTask} = useTasksContext()
     
     const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskRef.current.value);
        taskRef.current.value = ''
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
               <input 
                type="text" 
                name='task'
                ref = {taskRef}
                placeholder="add task here.."
                required
                />
                <button>Add</button>
           </form>
        </>
    )
}

export default AddTaskForm
