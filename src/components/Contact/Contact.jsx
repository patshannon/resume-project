import React, { useState } from "react";
import Footer from "../Footer";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router";

export default function Contact() {
  const [user, setText] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    console.log(user);
  }

  const [isSent, setSent] = useState(false);

  function sendEmail(e) {
    if (
      user.user_name !== "" &&
      user.message !== "" &&
      user.user_email !== ""
    ) {
      e.preventDefault();
      emailjs
        .sendForm(
          "default_service",
          "template_vaw0ggo",
          e.target,
          "user_AoEJ0fNkPUEePesYyHNIV"
        ) //insert user_AoE etc.
        .then(
          (result) => {
            console.log(result.text);
            toast.info("Message Sent!", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setSent(true);
            setTimeout(() => window.location.reload(), 2000);
          },
          (error) => {
            e.preventDefault();
            console.log(error.text);
            alert("There was an error please try again!");
          }
        );
    } else {
      e.preventDefault();
      alert("Please Enter All Your Info!");
    }
  }

  return (
    <div className="margin-top">
      <div className="col-12 contentBox contactBox">
        <h1 className="center padding-16 icon-grey">Get in Touch!</h1>
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            onChange={handleChange}
            className="inputBox"
            type="text"
            name="user_name"
            id="uname"
            placeholder="Name"
          />
          <input
            onChange={handleChange}
            className="inputBox"
            type="email"
            name="user_email"
            id="uemail"
            placeholder="Email"
          />
          <textarea
            onChange={handleChange}
            name="message"
            id="messageBox"
            className="inputBox"
            placeholder="Type Message Here..."
          />
          <input
            id="send"
            className={`btn btn-primary margin-bottom ${
              isSent ? "greenCheck" : ""
            }`}
            value={`${isSent ? "Sent!" : "Send"}`}
            type="submit"
          />
        </form>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer className="contactFooter" />
    </div>
  );
}
