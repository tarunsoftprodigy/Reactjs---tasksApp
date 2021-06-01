import React from 'react'
import {useThemeContext} from '../Context/ThemeContext'
const ThemeToggler = () => {
  const {theme, toggleTheme} = useThemeContext()
    const {isLightTheme} = theme;
    return (
        <>
         <button className={`theme-toggler ${isLightTheme}`} onClick={toggleTheme}> {isLightTheme ? 'Dark' : 'Light'} </button>
        </>
    )
}

export default ThemeToggler;
