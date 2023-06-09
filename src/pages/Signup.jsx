import React, { useEffect, useState } from 'react'
import style from "./css/Signup.module.css"

import { axiosBaseUrl } from '../common/axios'

//icons
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"

export const Signup = () => {

    function GoogleAuth(){
        window.open("http://localhost:3001/auth/google" , "_self");
    }

    return (
        <div className={style.container}>
            <div className={style.whiteBox}>
                <p className={style.bigText}>Login</p>

                <div className={style.socialContainer}>
                    <div onClick={GoogleAuth} className={style.socialElGoogle}>
                        <FcGoogle className={style.socialIconGoogle}></FcGoogle>
                        <p className={style.socialText}>Continue with google</p>
                    </div>

                    <div className={style.socialElFacebook}>
                        <BsFacebook className={style.socialIconGoogle}></BsFacebook>
                        <p className={style.socialText}>Continue with facebook</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
