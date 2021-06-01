//using context with useReducer

import React, { useEffect, createContext, useContext, useReducer } from 'react'
import {TaskReducer} from '../Reducer/TaskReducer'

const TasksContext = createContext()

export const useTasksContext = () => useContext(TasksContext)

export const TasksContextProvider = ({children}) => {

    //requires a reducer and intial state. dispatch will help in the action that needs to be perform.
    const [tasks, dispatch] = useReducer(TaskReducer, [] ,
        //third argument to retrieve the stored data in localstorage. if data is there initialize it, otherwise empty array.
        () => {
        const localStore = localStorage.getItem('tasks')
        return localStore ? JSON.parse(localStore): [] ;
    }) 
   
    // to add the data in localstorage
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    
    return (
        <TasksContext.Provider value= {{tasks, dispatch}}>
                {children}
        </TasksContext.Provider>
    )
}

