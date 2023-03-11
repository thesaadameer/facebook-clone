import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarRightContact.css'

function SidebarRightContact({ name, pict }) {
  return (
    <div className='sidebarRight__contact'>
        
 
        <Avatar 
            className='sidebarRight__contactAvatar'
            src={pict}
        >
          {name[0]}
        </Avatar>
        
        <h3 className='sidebarRight__contactName'>{name}</h3>

    </div>
  )
}

export default SidebarRightContact