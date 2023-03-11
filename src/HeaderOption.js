import React from 'react'
import './HeaderOption.css'

function HeaderOption({ Icon, color }) {
  return (
    <div className='headerOption'>
        
        {Icon && <Icon style={{color:color}}  className="headerOption__icon"/>}

    </div>
  )
}

export default HeaderOption