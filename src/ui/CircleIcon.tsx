import type { ifError } from 'firebase/firestore/lite/pipelines';
import React from 'react'
import { RiRobot2Line } from "react-icons/ri";

interface CircleIconProps {
    firstName?: string,
    lastName?: string
}

const CircleIcon = ({firstName, lastName} : CircleIconProps) => {
    const firstInitial = firstName?.[0] || '';
    const lastInitial = lastName?.[0] || '';

    const abbreviation = (firstInitial + lastInitial).toUpperCase();

    // Se tiver vazio, é robo, contrario é user
    const handleStyle = abbreviation == "" ? "bg-linear-to-r from-purple-600 to-purple-700" : "bg-linear-to-br from-blue-600 to-blue-700";
    
    return (
        <div className={`flex w-full h-full justify-center items-center rounded-full text-white p-2 ${handleStyle}`}>
            {abbreviation || <RiRobot2Line className='w-full h-full'/>}
        </div>
    )
}

export default CircleIcon
