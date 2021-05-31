import React, { useState, createContext, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TasksContext = createContext()

export const useTasksContext = () => useContext(TasksContext)

export const TasksContextProvider = ({children}) => {
    
    const [tasks, setTasks] = useState([
        {task: 'Do something', id: 1}, 
        {task: 'Do some other thing', id: 2}
    ])

    const addTask = (task) => {
        setTasks([
                  ...tasks,
            {task: task , id: uuidv4()}
        ])
    }
    
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
   
    const values = {tasks , addTask, removeTask}

    return (
        <TasksContext.Provider value= {values}>
                {children}
        </TasksContext.Provider>
    )
}

