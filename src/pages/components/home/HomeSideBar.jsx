import React, { useState , useContext } from 'react'
import style from "./css/HomeSideBar.module.css"

import {AiFillHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {MdOutlineExplore} from "react-icons/md"
import {TfiVideoClapper} from "react-icons/tfi"
import {LuMessagesSquare} from "react-icons/lu"
import {MdNotifications} from "react-icons/md"
import {AiOutlinePlusSquare} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"

import { DataContext } from '../../../context/DataProvider';


export const HomeSideBar = () => {
  const [search,setSearch]=useState(false);
  const [message,setMessage]=useState(false);

  const {isCreate,setIsCreate}=useContext(DataContext)

  const toggleSearch=()=>{
    setSearch(prev=>!prev);
  }

  const toggleIsCreate=()=>{
    setIsCreate(true);
  }

  return (
    <div className={style.container}>
      <div className={search ? style.sideBarSmall : style.sideBar}>
        <div className={style.sideBarLogoCont}>
            <div className={search ? style.sideBarLogoSmall : style.sideBarLogo}></div>
        </div>

        <div className={style.sideBarMid}>
            <div className={search ? style.midElementSmall : style.midElement}>
              <AiFillHome className={search ? style.iconSmall : style.icon}></AiFillHome>
              <p className={search ? style.textSmall : style.text}>Home</p>
            </div>
            <div onClick={toggleSearch} className={search ? style.midElementSmall : style.midElement}>
              <AiOutlineSearch className={search ? style.iconSmall : style.icon}></AiOutlineSearch>
              <p className={search ? style.textSmall : style.text}>Search</p>
            </div>
            <div className={search ? style.midElementSmall : style.midElement}>
              <MdOutlineExplore className={search ? style.iconSmall : style.icon}></MdOutlineExplore>
              <p className={search ? style.textSmall : style.text}>Explore</p>
            </div>
            <div className={search ? style.midElementSmall : style.midElement}>
              <TfiVideoClapper className={search ? style.iconSmall : style.icon}></TfiVideoClapper>
              <p className={search ? style.textSmall : style.text}>Reels</p>
            </div>
            <div className={search ? style.midElementSmall : style.midElement}>
              <LuMessagesSquare className={search ? style.iconSmall : style.icon}></LuMessagesSquare>
              <p className={search ? style.textSmall : style.text}>Messages</p>
            </div>
            <div className={search ? style.midElementSmall : style.midElement}>
              <MdNotifications className={search ? style.iconSmall : style.icon}></MdNotifications>
              <p className={search ? style.textSmall : style.text}>Notifications</p>
            </div>
            <div onClick={toggleIsCreate} className={search ? style.midElementSmall : style.midElement}>
              <AiOutlinePlusSquare className={search ? style.iconSmall : style.icon}></AiOutlinePlusSquare>
              <p className={search ? style.textSmall : style.text}>Create</p>
            </div>
            <div className={search ? style.midElementSmall : style.midElement}>
              <MdNotifications className={search ? style.iconSmall : style.icon}></MdNotifications>
              <p className={search ? style.textSmall : style.text}>Profile</p>
            </div>
        </div>

        <div className={style.optionContainer}>
          <div className={search ? style.midElementSmall : style.midElement}>
            <RxHamburgerMenu className={search ? style.iconSmall : style.icon}></RxHamburgerMenu>
            <p className={search ? style.textSmall : style.text}>More</p>
          </div>
        </div>
      </div>

      <div className={search ? style.secondSideBar : style.invisible}>
        <div className={style.searchContainer}>
          <p className={style.searchText}>Search</p>

          <input className={style.searchInput} placeholder='Search'/>
        </div>

        <div className={style.searchedPeopleContainer}>
          <div className={style.recentContainer}>
            <p className={style.recentText}>Recent</p>

            <p className={style.recentTextBlue}>Clear all</p>
          </div>

          <div className={style.searchedPeople}>
            
          </div>

        </div>

      </div>
    </div>
  )
}
