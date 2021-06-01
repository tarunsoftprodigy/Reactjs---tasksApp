//using context with useState

import React, { useEffect, useState, createContext, useContext } from 'react'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext) //this will help consuming the context on diff components

export const ThemeContextProvider = ({children}) => {
      
    const [theme, setTheme] = useState({
        isLightTheme : null ,
        light : {ui:'#555', bg:'#eee'} ,
        dark : {ui:'#ddd', bg:'#555'}
    }, () => {
      const storedTheme = localStorage.getItem('theme')
      return storedTheme ? JSON.parse(storedTheme) : true
    })

    useEffect(() => {
      const storedTheme = localStorage.getItem('theme')
      setTheme({...theme, isLightTheme : storedTheme ? JSON.parse(storedTheme) : true})
    }, [])

    const toggleTheme = () => {
      setTheme({...theme, isLightTheme : !theme.isLightTheme})
    }

    useEffect(() => {
       localStorage.setItem('theme', JSON.stringify(theme.isLightTheme))
    }, [theme])
    
    const values = {theme, toggleTheme}

    return (
        <ThemeContext.Provider value= {values}>
                {children} {/* every component will have access to the context */}
        </ThemeContext.Provider>
    )
}

