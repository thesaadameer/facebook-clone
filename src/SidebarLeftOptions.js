import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './SidebarLeftOptions.css'

function SidebarLeftOptions({ Icon, name }) {

  const user = useSelector(selectUser);

  return (
    <div className='sidebarLeftOptions'>

        {Icon && <Icon className="sidebarLeftOptions__icons" />}

        <h4>{name}</h4>

    </div>
  )
}

export default SidebarLeftOptions