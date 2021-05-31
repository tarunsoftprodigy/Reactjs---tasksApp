import React, { useState, createContext, useContext } from 'react'

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider = ({children}) => {

      
    const [theme, setTheme] = useState({
        isLightTheme : true,
        light : {syntax:'#555' , ui:'#ddd' , bg:'#eee'} ,
        dark : {syntax:'#ddd' , ui:'#333' , bg:'#555'}
    })

    const toggleTheme = () => {
      setTheme({...theme, isLightTheme : !theme.isLightTheme})
    }
   
    const values = {theme, toggleTheme}

    return (
        <ThemeContext.Provider value= {values}>
                {children}
        </ThemeContext.Provider>
    )
}

