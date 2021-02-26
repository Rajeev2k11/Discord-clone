import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase";

function Login() {

   const signIn=()=>{

        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <h2>login</h2>
            <div className="login__logo">
                <img src=" " alt='discord logo'/>
            </div>
           
               <Button onClick={signIn} className="button" name="Login"/>
           
        </div>
    )
}

export default Login
