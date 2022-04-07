//framework
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//thirdparty
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "libs/firebase";
//my styles
import { LoginPageStyles, FormControl } from "./styles";
import { Label, Input } from "ui/forms";
import { SubmitButton } from "ui/buttons";
import { Brand } from 'components/branding/'
import LoginImg from 'static/images/sneakers-login.jpg';

// STATE
function LoginPage(props) {
  //start with state declaration
  const navigator = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const notify = (error) => toast.error(error.code, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  function onLoginRequest(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCrediential => {
        // move dashboard page
        // useNavigate() react router
        navigator('/dashboard')
      })
      .catch(error => {
        notify(error)
      })
  }

  //  const notify = (err) => toast.error(err.code,{
  //   position: "top-center",
  //   autoClose: 3000,
  //   hideProgress: false,
  //   closeOnClick: true,



  //  function onLoginRequest(e){
  //    e.preventDefault();
  //    signInWithEmailAndPassword(auth, email, password)
  //    .then (userCredential =>{
  //      Navigate('/dashboard')
  //    })
  //    .catch (err =>{
  //      notify(err);
  //    })

  // Login A User Using Auth
  return (
    <LoginPageStyles>
    <div className="flex-container">
      <div className='left-col'>
        <img src={LoginImg} alt='sneakers illustration' />
        <div className='branding'>
          <Brand />
          <p><span>Sneakers</span> Marketplace</p>
        </div>
      </div>
      <div className='right-col'> 
      <ToastContainer />
        <header>
          <h2>Log in.</h2>
          <p>Welcome Back! Please enter your login information...</p>
        </header>

        <form onSubmit={onLoginRequest}>
          <FormControl className="form-control">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="text" width="394px" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>

          <FormControl className="form-control">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" width="394px" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl className="form-control">
            <SubmitButton
              type="submit"
              padding="0.75rem 2rem"
              margin="2rem 0 0"
              fs="1.25rem"
            >
              SIGN IN
            </SubmitButton>
          </FormControl>
        </form>
      </div>
    </div>
    <p className='copyright'>© 2022 Orange Label by Yen Pham. All rights reserved.</p>
    </LoginPageStyles>
  );
}



export default LoginPage;
