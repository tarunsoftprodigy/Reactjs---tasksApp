//using context with useState

import React, { useState, createContext, useContext } from 'react'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext) //this will help consuming the context on diff components

export const ThemeContextProvider = ({children}) => {
      
    const [theme, setTheme] = useState({
        isLightTheme : true,
        light : {ui:'#555', bg:'#eee'} ,
        dark : {ui:'#ddd', bg:'#555'}
    })

    const toggleTheme = () => {
      setTheme({...theme, isLightTheme : !theme.isLightTheme})
    }
   
    const values = {theme, toggleTheme}

    return (
        <ThemeContext.Provider value= {values}>
                {children} {/* every component will have access to the context */}
        </ThemeContext.Provider>
    )
}

