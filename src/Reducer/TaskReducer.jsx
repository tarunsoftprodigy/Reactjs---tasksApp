import { v4 as uuidv4 } from 'uuid';   

//reducer function for multiple actions, this goes as one of the argument in useReducer. 

export function TaskReducer(state, action) {
    switch(action.type) {
            case 'ADD_TASK' :    //can also give action case name as constants
                return [
                    ...state,
                    {task: action.task, id: uuidv4()}   //uuid help to get unique ids
                ] 
            case 'DELETE_TASK' :
                return (
                    state.filter(task => task.id !== action.id)
                )
            default :
               return state
         }
}
   