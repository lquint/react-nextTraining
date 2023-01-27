import { createContext, useMemo, useState, useCallback } from "react";

const THEMES = {
    dark: {
        background:"#000",
        color:"#FFF",
        border:"solid 1px #FFF"
    },
    light:{
        background:"#FFF",
        color:"#000",
        border:"solid 1px #000"
    }
}

export const ThemeData = createContext(null)

function ThemeContext({children}){
    
    const [theme,setTheme]= useState("light")
    const toggleTheme = useCallback(()=>{
        setTheme(t=> t === "light" ? "dark" : "light")
    },[])
    //const currentTheme= theme === "light" ? THEMES.dark : THEMES.light
    const value= useMemo(()=>{
        return {
            theme : theme === "light" ? THEMES.dark : THEMES.light,
            toggleTheme:toggleTheme
        }
    }, [toggleTheme, theme])

    return(
        <ThemeData.Provider value={value}>
            {children}
        </ThemeData.Provider>
    )
}
 
export default ThemeContext;