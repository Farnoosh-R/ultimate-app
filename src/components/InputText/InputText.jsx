"use client"
import React from "react";
import Input from "../Input/Input";

const InputText  = ({placeholder}) => {
    return(
        <div className="InputText">
        <Input type={'text'} placeholder={placeholder}/>
        </div>
    )
}
export default InputText;