import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Chat from './Components/Chat';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import { login, selectUser,logout } from './features/userSlice';
import { auth } from "./Firebase";



function App() {

 const user = useSelector(selectUser)
 const dispatch = useDispatch()
 
 useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(
        login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,

        })
      );
    } else{
      dispatch(logout());
    }
  })
   
 }, [dispatch])



  return (
   
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login/>
      )}
      
    </div>
  );
}

export default App;
