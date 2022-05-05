import React from 'react';
import { Button } from "@materials-ui/core";
import { auth } from "./firebase";
import "./Login.css"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => console.log(result)
        ).catch(error=> alert(error.message));
    };

  return (
    <div className="login">
        <div className="login__container">
            <img
                src=""
                alt=""
            >
            <div className="login__text">
                <h1>Sign in to WhatsApp</h1>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In With Google
            </Button>
            
            </img>
        </div>
    </div>
  )
}

export default Login