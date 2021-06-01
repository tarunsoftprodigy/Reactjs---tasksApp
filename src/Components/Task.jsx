import React from 'react'
import {useTasksContext} from '../Context/TasksContext'

const Task = ({el}) => {
  const {dispatch} = useTasksContext()

    return (
        <>
               
                 <li 
                    onClick={() => dispatch({type: 'DELETE_TASK' , id : el.id})}>    {/* it will send payload to the useReducer to take required action*/}
                    <span> {el.task}  </span>
                    <span className="trash" > <i className="fa fa-trash"></i> </span>
                  </li>
        </>
    )
}

export default Task
