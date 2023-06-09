import React from 'react'
import style from "./css/HomeNavBarBot.module.css"

import {AiFillHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {TfiVideoClapper} from "react-icons/tfi"
import {LuMessagesSquare} from "react-icons/lu"

export const HomeNavBarBot = () => {
  return(
    <div className={style.container}>
        <div className={style.innerContainer}>
            <div className={style.elementCont}>
                <AiFillHome className={style.icon}></AiFillHome>
            </div>
            <div className={style.elementCont}>
                <AiOutlineSearch className={style.icon}></AiOutlineSearch>
            </div>
            <div className={style.elementCont}>
                <TfiVideoClapper className={style.icon}></TfiVideoClapper>
            </div>
            <div className={style.elementCont}>
                <LuMessagesSquare className={style.icon}></LuMessagesSquare>
            </div>
            <div className={style.elementCont}>
                <AiFillHome className={style.icon}></AiFillHome>
            </div>
        </div>
    </div>
  )
}
