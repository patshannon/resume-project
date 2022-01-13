import React from "react";

function ContentBoxRight() {
  return (
    <div className="col-md-8 float-left">
      <div className="right-box margin-bottom">
        <h2 className="padding-16 icon-grey">
          <i className="fa fa-suitcase fa-fw color-navy margin-right"></i>
          Work Experience
        </h2>

        <div className="infoBox">
          <h5 className="icon-grey">Webflow Developer & Web Designer</h5>
          <h6 className="icon-grey weight-400">Upwork - Freelancer</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right color-navy"></i>
            Jun 2021 - <span className="tag round ">Current</span>
          </h6>
          <p>
            Creating stunning, contemporary, responsive website clients using
            Webflow and Figma. Completing a variety of jobs based on client’s
            needs and desired outcomes.
          </p>
          <hr></hr>
        </div>

        <div className="infoBox">
          <h5 className="icon-grey">Pilot</h5>
          <h6 className="icon-grey weight-400">Porter Airlines</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right"></i>
            Aug 2018 - <span>Dec 2021</span>
          </h6>
          <p>
            705 Operation, conducting scheduled flights for Porter Airlines as a
            First Officer on the Q400
          </p>
          <hr></hr>
        </div>

        <div className="infoBox">
          <h5 className="icon-grey">Medevac Pilot</h5>
          <h6 className="icon-grey weight-400">PAL Aerospace</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right"></i>
            Jun 2016 - Aug 2018
          </h6>
          <p>
            703 Operation, conducted medevac flights as a first officer on the
            King Air 200.
          </p>
          <hr></hr>
        </div>

        <div className="infoBox">
          <h5 className="icon-grey">Flight Instructor</h5>
          <h6 className="icon-grey weight-400">Moncton Flight College</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right"></i>
            Jul 2013 - Jun 2016
          </h6>
          <p>
            Conducted over 1100 hours of flight instruction in various
            departments and managed a team of flight instructors to ensure
            student learning and outcomes were maximized within strict training
            deadlines.
          </p>
        </div>
      </div>

      <div className="right-box">
        <h2 className="padding-16 icon-grey">
          <i className="fa fa-certificate fa-fw color-navy margin-right"></i>
          Education
        </h2>

        <div className="infoBox">
          <h5 className="icon-grey">
            Complete Web Design: from Figma to Webflow to Freelancing
          </h5>
          <h6 className="icon-grey weight-400">Udemy.com</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right"></i>
            Jun 2021
          </h6>
          <p>
            Completed over 20 hours of online learning, developing fundamental
            the skills required to become a Webflow developer and designer
          </p>
          <hr></hr>
        </div>
        <div className="infoBox">
          <h5 className="icon-grey">
            The Complete 2021 Web Development Bootcamp
          </h5>
          <h6 className="icon-grey weight-400">Udemy.com</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right"></i>
            May 2021
          </h6>
          <p>
            Completed over 60 hours of online learning, developing fundamental
            the skills required to become a full stack web developer.
          </p>
          <hr></hr>
        </div>

        <div className="infoBox">
          <h5 className="icon-grey">
            Bachelor Of Science & Commerical Pilot License
          </h5>
          <h6 className="icon-grey weight-400">Mount Allison University</h6>
          <h6 className="color-navy">
            <i className="fa fa-calendar fa-fw margin-right"></i>
            May 2013
          </h6>
          <p>
            Graduated with a 3.6 GPA. Simultaneously acquired my BSc. and
            Commercial Pilot Licence. Academic focus on Aviation and
            Environmental Science.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentBoxRight;
