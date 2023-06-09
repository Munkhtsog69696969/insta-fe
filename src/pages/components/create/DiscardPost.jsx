import React, { useContext } from 'react'
import style from "./css/DiscardPost.module.css"

import { DataContext } from '../../../context/DataProvider'

export const DiscardPost = () => {
    const {discardPost,setDiscardPost,setIsCreate,setFiles,next,setNext}=useContext(DataContext);

    const Cancel=()=>{
        setDiscardPost(false)
    }

    const Discard=()=>{
        setDiscardPost(false);
        setFiles([]);
        setNext(false);
    }

    return (
        discardPost ?

        <div className={style.container}>
            <div className={style.whiteBox}>
                <div className={style.top}>
                    <p className={style.bigText}>Discard post?</p>
                    <p className={style.smallText}>If you leave, your edits won't be saved.</p>
                </div>

                <hr className={style.line}></hr>

                <div onClick={Discard} className={style.bottom}>
                    <div className={style.redText}>Discard</div>
                </div>

                <hr className={style.line}></hr>

                <div onClick={Cancel} className={style.bottom}>
                    <div className={style.blackText}>Cancel</div>
                </div>
            </div>
        </div>

        :

        <div></div>
    )
}
