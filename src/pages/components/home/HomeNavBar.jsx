import React from 'react'
import style from "./css/HomeNavBar.module.css"

import logo from "./images/bigLogo.png"

import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlinePlusSquare} from "react-icons/ai"

export const HomeNavBar = () => {
  return (
    <div className={style.container}>
        <div className={style.innerContainer}>
            <div className={style.logoContainer}>
                <img className={style.logo} src={logo}/>
            </div>
            <div className={style.reacts}>
                <AiOutlinePlusSquare className={style.icon}></AiOutlinePlusSquare>
                <AiOutlineHeart className={style.icon}></AiOutlineHeart>
            </div>
        </div>
    </div>
  )
}
