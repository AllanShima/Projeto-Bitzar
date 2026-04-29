import React, { type Dispatch, type SetStateAction } from 'react'

interface UserDeleteModalProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>
    userUid: string
}

const UserDeleteModal = ({userUid, setIsOpen} : UserDeleteModalProps) => {
  return (
    <div>
      
    </div>
  )
}

export default UserDeleteModal
