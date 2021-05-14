
import React from 'react'
import Footer from "../Footer"
import emailjs from 'emailjs-com'



export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('default_service', 'template_vaw0ggo', e.target,"user_AoEJ0fNkPUEePesYyHNIV")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
        <div className="margin-top">
            <div className="col-12 contentBox contactBox">
                <h1 className="center padding-16 icon-grey">Get in Touch!</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="inputBox"type="text" name="user_name" id="uname" placeholder="Name"/>
                    <input className="inputBox"type="email" name="user_email" id="uemail" placeholder="Email" /> 
                    <textarea name="message" id="messageBox" className="inputBox" placeholder="Type Message Here..."/>
                    <input id="send" className="btn btn-primary margin-bottom" type="submit" value="Send" />
                </form>
            </div>
            <Footer />
        </div>
    );
  }