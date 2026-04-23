import React, { type Dispatch, type SetStateAction } from 'react'

interface NewMemberProp {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}


const NewMemberModal = ({setIsOpen} : NewMemberProp) => {
    return (
        <div>
        
        </div>
    )
}

export default NewMemberModal
