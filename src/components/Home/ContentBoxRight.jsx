import React from "react";

function ContentBoxRight(){
    return (
      <div className="col-md-8 float-left">
        <div className="right-box margin-bottom">
          <h2 className="padding-16 icon-grey">
          <i className="fa fa-suitcase fa-fw color-navy margin-right"></i>
          Work Experience
          </h2>

          <div className="infoBox">
            <h5 className="opacity-60"><b>Full Stack Web Developer</b></h5>
            <h6 className="opacity-60"><b>Freelancer</b></h6>
            <h6 className="color-navy"><i className="fa fa-calendar fa-fw margin-right color-navy"></i>
              Aug 2020 - <span className="tag round ">Current</span>
            </h6>
            <p>Gaining experience and building my portfolio.  Focusing on building my knowledge of all relevant frameworks and working towards my goal of being a professional Full Stack Developer.</p>
            <hr></hr>
          </div>

          <div className="infoBox">
            <h5 className="opacity-60"><b>Pilot</b></h5>
            <h6 className="opacity-60"><b>Porter Airlines</b></h6>
            <h6 className="color-navy"><i className="fa fa-calendar fa-fw margin-right"></i>
              Aug 2018 - <span className="tag round">Current</span>
            </h6>
            <p>705 Operation, conducting scheduled flights for Porter Airlines as a First Officer on the Q400</p>
            <hr></hr>
          </div>

          <div className="infoBox">
            <h5 className="opacity-60"><b>Medevac Pilot</b></h5>
            <h6 className="opacity-60"><b>PAL Aerospace</b></h6>
            <h6 className="color-navy"><i className="fa fa-calendar fa-fw margin-right"></i>
              Jun 2016 - Aug 2018
            </h6>
            <p>703 Operation, conducted medevac flights as a first officer on the King Air 200.</p>
            <hr></hr>
          </div>

          <div className="infoBox">
            <h5 className="opacity-60"><b>Flight Instructor</b></h5>
            <h6 className="opacity-60"><b>Moncton Flight College</b></h6>
            <h6 className="color-navy"><i className="fa fa-calendar fa-fw margin-right"></i>
              Jul 2013 - Jun 2016
            </h6>
            <p>Conducted over 1100 hours of flight instruction in various departments and managed a team of flight instructors to ensure student learning and outcomes were maximized within strict training deadlines.</p>
          </div>           
        </div>

        <div className="right-box">
          <h2 className="padding-16 icon-grey">
            <i className="fa fa-certificate fa-fw color-navy margin-right"></i>
            Education
          </h2>

          <div className="infoBox">
            <h5 className="opacity-60"><b>The Complete 2021 Web Development Bootcamp</b></h5>
            <h6 className="opacity-60"><b>Udemy.com</b></h6>
            <h6 className="color-navy"><i className="fa fa-calendar fa-fw margin-right"></i>
              May 2021
            </h6>
            <p>Completed over 60 hours of online learning, developing fundamental the skills required to become a full stack web developer.</p>
            <hr></hr>
          </div>

          <div className="infoBox">
            <h5 className="opacity-60"><b>Bachelor Of Science & Commerical Pilot License</b></h5>
            <h6 className="opacity-60"><b>Mount Allison University</b></h6>
            <h6 className="color-navy"><i className="fa fa-calendar fa-fw margin-right"></i>
              May 2013
            </h6>
            <p>Graduated with a 3.6 GPA. Simultaneously acquired my BSc. and Commerial Pilot Licence.  Academic focus on Aviation and Environmental Science.</p>
          </div>
        </div>
      </div>
    );
};

export default ContentBoxRight;