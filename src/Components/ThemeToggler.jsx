import React from 'react'
import {useThemeContext} from '../Context/ThemeContext'
const ThemeToggler = () => {
  const {theme, toggleTheme} = useThemeContext()
    const {isLightTheme} = theme;
    return (
        <>
         <button onClick={toggleTheme}> {isLightTheme ? 'Light' : 'Dark'} </button>
        </>
    )
}

export default ThemeToggler;
