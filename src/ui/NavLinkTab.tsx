import React from 'react'
import { NavLink } from 'react-router';
import type { IconType } from "react-icons";

interface NavLinkTabProps {
    to: string;
    activeColor: string;
    label: string;
    Icon: IconType;
}

const NavLinkTab = ({to, activeColor, label, Icon} : NavLinkTabProps) => {

    const getTabStyle = (isActive: boolean) =>  // Retorna automaticamente
        `flex items-center space-x-4 w-full h-full rounded-xl p-3 transition font-medium cursor-default ${
            isActive 
            ? `bg-white ${activeColor} shadow-lg` 
            : "text-white hover:bg-purple-400 hover:text-black"
        }`;

    return (
        <>
            {/* NavLink contém state automatico */}
            {/* OBS: isActive is inside curlies so it destructures the object sent by NavLink */}
            <NavLink to={to}>
                {({isActive}) => (
                    <div className={getTabStyle(isActive)}>
                        <span className='w-4.5 h-4.5'>
                            <Icon className='w-full h-full'/>
                        </span>
                        <p className='font-normal'>
                            {label}
                        </p>
                    </div>   
                )}            
            </NavLink>        
        </>
    )
}

export default NavLinkTab
