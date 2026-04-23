import React, { type Dispatch, type SetStateAction } from 'react'
import { NavLink } from 'react-router';
import type { IconType } from "react-icons";

interface TabButtonProps {
    onClick: () => void, // Função
    isActive: boolean,
    activeColor: string;
    label: string;
    Icon: IconType;
}

const TabButton = ({onClick, isActive,  activeColor, label, Icon} : TabButtonProps) => {

    const getTabStyle = (isActive: boolean) =>  // Retorna automaticamente
            isActive 
            ? `bg-white ${activeColor} shadow-lg` 
            : "text-white hover:bg-purple-400 hover:text-black";

    return (
        <button onClick={onClick}>
            <div className={`flex items-center space-x-4 w-full h-full rounded-xl p-3 transition font-medium cursor-default border-none ${getTabStyle(isActive)}`}>
                <span className='w-4.5 h-4.5'>
                    <Icon className='w-full h-full'/>
                </span>
                <p className='font-normal'>
                    {label}
                </p>
            </div>
        </button>        
    )
}

export default TabButton
