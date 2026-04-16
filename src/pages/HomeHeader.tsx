import React, { useEffect, useState, type MouseEvent, type SubmitEvent } from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { CgEnter } from "react-icons/cg";
import { RiTeamFill } from "react-icons/ri";
import NavLinkTab from '@/ui/NavLinkTab';
import { auth } from '@/config/firebase';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';

const HomeHeader = () => {
    const navigate = useNavigate();

    const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Opcional, mas evita comportamentos inesperados
    try {
        await signOut(auth);
        toast.success("Usuário deconectado com sucesso!");
        // O seu onAuthStateChanged (que vimos antes) cuidará do redirecionamento
        navigate("/login");
    } catch (error) {
        console.error("Erro ao sair:", error);
    }
    };
    return (
        <nav className='flex w-full h-20 min-h-20 max-h-20 py-2.5 px-10 items-center bg-linear-to-r from-sky-500 to-fuchsia-500 shadow-lg'>
            <div className='flex w-full h-full justify-between'>
                {/* Logo */}
                <div className='flex w-fit h-full items-center px-4 bg-white rounded-xl'>
                    <h1 className='bg-linear-to-r from-sky-500 to-fuchsia-500 inline-block text-transparent bg-clip-text text-3xl font-bold'>
                        DocPilot
                    </h1>
                </div>

                {/* Tab buttons */}
                <div className='flex w-fit h-3/4 gap-1 my-auto'>
                    <NavLinkTab to="chat" activeColor="text-sky-500" label="Chat" Icon={IoIosChatboxes}/>
                    <NavLinkTab to="archive" activeColor="text-fuchsia-500" label="Arquivos" Icon={FaFileAlt}/>
                    <NavLinkTab to="info" activeColor="text-fuchsia-700" label="Configurações" Icon={RiTeamFill}/>
                </div>
                <span className='flex gap-4'>
                    {/* User Type indicator */}
                    <div className='flex w-fit h-fit gap-2 my-auto'>
                        {/* Chat Tab button */}
                        <div className="flex w-fit h-fit bg-fuchsia-700 text-white items-center rounded-xl px-3 py-1 font-medium">
                            <p className='h-fit font-light'>
                                Admin
                            </p>
                        </div> 
                    </div>
                    {/* Leave button */}
                    <div className='flex w-fit h-3/4 gap-1 my-auto'>
                        {/* Chat Tab button*/}
                        <button onClick={(e) => handleLogout(e)} className='bg-amber-400'>
                            Sair
                        </button>
                    </div>                    
                </span>
            </div>
            <Toaster/>
        </nav>
    )
}

export default HomeHeader
