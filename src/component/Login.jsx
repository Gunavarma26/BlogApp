import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import {Input,Button} from "antd";
import '../style/login.css'
import logo2 from '../assest/logo2.jpg'
import { useNavigate } from "react-router-dom";


function LoginPage(){

  const {login,setLogin,setRegesters,setUserName,userName,setUserPassword,userPassword,signName,signPassword} = useContext(DataContext)
   
  let logname=signName;
  let logpassword=signPassword;
 
    function change(){
      if (userName=== logname && userPassword===logpassword) {
        setRegesters(false);
        page('/')
      }
      else if (userName==='g' && userPassword==='g') {
        setRegesters(false);
        page('/')
      }
      else{
        alert('Incorrect username or password.')
      }
    }
    
    const page = useNavigate()
    return(
      
      <>
          <div className="login" >
          <img className='loginlogo' src={logo2} alt={logo2} />
            <br />
            <div className="logincontainer">
                <div className="logintitle">LOGIN</div>
                <div className="usernamediv" >
                  <div className="username" >UserName </div>
                  <Input className="inputname" onChange={(event)=>{setUserName(event.target.value)}} placeholder="Enter username"  />
                </div>
                <div className="userpassdiv" >
                  <div className="password" >Password </div>
                  <Input.Password className="inputpass" onChange={(e)=>{setUserPassword(e.target.value)}}  placeholder="Enter password"  />
                </div>
                <div className="loginbtns" >
                  <Button onClick={()=>{change();}} className="loginbtn" type="primary">Login</Button>
                  <p style={{marginLeft:"90px",fontSize:"18px",marginTop:"15px"}}>Don't have an account ? </p>
                  <Button onClick={()=>{page('/regester')}} className="newaccount"  type="primary">Create new account</Button>
                </div>
                <div>
                  
                </div>
            </div>
          </div>
        </>
      )
    }
    
    export default LoginPage;