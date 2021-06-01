import React from 'react'
import Navbar from './Navbar'
import Tasklist from './Tasklist'
import ThemeToggler from './ThemeToggler'
import {useThemeContext} from '../Context/ThemeContext'
import AddTaskForm from './AddTaskForm'

const Homepage = () => {

    //consuming the theme context here
    const {theme} = useThemeContext()
    const {isLightTheme, dark, light} = theme
    const currentTheme = isLightTheme ? light : dark

    return (
        <div className = "homepage" style={{color: currentTheme.ui, background: currentTheme.bg}}>
             <div className="container">
                <ThemeToggler/>
                 <div className="col-1">
                         <Navbar />
                         <Tasklist />
                 </div>
                 <div className="col-2">
                        <AddTaskForm/>
                 </div>
             </div>
        </div>
    )
}

export default Homepage
