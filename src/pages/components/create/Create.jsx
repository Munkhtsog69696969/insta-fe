import React, { useContext, useEffect, useState } from 'react'
import style from "./css/Create.module.css"

import ReactSimplyCarousel from 'react-simply-carousel';

import {MdAddPhotoAlternate} from "react-icons/md"
import {TbPhotoPlus} from "react-icons/tb"
import {BsArrowLeft} from "react-icons/bs"

import { DataContext } from '../../../context/DataProvider'

export const Create = () => {
    const {isCreate,setIsCreate,setDiscardPost,files,setFiles,next,setNext}=useContext(DataContext);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const Hide=()=>{
        if(files.length==0){
            setIsCreate(false);
        }else{
            setDiscardPost(true);
        }
    }
    
    function fileInput(event){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            if(reader.result.substring(0,10)=="data:image" || reader.result.substring(0,10)=="data:video"){
                setFiles((files)=>[...files ,{type:reader.result.substring(0,10) , base64:reader.result}]);
            }
        };
        reader.onerror = (error) => {
          console.log("upload image error:", error);
        };
    }

    const Next=()=>{
        setNext(true);
    }

    const Back=()=>{
        if(next){
            setNext(false);
        }else{
            setDiscardPost(true)
        }
    }

    return (
        isCreate ?

        <div onClick={Hide} className={style.container}>
            <div onClick={(e)=>{e.stopPropagation()}} className={next ? style.whiteBoxNext : style.whiteBox}>
                <div className={style.textCont}>
                    {
                        files.length!=0?
                            <div onClick={Back} className={style.back}>
                                <BsArrowLeft></BsArrowLeft>
                            </div>
                        :

                        <div></div>
                    }

                    Create new post

                    {
                       files.length!=0 ?
                            next ?

                            <div className={style.share}>
                                Share
                            </div>

                            :

                            <div onClick={Next} className={style.share}>
                                Next
                            </div>

                        :

                        <div></div>
                    }
                </div>

                <hr></hr>

                <div className={next ? style.contNext : style.cont}>
                    <div className={next ? style.mainNext : style.main}>
                        {
                            files.length==0 ?

                            <div className={style.addPhotos}>
                                <MdAddPhotoAlternate className={style.icon}></MdAddPhotoAlternate>

                                <div className={style.text}>
                                    Drag photos and videos here
                                </div>

                                <label className={style.button}>
                                    <input onChange={fileInput} className={style.fileInput} type='file'/>
                                    Select from gallery
                                </label>
                            </div>

                            :

                            <div className={style.filesContainer}>
                                <ReactSimplyCarousel
                                    activeSlideIndex={activeSlideIndex}
                                    onRequestChange={setActiveSlideIndex}
                                    itemsToShow={1}
                                    itemsToScroll={1}
                                    forwardBtnProps={{
                                    //here you can also pass className, or any other button element attributes
                                    style: {
                                        alignSelf: 'center',
                                        background: 'black',
                                        border: 'none',
                                        borderRadius: '50%',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '20px',
                                        height: 35,
                                        lineHeight: 1,
                                        textAlign: 'center',
                                        width: 35,
                                        marginLeft:"5px"
                                    },
                                    children: <span>{`>`}</span>,
                                    }}
                                    backwardBtnProps={{
                                    //here you can also pass className, or any other button element attributes
                                    style: {
                                        alignSelf: 'center',
                                        background: 'black',
                                        border: 'none',
                                        borderRadius: '50%',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '20px',
                                        height: 35,
                                        lineHeight: 1,
                                        textAlign: 'center',
                                        width: 35,
                                        marginRight:"5px"
                                    },
                                    children: <span>{`<`}</span>,
                                    }}
                                    responsiveProps={[
                                    {
                                        itemsToShow: 1,
                                        itemsToScroll: 1,
                                        minWidth: 768,
                                    },
                                    ]}
                                    speed={200}
                                    easing="linear"
                                >
                                    {
                                        files && files.map((file,i)=>{
                                            return(
                                                file.type=="data:image" ?
                                                    <div className={style.imageCont} key={i}>
                                                        <img className={style.image} src={file.base64}/>
                                                    </div>
                                                : file.type=="data:video" ?
                                                    <video className={style.video} controls>
                                                        <source src={file.base64}></source>
                                                    </video>
                                                :

                                                <div>Invalid file type</div>
                                            )
                                        })
                                    }
                                </ReactSimplyCarousel>

                                <label className={style.addFile}>
                                    <input onChange={fileInput} className={style.fileInput} type='file'/>
                                    <TbPhotoPlus></TbPhotoPlus>
                                </label>

                            </div>
                        }
                    </div>

                    {
                        next ?

                        <div className={style.postDescCont}>
                            <div className={style.profile}>
                                aa
                            </div>

                            <textarea className={style.postText} placeholder="Text...">
                            </textarea>

                            a
                        </div>

                        :

                        <div></div>
                    }

                </div>
            </div>
        </div>

        :

        <div></div>
    )
}
