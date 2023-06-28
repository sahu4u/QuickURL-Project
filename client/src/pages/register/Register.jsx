import React from 'react'
import "./register.css"
import  {  useRef } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';

export default function Register() {

    const email=useRef();
    const password=useRef();
    const passwordAgain=useRef();
    const username=useRef();
    const history =useNavigate();

    const handleClick = async(e) =>{
        e.preventDefault();
        if(passwordAgain.current.value!==password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match! ")
        }
        else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value, 
            }
            try{
                const res =await axios.post("/auth/register",user);
                history("/login")

            }
            catch(err){
                console.log(err)
            }
        }
       
    };


  return (
    <div className="loginX">
        <div className="loginWrapper">
            <div className="loginLeftX">
                <h3 className="loginLogo">QuickURL</h3>
                <span className="loginDesc">
                Get your URLs shortened and saved in few seconds. Add a notes to it.
                </span>
            </div>
            <div className="loginRightX">
                <form className="loginBoxX" onSubmit={handleClick}>
                    <input 
                    placeholder='Username' 
                    required 
                    ref={username} 
                    className="loginInputA" 
                    />
                    <input 
                    placeholder='Email' 
                    required ref={email}
                    className="loginInputA" 
                    type='email'
                    />
                    <input
                     placeholder='Password' 
                     required ref={password}
                     className="loginInputA"
                     type='password'
                     minLength="6"
                      />
                    <input 
                    placeholder='Password Again'
                    type='password'
                    required 
                    ref={passwordAgain}
                    className="loginInputA"
                    minLength="6"
                     />
                    <button className="loginButtonX" type='submit'>Sign Up</button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">
                        <Link to= "/login" style={{textDecoration:"none", color:"white"}}>
                            Log in to Account
                        </Link>
                        
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
