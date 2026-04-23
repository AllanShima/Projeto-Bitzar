import { Dialog } from '@headlessui/react';
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import FileDeleteModal from './FileDeleteModal';
import FileSettingsModal from './FileSettingsModal';
import { CgTrash } from 'react-icons/cg';
import { MdOutlineEdit, MdOutlineFileDownload } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import { IoDocumentTextOutline } from 'react-icons/io5';

const UserCard = () => {
    const [fileSettingsModal, setFileSettingsModal] = useState(false);
    const [fileDeleteModal, setFileDeleteModal] = useState(false);

    const downloadFile = () => {
        // toast.promise(
        //     saveSettings(settings),
        //     {
        //         loading: 'Saving...',
        //         success: <b>Settings saved!</b>,
        //         error: <b>Could not save.</b>,
        //     }
        // );
    }

    return (
        <div className='flex w-full h-fit rounded-2xl p-5 mb-7 justify-between bg-white hover:shadow-lg transition'>
            {/* Image/Icon */}
            <span className='flex space-x-4 items-center'>
                <div className='flex w-fit h-fit p-3 rounded-2xl bg-linear-to-r from-sky-100 to-fuchsia-100'>
                    <span className='w-fit h-fit'>
                        <IoDocumentTextOutline className='w-10 h-10 text-fuchsia-700'/>
                    </span>
                </div>
                {/* Main info */}
                <div className='flex flex-col w-fit h-fit text-black space-y-2'>
                    <h2 className='font-medium text-xl'>Manual de Processos</h2>
                    <p className='text-gray-800'>Manual completo de processos internos</p>
                    <span className='flex items-center space-x-4 text-gray-600 text-xs'>
                        <p>2.5MB</p>
                        <GoDotFill className='w-1.5 h-1.5'/>
                        <p>19/02/2026</p>
                    </span>
                </div>            
            </span>

            <div className='flex space-x-2'>

                <button 
                    onClick={() => downloadFile()}
                    className='w-fit h-fit p-1.5 rounded-md hover:bg-blue-50 transition duration-200'
                >
                    <MdOutlineFileDownload className='w-5 h-5 text-blue-700'/>
                </button>

                <button
                    onClick={() => setFileSettingsModal(true)}
                    className='w-fit h-fit p-1.5 rounded-md hover:bg-fuchsia-50 transition duration-200'
                >
                    <MdOutlineEdit className='w-5 h-5 text-fuchsia-700'/>
                </button>

                <button 
                    onClick={() => setFileDeleteModal(true)}
                    className='w-fit h-fit p-1.5 rounded-md hover:bg-red-50 transition duration-200'
                >
                    <CgTrash className='w-5 h-5 text-red-700'/>
                </button>
                
            </div>
            <Dialog open={fileSettingsModal} onClose={() => setFileSettingsModal(false)}>
                <FileSettingsModal setIsOpen={setFileSettingsModal}/>
            </Dialog>
            <Dialog open={fileDeleteModal} onClose={() => setFileDeleteModal(false)}>
                <FileDeleteModal setIsOpen={setFileDeleteModal}/>
            </Dialog>

            <Toaster/>
        </div>
    )
}

export default UserCard
