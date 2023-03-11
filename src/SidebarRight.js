import React from 'react'
import './SidebarRight.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarRightContact from './SidebarRightContact';

function SidebarRight() {
  return (
    <div className='sidebarRight'>

      <div className="sidebarRight__header">
        <h3>Contacts</h3>        
        <VideocamIcon className='sidebarRight__headerIcon'/>
        <SearchIcon className='sidebarRight__headerIcon'/>
        <MoreHorizIcon className='sidebarRight__headerIcon'/>        
      </div>

      <div className="sidebarRight__contacts">
        <SidebarRightContact name="Elon Musk" pict="https://simg.nicepng.com/png/small/198-1986986_elon-musk.png"/>
        <SidebarRightContact name="Jeff Bezos" pict="https://images.squarespace-cdn.com/content/v1/5ca643107b5558000138abd1/1554823204560-1YUF4YMP2EYSL0BHG8X2/0-1.png"/>
        <SidebarRightContact name="Tim Cook" pict="https://cdn.redmondpie.com/wp-content/uploads/2014/10/Apple-Tim-Cook.png" />
        <SidebarRightContact name="Michael Jordan" pict="https://www.pngmart.com/files/4/Michael-Jordan-PNG-Pic.png" />
      </div>

    </div>
  )
}

export default SidebarRight