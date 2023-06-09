import React from 'react'
import { createContext } from 'react'
import { useState , useEffect } from 'react';

export const DataContext=createContext();

export const DataProvider = (props) => {
    const [user,setUser]=useState();

    const [isCreate,setIsCreate]=useState(false);

    const [discardPost,setDiscardPost]=useState(false);

    const [files,setFiles]=useState([]);

    const [next,setNext]=useState(false);

    return (
        <DataContext.Provider value={{
            user ,
            setUser ,
            isCreate , 
            setIsCreate , 
            discardPost , 
            setDiscardPost,
            files,
            setFiles,
            next,
            setNext
        }}>
            {props.children}
        </DataContext.Provider>
    )
}