import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assest/logo.svg';
const year = new Date();

const Footer = () => {

  const page = useNavigate()

  return(

    <footer 
      style={{
        backgroundColor: "white", color: "black", padding: "10px", bottom: 0, left: 0, width: "100%",       boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
      }} 
      className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <img
              src={logo}
              className="logo"
              alt="Logo"
              style={{}}
            />
            <p>
              Embark on your blogging journey today and become part of a vibrant community where writers and readers alike are enthusiastic about exchanging their narratives and insights. We provide all the tools you require to kickstart your creative endeavors.
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-0"/>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase" style={{fontFamily: 'serif', textDecoration: "underline"}}>Pages</h5>
            <ul className="list-unstyled">
              <li onClick={()=>{page(`/`)}} className="navlist">Home</li>
              <li  onClick={()=>{page(`post`)}}  className="navlist">Post</li>
              <li  onClick={()=>{page(`about`)}}  className="navlist">About</li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase" style={{fontFamily: 'serif', textDecoration: "underline"}}>Support</h5>
            <ul className="list-unstyled">
              <li onClick={()=>{page(`contact`)}}  className="navlist">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        Copyright &copy; {year.getFullYear()}
      </div>
  </footer>
)};

export default Footer;
