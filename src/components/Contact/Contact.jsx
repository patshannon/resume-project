import React from "react";
import Footer from "../Footer"

const email = process.env.REACT_APP_EMAIL
function Contact(){
    return (
        <>
            <div className="content margin-top">
                <div className="row-padding">
                    <div className="col-md-12 float-left">
                        <div className="right-box margin-bottom">
                            <h2>Hello Everyone, I am currently working on implementing a direct email messaging form.</h2>
                            <br></br>
                            <h4>Feel free to contact me via email</h4>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    
    );
}
export default Contact;