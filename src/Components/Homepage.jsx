import React from 'react'
import Navbar from './Navbar'
import Tasklist from './Tasklist'
import ThemeToggler from './ThemeToggler'
import {useThemeContext} from '../Context/ThemeContext'
import AddTaskForm from './AddTaskForm'

const Homepage = () => {

    const {theme} = useThemeContext()
    const {isLightTheme, dark, light} = theme
    const currentTheme = isLightTheme ? light : dark

    return (
        <div className = "homepage" style={{color: currentTheme.syntax, background: currentTheme.bg}}>
            <ThemeToggler/>
            <Navbar />
            <Tasklist />
            <AddTaskForm/>
        </div>
    )
}

export default Homepage
