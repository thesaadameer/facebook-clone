import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, []);


  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SidebarLeft />
          <Feed />
          <SidebarRight />
        </div>
      )} 
      

    </div>
  );
}

export default App;
