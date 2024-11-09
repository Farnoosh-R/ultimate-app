import React from "react";

const LayoutAuth = ({children}) => {
    return(
        <div className="LayoutAuth container mx-auto">
            <img src="logo.jpg" className="mx-auto"/>
            <h2 className="text-center">Login</h2>
        {children}
        </div>
    )
}
export default LayoutAuth;