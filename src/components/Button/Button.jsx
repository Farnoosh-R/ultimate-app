"use client"
import React from "react"
import {useThemeContext} from './../Context/ThemeContext'

const Button = ({type = 'text', title}) => {
    const theme = useThemeContext()

    return(
        <div className="Button">
        <button type={type} style={{background: theme.theme.color.primary}}  className="btn bg-green-600 px-4 py-2 text-white rounded w-full">{title}</button>
        </div>
    )
}
export default Button;