import React from "react";

const email = "peshannon104@gmail.com";

function ContentBoxLeft() {
  return (
    <div className="col-md-4 float-left">
      <div className="contentBox">
        <div className="picture-box">
          <img className="headshot" src="/img/headshot2.jpg"></img>
          <div className="name-box">
            <h2 className="name-font">Patrick Shannon</h2>
          </div>
        </div>

        <div className="infoBox padding-bottom margin-bottom">
          <hr></hr>
          <p>
            <i className="fa fa-briefcase fa-fw color-navy"></i>
            Webflow Developer | Web Developer
          </p>

          <p>
            <i className="fa fa-home fa-fw color-navy"></i>
            Halifax, N.S
          </p>

          <p>
            <i className="fa fa-envelope fa-fw color-navy"></i>
            <a
              className="icon-grey"
              href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
              target="_blank"
            >
              peshannon104@gmail.com
            </a>
          </p>

          <p>
            <i className="fa fa-phone fa-fw color-navy"></i>
            1-506-252-1088
          </p>

          <hr></hr>

          <h5 className="icon-grey">
            <i className="fa fa-asterisk fa-fw color-navy"></i>
            Skills
          </h5>
          <p>Webflow</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "85%" }}>
              85%
            </div>
          </div>
          <p>HTML</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "80%" }}>
              80%
            </div>
          </div>

          <p>CSS</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "80%" }}>
              80%
            </div>
          </div>
          <p>Javascript</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "70%" }}>
              70%
            </div>
          </div>

          <p>React</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "60%" }}>
              60%
            </div>
          </div>

          <p>Node</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "55%" }}>
              55%
            </div>
          </div>

          <p>MongoDB</p>
          <div className="skills-meter-background">
            <div className="skills-meter-foreground" style={{ width: "50%" }}>
              50%
            </div>
          </div>

          <br></br>
          <h5 className="icon-grey">
            <i className="fa fa-globe fa-fw color-navy"></i>
            Languages
          </h5>

          <p>English</p>
          <div className="skills-meter-background">
            <div
              className="skills-meter-foreground"
              style={{ width: "100%", height: "24px" }}
            ></div>
          </div>

          <p>French</p>
          <div className="skills-meter-background">
            <div
              className="skills-meter-foreground"
              style={{ width: "50%", height: "24px" }}
            ></div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default ContentBoxLeft;
