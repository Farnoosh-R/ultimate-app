"use client"
import Head from "next/head";
import React from "react";
import LayoutAuth from "../../components/LayoutAuth/LayoutAuth";
import InputEmail from "../../components/InputEmail/InputEmail";
import InputPass from "../../components/InputPass/InputPass";
import Button from "../../components/Button/Button";


const Login = () => {

    const handleSubmit = (e) => {
        if (e){
            e.preventDefault();
        }
        console.log('submited')
    }
    return(
        <div className="Login">
        <Head>
        <title>Login</title>
        </Head>
        <LayoutAuth>
        <form onSubmit={handleSubmit} className="flex flex-col w-80 mx-auto mt-3">
        <InputEmail placeholder={'Email'} />
        <InputPass placeholder="Password" />
        <Button type={'submit'} title={'Submit'} />
        </form>
        </LayoutAuth>

        </div>
    )
}
export default Login;