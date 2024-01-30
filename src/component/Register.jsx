import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import '../style/register.css'
import logo2 from '../assest/logo2.jpg'
import { useNavigate } from 'react-router-dom';



function Register() {

  const {setSignName,setSignPassword} = useContext(DataContext)
   
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cpasswordError, setCPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'cpassword':
        setCPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      page('/')
      console.log('Form submitted successfully');
    }
  };

  const validateInputs = () => {
    let success = true;

    
    if (username.trim() === '') {
      success = false;
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }

    
    if (email.trim() === '') {
      success = false;
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      success = false;
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }

   
    if (password === '') {
      success = false;
      setPasswordError('Password is required');
    } else if (password.length < 8) {
      success = false;
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }

    
    if (cpassword === '') {
      success = false;
      setCPasswordError('Confirm password is required');
    } else if (cpassword !== password) {
      success = false;
      setCPasswordError('Password does not match');
    } else {
      setCPasswordError('');
    }

    return success;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const page = useNavigate()


  return (
    <div className="register">
      <div className="container">
        <img className='registerlogo' src={logo2} alt={logo2} />
        <form onSubmit={handleSubmit}className='form' >
          <p className='p'>CREATE ACCOUNT</p>
          <div className={`input-group ${usernameError && 'error'}`}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e)=>{handleChange(e);setSignName(e.target.value)}}
            />
            <div className="error">{usernameError}</div>
          </div>
          <div className={`input-group ${emailError && 'error'}`}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <div className="error">{emailError}</div>
          </div>
          <div className={`input-group ${passwordError && 'error'}`}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <div className="error">{passwordError}</div>
          </div>
          <div className={`input-group ${cpasswordError && 'error'}`}>
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              value={cpassword}
              onChange={(e)=>{handleChange(e);setSignPassword(e.target.value)}}
            />
            <div className="error">{cpasswordError}</div>
          </div>
          <button type="submit"  onClick={(e)=>{handleSubmit(e)}} >SIGN UP</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
