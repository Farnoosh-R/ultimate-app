"use client"
import React from "react";

const Input  = ({type, placeholder}) => {
    return(
        <div className="Input">
        <input className="form-input border-solid border-2 rounded border-slate-400 mb-3 py-2 px-3 w-full" type={type} placeholder={placeholder} />
        </div>
    )
}
export default Input;