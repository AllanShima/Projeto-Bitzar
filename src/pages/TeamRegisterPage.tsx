import UserInputLabel from '@/ui/UserInputLabel';
import React, { useState } from 'react'
import { MdSubtitles, MdOutlinePassword } from "react-icons/md";

const TeamRegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    title: '',
    description: '',
    code: '',
  });

  const [enterCode, setEnterCode] = useState('');

  const [registerLoading, setRegisterLoading] = useState(false);
  const [enterLoading, setEnterLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setRegisterData(prev => ({...prev, [name] : value}));
  }

  const handleTeamLogin = () => {
    setEnterLoading(true);
  }

  const handleTeamRegister = () => {
    setRegisterLoading(true);
  }

  return (
    <div className='flex gap-3 w-full h-full bg-linear-to-bl from-fuchsia-500 to-sky-500 items-center justify-center'>
      
      {/* Enter group Container */}
      <div className='flex flex-col w-100 h-fit p-10 bg-white rounded-2xl'>
        <fieldset className='flex flex-col w-full items-center space-y-30'>
          <form 
            onSubmit={handleTeamLogin}
            className='flex flex-col w-full items-center space-y-6'>
            <h1 className='w-fit font-bold text-black text-2xl'>
                Entrar em uma Sala
            </h1>
            <UserInputLabel state={enterCode} setState={setEnterCode} placeholder='Digite o código...' Icon={MdOutlinePassword} label='Código'/>
            <button 
            type='submit'
            disabled={enterLoading}
            className='flex justify-center w-full h-fit py-2 text-white font-medium bg-linear-to-r from-blue-400 to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 transition disabled:opacity-50 rounded-full'>
                {enterLoading ? "Carregando..." : "Entrar"}
            </button>                        
          </form>
        </fieldset>
      </div>
      
      {/* Register new group Container */}
      <div className='flex flex-col w-100 h-fit p-10 bg-white rounded-2xl'>
        <fieldset className='flex flex-col w-full items-center space-y-30'>
          <form 
            onSubmit={handleTeamRegister}
            className='flex flex-col w-full items-center space-y-6'>
            <h1 className='w-fit font-bold text-black text-2xl'>
                Criar Nova Sala
            </h1>
            <UserInputLabel state={registerData.title} setState={(y) => handleChange("title", y)} placeholder='Digite o título...' Icon={MdSubtitles} label='Título'/>
            <UserInputLabel state={registerData.description} setState={(y) => handleChange("description", y)} placeholder='Digite a descrição...' Icon={MdSubtitles} label='Descrição'/>
            <UserInputLabel state={registerData.code} setState={(y) => handleChange("code", y)} placeholder='Digite o código de entrada...' Icon={MdOutlinePassword} label='Código/Senha'/>
            <button 
            type='submit'
            disabled={registerLoading}
            className='flex justify-center w-full h-fit py-2 text-white font-medium bg-linear-to-r from-blue-400 to-fuchsia-400 hover:from-blue-500 hover:to-fuchsia-500 transition disabled:opacity-50 rounded-full'>
                {registerLoading ? "Carregando..." : "Criar"}
            </button>                        
          </form>

          <div className='flex flex-col items-center'>
            <p className='text-gray-600 font-light text-sm'>
                Ou se não cadastrou ainda
            </p>
            <a 
              href="/register"
              className='text-purple-900 font-semibold'
            >
              Cadastrar
            </a>                        
          </div>
        </fieldset>
      </div>
    </div>
  )
}

export default TeamRegisterPage
