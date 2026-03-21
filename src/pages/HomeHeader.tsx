import React, { useEffect, useState } from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";
import { Link, NavLink, useNavigate } from 'react-router';

const HomeHeader = () => {

    const getTabStyle = (isActive: boolean, activeColors: string) =>  // Retorna automaticamente
        `flex items-center space-x-4 w-full h-full rounded-xl p-3 transition font-medium cursor-default ${
            isActive 
            ? `bg-white ${activeColors}` 
            : "text-white hover:bg-purple-500 hover:text-black"
        }`;

    return (
        <nav className='flex w-full h-20 py-2.5 px-10 items-center bg-linear-to-r from-sky-500 to-fuchsia-500 shadow-lg'>
            <div className='flex w-full h-full justify-between'>
                {/* Logo */}
                <div className='flex w-fit h-full items-center px-4 bg-white rounded-xl'>
                    <h1 className='bg-linear-to-r from-sky-500 to-fuchsia-500 inline-block text-transparent bg-clip-text text-3xl font-bold'>
                        DocPilot
                    </h1>
                </div>

                {/* Tab buttons */}
                <div className='flex w-fit h-3/4 gap-1 my-auto'>
                    {/* NavLink contém state automatico */}
                    {/* OBS: isActive is inside curlies so it destructures the object sent by NavLink */}
                    <NavLink to={'chat'}>
                        {({isActive}) => (
                            <div className={getTabStyle(isActive, "text-sky-500")}>
                                <span className='w-4.5 h-4.5'>
                                    <IoIosChatboxes className='w-full h-full'/>
                                </span>
                                <p className='font-normal'>
                                    Chat
                                </p>
                            </div>   
                        )}            
                    </NavLink>

                    {/* Archive Tab button */}
                    <NavLink to={'archive'}>
                        {({isActive}) => (
                            <div className={getTabStyle(isActive, "text-fuchsia-500")}>
                                <span className='w-4.5 h-4.5'>
                                    <FaFileAlt className='w-full h-full'/>
                                </span>
                                <p className='font-normal'>
                                    Arquivos
                                </p>
                            </div>     
                        )}           
                    </NavLink>

                </div>
                {/* Leave button */}
                <div className='flex w-fit h-3/4 gap-2 my-auto'>
                    {/* Chat Tab button */}
                    <NavLink to={'/login'}>
                        {({isActive}) => (
                        <div className={getTabStyle(isActive, "text-white")}>
                                <span className='w-4.5 h-4.5'>
                                    <CgEnter className='w-full h-full'/>
                                </span>
                                <p className='font-normal'>
                                    Sair
                                </p>
                            </div>      
                        )}
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default HomeHeader
