import React, { useState } from 'react'
import banner from "../../assets/slnwyvff.png"
import banner1 from "../../assets/nfzv12h8.png"



export default function Publicidade() {
    const [bannerImg, setBannerImg] = useState(banner)

    function handleChange() {
        if (bannerImg === banner) {
            setBannerImg(banner1)
        }
        if (bannerImg === banner1) {
            setBannerImg(banner)
        }
    }

    setTimeout(() => {
        handleChange()
    }, 5000)

    return(
        <div>

            <div className="flex justify-center items-center w-[370px] h-[150px] relative rounded-2xl overflow-hidden bg-white">
                <img src={bannerImg} className='rounded-2xl absolute' alt="" />
                <button type='button' onClick={handleChange} className='absolute left-2 top-[60px] '>
                    <svg fill="#fff"  height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#fff" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.616,256-256S397.385,0,256,0z M346.899,280.959 l-85.594,85.594c-13.783,13.784-36.132,13.784-49.917,0c-13.784-13.784-13.784-36.133,0-49.917L272.023,256l-60.635-60.635 c-13.784-13.784-13.784-36.133,0-49.917s36.134-13.784,49.917,0l85.594,85.594C360.683,244.825,360.683,267.175,346.899,280.959z"></path> </g> </g> </g></svg>
                </button>
                <button type='button' onClick={handleChange} className='absolute right-2 top-[60px]'>
                    <svg fill="#FFFFFF" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.616,256-256S397.385,0,256,0z M346.899,280.959 l-85.594,85.594c-13.783,13.784-36.132,13.784-49.917,0c-13.784-13.784-13.784-36.133,0-49.917L272.023,256l-60.635-60.635 c-13.784-13.784-13.784-36.133,0-49.917s36.134-13.784,49.917,0l85.594,85.594C360.683,244.825,360.683,267.175,346.899,280.959z"></path> </g> </g> </g></svg>
                </button>
            </div>
        </div>
        
    )
}