import type { Message } from '@/interfaces/Interfaces'
import React from 'react'
import CircleIcon from './CircleIcon'

interface ChatBodyProps {
    messages: Message[]
}

const ChatBody = ({messages} : ChatBodyProps) => {
    // Requesição do usuário logado pra pegar o nome
    const firstName = "Allan";
    const lastName = "Shinhama";

    const handleBubbleStyle = (role : string) => {
        return role === "user" 
        ? "bg-linear-to-r from-blue-500 to-blue-600" 
        : "bg-linear-to-r from-purple-500 to-purple-600";
    }
    return (
        <div className='flex-1 flex flex-col w-full h-full overflow-y-auto p-4 space-y-4'>
            {messages.map((msg, index) => (
                <div key={index} className={`flex max-w-150 h-fit gap-3 ${msg.role == "user" ? "justify-start flex-row-reverse ml-auto" : "justify-start"}`}>
                    <span className='w-9 h-9'>
                        <CircleIcon firstName={firstName} lastName={lastName}/>
                    </span>
                    {/* Bolha de texto */}
                    <div className={`flex w-full h-full wrap-normal p-3 rounded-lg text-white ${handleBubbleStyle(msg.role)}`}>
                        {msg.content}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatBody
