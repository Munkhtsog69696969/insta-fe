import React, { useContext, useEffect } from 'react'
import style from "./css/Home.module.css"
import { axiosBaseUrl } from '../common/axios';

import { DataContext } from '../context/DataProvider';

import { HomeSideBar } from './components/home/HomeSideBar';
import { HomeNavBar } from './components/home/HomeNavBar';
import { HomeNavBarBot } from './components/home/HomeNavBarBot';
import { HomeMain } from './components/home/HomeMain';

import { Create } from './components/create/Create';
import { DiscardPost } from './components/create/DiscardPost';

export const Home = () => {
    const {
        user,setUser
    }=useContext(DataContext)

    useEffect(()=>{
        axiosBaseUrl.get("/auth/login/success")
            .then(async(res)=>{
                // console.log(res.data);
                setUser(res.data);
            }).catch((err)=>{
                console.log(err);
            })
    },[]);

    return (
        <div className={style.container}>
            <HomeSideBar></HomeSideBar>
            <HomeNavBar></HomeNavBar>
            <HomeNavBarBot></HomeNavBarBot>
            {/* <HomeMain></HomeMain> */}
            <Create></Create>
            <DiscardPost></DiscardPost>
        </div>
    )
}
