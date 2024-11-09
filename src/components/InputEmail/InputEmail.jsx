"use client"
import React from "react";
import Input from "../Input/Input";

const InputEmail  = ({placeholder}) => {
    return(
        <div className="InputEmail">
        <Input type={'email'} placeholder={placeholder} />
        </div>
    )
}
export default InputEmail;