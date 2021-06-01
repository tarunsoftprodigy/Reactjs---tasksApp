import React from 'react'
import {useTasksContext} from '../Context/TasksContext'
import Task from './Task'

const Tasklist = () => {
  const {tasks} = useTasksContext()

    return (
     <div className="task-list">
         {tasks.length > 0  
            ? <ul>
                {tasks.map(el => <Task el={el} key={el.id} />
             )}
              </ul> 
            : <p className="nothingtodo">Hmm... nothing for today!!</p>
         }
      </div>
    )
}

export default Tasklist
