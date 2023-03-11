import React from 'react'
import './PostOptions.css'

function PostOptions({ Icon, name, color }) {
  return (
    <div className='postOptions'>        
        <Icon style={{color:color}} className="postOptions__icon" />
        <h4>{name}</h4>
    </div>
  )
}

export default PostOptions