import React from 'react'
import {useTasksContext} from '../Context/TasksContext'

const Tasklist = () => {
    const {tasks} = useTasksContext()
    return (
     <div className="task-list">
         <ul>
            {tasks.map(el =>
              <li key={el.id}>
                <span> {el.task}  </span>
                <span> x </span>
              </li>)}
         </ul>
      </div>
    )
}

export default Tasklist
