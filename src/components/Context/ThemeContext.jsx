"use client"
import React, { useContext, useState } from "react";
import theme from "../Config/theme";


const ThemeContext = React.createContext();

export const useThemeContext = () => {
    const ThemeContextValue = useContext(ThemeContext);
    return ThemeContextValue;
}

export const ThemeContextProvider = ({children}) => {

    return(
        <ThemeContext.Provider value={{theme}}>
        {children}
        </ThemeContext.Provider>
    )
}