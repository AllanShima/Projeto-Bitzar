import type { User } from '@/interfaces/Interfaces'
import React, { type Dispatch, type SetStateAction } from 'react'

interface UserSettingsModalProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    userInfo: User
}

const UserSettingsModal = ({userInfo, setIsOpen} : UserSettingsModalProps) => {

  return (
    <div>
      
    </div>
  )
}

export default UserSettingsModal
