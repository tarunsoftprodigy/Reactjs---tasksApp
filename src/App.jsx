import React, { useState } from 'react'
import Homepage from './Components/Homepage'
import {TasksContextProvider} from './Context/TasksContext'

function App() {
 
  return (
    <>
      <TasksContextProvider>  { /* to make context accessible to all the components whenever required */}
        <Homepage />
      </TasksContextProvider>
    </>
  )
}

export default App
