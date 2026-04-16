import React, { useState } from 'react'
import { RiRobot3Line } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";

const ChatPage = () => {

  const [userText, setUserText] = useState("");
  const [containsText, setContainsText] = useState(false);

  const handleButtonPress = () => {

  }

  const getButtonStyle = (isActive: boolean) =>
          isActive 
          ? "bg-linear-to-r from-sky-300 to-fuchsia-300 hover:bg-linear-to-r hover:from-sky-400 hover:to-fuchsia-400 transition"
          : "bg-linear-to-r from-sky-200 to-fuchsia-200 transition";

  return (
    <div className='flex flex-col w-screen h-screen p-10 bg-gray-100'>
      <div className='flex flex-col flex-1 w-full h-full rounded-2xl bg-white shadow-lg'>
        {/* Inner Header */}
        <div className='w-full h-fit flex flex-col gap-1 bg-linear-to-r from-sky-500 to-fuchsia-500 p-5 rounded-t-2xl'>
          <span className='flex gap-2'>
            <RiRobot3Line className='w-7 h-7'/>
            <h2 className='font-normal text-2xl'>
              DocPilot: Seu co-piloto de acesso fácil a dados empresariais!
            </h2>
          </span>
          <p className='font-light'>
            Modelo de IA Generativa: Llama
          </p>
        </div>
        {/* Inner Body */}
        <div className='w-full h-full'>

        </div>
        {/* Inner Footer (User Input) */}
        <div className='flex flex-col w-full h-fit p-4 gap-2 rounded-b-2xl bg-linear-to-r from-sky-50 to-fuchsia-50'>
          <span className='flex gap-3'>
            <textarea 
              value={userText}
              onChange={(e) => {setUserText(e.target.value); setContainsText(e.target.value.length > 0)}} 
              className='flex w-full h-full px-4 py-2 bg-gray-100 rounded-2xl text-black focus:outline-2 focus:outline-gray-300 transition'/>
            {/* Botão de enviar mensagem */}
            <button 
              onClick={handleButtonPress}
              className={`flex w-fit h-full p-4 items-center justify-center rounded-2xl ${getButtonStyle(containsText)}`}>
              <IoIosSend className='w-6 h-6'/>
            </button>            
          </span>

          <p className='text-gray-500 text-xs font-light'>
            O DocPilot utiliza os documentos PDF carregados para responder suas perguntas
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
