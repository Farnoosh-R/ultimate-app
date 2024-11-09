"use client"
import React from "react";
import Input from "../Input/Input";

const InputPass  = ({placeholder}) => {
    return(
        <div className="InputPass">
        <Input type={'password'} placeholder={placeholder}/>
        </div>
    )
}
export default InputPass;