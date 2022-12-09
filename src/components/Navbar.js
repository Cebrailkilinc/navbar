import React, { useState,useRef,useEffect} from 'react';

//image import
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

//import icons
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai"

function Navbar() {

    const [openSideMenu, setopenSideMenu] = useState(false)    
    const dropRef = useRef();
    console.log(dropRef.current)

    return (
        <>
            <div className='w-full flex items-center justify-between px-5 md:px-20 border-b text-gray-500'>
                <div>
                    <img className='h-20' src={logo} />
                </div>
                <div className='hidden md:block '>
                    <ul className='flex items-center gap-5'>
                        <li>Anasayfa</li>
                        <li>Hakkımızda</li>
                        <li className='group py-3'>
                            <div>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <div className='flex items-center'>
                                        <MdOutlineArrowDropDown />
                                        <h1>Cebrail</h1>
                                    </div>
                                    <img className='h-10 w-10 rounded-full object-cover ' src={profile} />
                                </div>
                                <div className='relative top-3 hidden group-hover:block duration-1000 '>
                                    <ul className='absolute text-start px-4 py-2 text-sm  border'>
                                        <li className='cursor-pointer hover:text-pink-500 py-1  '>Sepetim</li>
                                        <li className='cursor-pointer hover:text-pink-500 py-1 '>Favorilerim</li>
                                        <li className='cursor-pointer hover:text-pink-500 py-1 '>Ayarlar</li>
                                        <li className='cursor-pointer hover:text-pink-500 py-1 '>Çıkış</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`py-3 visible md:hidden`}>
                    {!openSideMenu ? <HiMenuAlt3 size={30} onClick={() => { setopenSideMenu(!openSideMenu) }} /> : <AiOutlineClose size={30} onClick={() => { setopenSideMenu(!openSideMenu) }}/> }
                </div>
            </div>
            <div className={openSideMenu ? 'block md:hidden fixed top-0 left-0 w-[60%] h-full bg-indigo-100  duration-1000 ' : "fixed h-full w-[60%] top-0 left-[-100%] duration-1000  "}>
                <ul className='flex items-center flex-col py-5 gap-5 mt-5'>
                    <li>Anasayfa</li>
                    <li>Hakkımızda</li>
                    <li>Anasayfa</li>
                    <li>Hakkımızda</li>
                </ul>
                <div className=' absolute bottom-0 flex items-center justify-center w-full gap-3 p-10 border-b'>
                    <img className='h-12 w-12 rounded-full object-cover' src={profile} />
                    <h1>Cebrail</h1>
                </div>
            </div>
        </>
    )
}

export default Navbar