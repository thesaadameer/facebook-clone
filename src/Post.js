import React from 'react'
import './Post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PostOptions from './PostOptions';
import { Avatar } from '@mui/material';

function Post({ message, name, photoUrl }) {
    
  return (
    <div className='post'>

            <div className="post__person">
                <Avatar 
                    className='post__personAvatar'
                    src={photoUrl}
                >
                    {name[0]}
                </Avatar>
                <h3>{name}</h3>
            </div>           

            <p className='post__content'>
                {message}
            </p>

            <div className="post__reacts">
                <PostOptions Icon={ThumbUpOutlinedIcon} color="gray" name="Like" />
                <PostOptions Icon={ChatOutlinedIcon} color="gray" name="Comment" />
                <PostOptions Icon={ShareOutlinedIcon} color="gray" name="Share" />
            </div>

            
        
    </div>
  )
}

export default Post