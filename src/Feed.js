import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Feed.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PostOptions from './PostOptions';
import Post from './Post';
import { db } from './firebase';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

   //Query to sort the posts with timestamps
   const postsCollection = collection(db, "posts");
   const postsQuery = query(postsCollection, orderBy("timestamp", "desc")); 

  useEffect(() => {
    onSnapshot(postsQuery, (snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      name: user.displayName,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
  };

  return (
    <div className='feed'>

        <div className="postBar">

          <div className="postBar__input">
            <Avatar 
              className='postBar__inputAvatar'
              src={user.photoUrl}
            >
              {user.email[0]}
            </Avatar>
            <form action="">
              <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="What's on your mind"/>
              <button onClick={sendPost} type='submit'>Send</button>
            </form>            
          </div>

          <div className="postBar__postOptions">
              <PostOptions className="postBar__postOption" Icon={VideocamIcon} color="#FF7A72" name="Live Video" />
              <PostOptions className="postBar__postOption" Icon={CameraAltIcon} color="#3690A0" name="Photo/Video" />
              <PostOptions className="postBar__postOption" Icon={InsertEmoticonIcon} color="#E5D35B" name="Feeling/Activity" />
          </div>

        </div>

        {/* POSTS */}

        <div className="feed__posts">

          {posts.map(({ id, data: { name, message, photoUrl } }) => (
            <Post 
              key={id}
              name={name}
              message={message}
              photoUrl={photoUrl}
            />
          ))}


        </div>

    </div>
  )
}

export default Feed