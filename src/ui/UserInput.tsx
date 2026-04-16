import React, { useState, type ChangeEventHandler } from 'react'
import type { IconType } from "react-icons";

interface UserInputProps {
    state: string,
// This tells TypeScript: "This is a function that updates a string"
    setState: (value: string) => void;
    placeholder: string,
    Icon?: IconType
}

const getSearchStyle = (isActive: boolean) => 
        `flex w-full h-full items-center rounded-md text-gray-400 bg-gray-100 text-xs border-0 focus:shadow-md transition duration-200 ${
            isActive 
            ? `outline-3 outline-gray-350 transition duration-200` 
            : "outline-1 outline-transparent"
        }`;

const UserInput = ({state, setState, placeholder, Icon} : UserInputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={getSearchStyle(isFocused)}>
            {Icon != null ? (
                <span className='flex items-center justify-center w-fit h-full px-4 border-r-2 text-gray-300'>
                    <Icon className='w-4 h-4 text-gray-400'/> 
                </span>                
            ) : (
                <>
                </>
            )}

            <input 
            className='w-full h-full focus:outline-none pl-4 outline-black placeholder-gray-400 text-sm md:text-md' type="text" 
            value={state} 
            onChange={(e) => setState(e.target.value)}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)} 
            onBlur={() => setIsFocused(false)}/>
        </div>
    )
}

export default UserInput
