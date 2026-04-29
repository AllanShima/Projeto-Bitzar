import type { TeamMember, User } from '@/interfaces/Interfaces'
import React from 'react'

interface UserStatusTagProp {
    teamMember: TeamMember
}

const UserStatusTag = ({teamMember} : UserStatusTagProp) => {
  return (
        <div className="flex w-fit h-fit bg-fuchsia-700 text-white items-center rounded-xl px-3 py-1">
            <p className='h-fit font-light'>
                {teamMember.status}
            </p>
        </div> 
  )
}

export default UserStatusTag
