import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import AppsIcon from '@mui/icons-material/Apps';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, Icon, IconButton } from '@mui/material';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="header">

        <div className="header__leftSearch">            
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
            <div className="header__leftSearchBar">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text"/>
            </div>
        </div>

        <div className="header__midPages">

            <HeaderOption Icon={HomeIcon} color="#4274df" />
            <HeaderOption Icon={FlagOutlinedIcon} />
            <HeaderOption Icon={PlayCircleOutlineOutlinedIcon} />
            <HeaderOption Icon={ShoppingCartOutlinedIcon} />
            <HeaderOption Icon={Groups2OutlinedIcon} />

            {/* <HomeIcon />
            <FlagOutlinedIcon />
            <PlayCircleOutlineOutlinedIcon />
            <ShoppingCartOutlinedIcon />
            <Groups2OutlinedIcon /> */}
        </div>

        <div className="header__rightProfile">
            <Avatar 
                onClick={logoutOfApp}
                className='header__rightProfileAvatar'
                src={user?.photoUrl}
            >
                {user?.email[0]}
            </Avatar>
            <h4 onClick={logoutOfApp}>{user?.displayName}</h4>
            <IconButton  className='header__rightProfileIcon'>
                <AppsIcon />
            </IconButton>
            <IconButton className='header__rightProfileIcon'>
                <TextsmsIcon />
            </IconButton>
            <IconButton className='header__rightProfileIcon'>
                <NotificationsIcon />
            </IconButton>
            <IconButton className='header__rightProfileIcon'>
                <ArrowDropDownIcon />
            </IconButton>
        </div>


    </div>
  )
}

export default Header