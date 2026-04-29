import type { Message } from '@/interfaces/Interfaces'
import React from 'react'
import CircleIcon from './CircleIcon'

interface ChatBodyProps {
    messages: Message[]
}

const ChatBody = ({messages} : ChatBodyProps) => {

    const handleCreationDate = (msg: Message) => {
        if (msg.createdAt !== null) {
            const hours = String(msg.createdAt?.getHours()).padStart(2, '0');
            const minutes = String(msg.createdAt?.getMinutes()).padStart(2, '0');
            return hours + ":" + minutes;
        } else{
            return "undefined"
        }
    }

    const handleBubbleStyle = (role : string) => {
        return role === "user" 
        ? "bg-linear-to-r from-blue-500 to-blue-600 text-white" 
        : "bg-linear-to-r from-blue-50 to-fuchsia-50 outline-1 outline-gray-200 text-black";
    }
    return (
        <div className='flex-1 flex flex-col w-full h-full overflow-y-auto p-4 space-y-4'>
            {messages.map((msg, index) => (
                <div key={index} className={`flex max-w-150 h-fit gap-3 ${msg.role == "user" ? "justify-start flex-row-reverse ml-auto" : "justify-start"}`}>
                    <span className='w-9 h-9'>
                        <CircleIcon role={msg.role}/>
                    </span>
                    {/* Bolha de texto */}
                    <div className={`flex flex-col gap-1 p-3 rounded-lg  ${handleBubbleStyle(msg.role)}`}>
                        <p className='w-full h-full wrap-normal'>
                            {msg.content}  
                        </p>
                        <p className='text-gray-400 text-xs font-light'>
                            {handleCreationDate(msg)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatBody
