import React, { useState } from 'react'
import Homepage from './Components/Homepage'
import {TasksContextProvider} from './Context/TasksContext'

function App() {
 
  return (
    <div className="App">
      <TasksContextProvider>  
        <Homepage />
      </TasksContextProvider>
    </div>
  )
}

export default App
