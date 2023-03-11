import React from 'react'
import './SidebarLeft.css'
import GroupIcon from '@mui/icons-material/Group';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SidebarLeftOptions from './SidebarLeftOptions';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { Avatar } from '@mui/material';

function SidebarLeft() {

  const user = useSelector(selectUser);

  return (
    <div className='sidebarLeft'>

            <div className="sidebarLeft__avatar">
              <Avatar 
                  className='sidebarLeftOptions__avatarImg'
                  src={user.photoUrl}>
                    {user?.email[0]}
              </Avatar>
              <h4>{user.displayName}</h4>
            </div>
            

            {/* Other Options */}
            <SidebarLeftOptions Icon={GroupIcon} name="Friends"/>
            <SidebarLeftOptions Icon={GroupsOutlinedIcon} name="Groups"/>
            <SidebarLeftOptions Icon={ShoppingBagOutlinedIcon} name="Marketplace"/>
            <SidebarLeftOptions Icon={TvOutlinedIcon} name="Watch"/>
            <SidebarLeftOptions Icon={CalendarTodayOutlinedIcon} name="Events"/>
            <SidebarLeftOptions Icon={AccessTimeOutlinedIcon} name="Memories"/>
            <SidebarLeftOptions Icon={KeyboardArrowDownOutlinedIcon} name="See More"/>

    </div>
  )
}

export default SidebarLeft