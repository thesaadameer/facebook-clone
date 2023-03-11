import React, { useState } from 'react'
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    if(!name){
        return alert("Please enter a name");
    }

    const auth = getAuth();
    let user; // declare user variable outside of the then blocks
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        user = userCredential.user; // assign user value
        return updateProfile(user, {
        displayName: name,
        photoURL: profilePic
        });
    })
    .then(() => {
        dispatch(login({
        email: email,
        uid: user.uid, // use user variable here
        displayName: name,
        photoUrl: profilePic,
        }));
    })
    .catch((error) => alert(error));
  }

  const loginToApp = (e) => {
    e.preventDefault();    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            profileUrl: user.photoURL,
        }));
    })
    .catch((error) => alert(error));
  }

  return (
    <div className='login'>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />

        <form>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Full Name (required when registering)' 
                type="text" 
            />
            <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder='Profile pic URL (optional)' 
                type="text" 
            />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email' 
                type="email" 
            />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' 
                type="password" 
            />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>

    </div>
  )
}

export default Login