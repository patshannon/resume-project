import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="info-box center margin-top">
      <p>Find me on social media.</p>
  <a className="social-link" href="https://www.facebook.com/patrick.shannon.94"><i className="fa fa-facebook-official opacity"></i></a>
  <a className="social-link" href="https://www.linkedin.com/in/patrick-e-shannon"><i className="fa fa-linkedin opacity"></i></a>
  <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
