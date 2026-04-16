import React, { useState, type ChangeEvent, type Dispatch, type SetStateAction } from 'react'
import UserInput from './UserInput'
import type { IconType } from "react-icons";

interface UserInputLabelProp {
    state: string,
    // This tells TypeScript: "This is a function that updates a string"
    setState: (value: string) => void;
    placeholder: string,
    Icon? : IconType,
    label : string,
}

const UserInputLabel = ({label, ...props} : UserInputLabelProp) => {
  return (
    <div className='flex flex-col w-full space-y-2'>
      <label className='text-gray-600 font-bold'>
        {label}
      </label>
      <div className='flex w-full h-10 shadow-lg rounded-2xl'>
        <UserInput {...props}/>                            
      </div>
    </div>
  )
}

export default UserInputLabel
