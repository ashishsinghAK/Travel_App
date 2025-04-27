import React from 'react'
import "./Dashboard.css"
import { FiHome } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";


const NavBar = () => {
    return (
        <div className='Navbar min-w-[393px] min-h-[72px] flex justify-between items-center px-4'>
            <span className='w-[48px] h-[48px] flex justify-center items-center Home'>
                <FiHome className='w-[24px] h-[24px]' />
            </span>
            <span className='w-[48px] h-[48px] flex justify-center items-center'>
                <IoSearchOutline className='w-[24px] h-[24px]' />
            </span>
            <span className='w-[48px] h-[48px] flex justify-center items-center'>
                <FaPlus className='w-[24px] h-[24px] Plus' />
            </span>
            <span className='w-[48px] h-[48px] flex justify-center items-center'>
                <CiHeart className='w-[24px] h-[24px]' />
            </span>
            <span className='w-[48px] h-[48px] flex justify-center items-center'>
                <IoMdContact className='w-[24px] h-[24px]' />
            </span>
        </div>

    )
}

export default NavBar