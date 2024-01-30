import React from 'react';
import '../style/contactus.css'
import Footer from './Footer';
import { FaAddressBook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <>
      <section className="contact">
        <div className="content">
          <h2 className="contact_head">Need Help ? Support Is Here !</h2>
          <br />
          <p className="head_para">
          Welcome to our blog, where curiosity meets content. Dive into a world of compelling articles, each crafted to inspire and inform. From insightful perspectives to captivating narratives, we're committed to delivering a rich reading experience. Join us on this journey of exploration and discovery.
          </p>
        </div>

        <div id="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <FaAddressBook/>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>4671 Sugar Camp Road, Delhi</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
                <FaPhone/>
              </div>
              <div className="text">
                <h3 className="h3_head">Phone</h3>
                <p>+91 8122551263</p>
              </div>
            </div>

            <div className="box">
              <div className="icon">
               <IoIosMail />
              </div>
              <div className="text">
                <h3 className="h3_head">Email</h3>
                <p>www.blogerblog.com</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <p className="h2_form">24/7 Custamour Support</p>

              <div className="inputBox">
                <input className="input_box" type="text" name="" required="required" />
                <span className="support_span">Full Name</span>
              </div>
              <br />
              <div className="inputBox">
                <input className="input_box" type="text" name="" required="required" />
                <span className="support_span">Email</span>
              </div>
              <br />
              <div className="inputBox">
                <textarea className="input_box" required="required"></textarea>
                <span className="support_span">Type your Message...</span>
              </div>
              <div className="inputBox">
                <button id="send_btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
        <Footer className='footer' />
    </>
  );
};

export default ContactUs;
