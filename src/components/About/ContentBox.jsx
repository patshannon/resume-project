import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function ContentBox() {
  return (
    <>
      <div className="col-md-12 float-left">
        <div className="right-box margin-bottom">
          <div className="infoBox">
            <h2 className="padding-16 icon-grey">
              <FontAwesomeIcon icon={faUser} className="color-navy fa-icon" />
              My Story
            </h2>
            <hr></hr>
            <p className="about-info">
              Most people know me as a pilot, while some know me as a web
              designer. Early in 2020, when the pandemic spread across the
              world, I and countless others in the aviation industry became
              furloughed. It was unclear when the pandemic would ease and when
              aviation would return to normal. A year went by, and there were
              still no signs of improvements. It was time for me to act.
              <br></br>
              <br></br>I asked myself, “what side hustle could I do while
              sitting in a hotel room on layovers?”. I discovered that there
              were a lot of jobs in the tech industry that fit the bill. Many
              jobs in the industry offer a flexible schedule which appealed to
              me. This was the direction I would head. My journey in the tech
              world began when I completed a web development course online
              through Udemy. I fell in love with the creative aspect of the
              course, especially web design. My vision became clear, I wanted to
              build websites! A few weeks later, I enrolled in another course,
              focused on web design principles and mastering the Webflow
              platform. Webflow is a powerful website builder that is remarkably
              customizable and provides an easy-to-use interface for clients who
              want to edit the content of the website. Mastering Webflow became
              my new mission.
              <br />
              <br />
              Before I started looking for clients, I built a small portfolio
              including a few concept websites designed from scratch. I also
              began working on my own personal website. Since then, I’ve been
              freelancing on Upwork and growing my client base daily. My side
              hustle is taking off (no pun intended). What’s next? While I
              continue to expand my skills as a web designer, I plan to gain
              additional skills and knowledge that will make me more valuable to
              my clients. Topics on my radar include Search Engine Optimization
              (SEO), Digital Marketing, and Copywriting. If you need a web
              designer for your next project, I’d love to chat!
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 float-left">
        <div className="right-box margin-bottom">
          <div className="infoBox margin-bottom">
            <h5 className="icon-grey">
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                className="color-navy fa-icon"
              />
              Soft-Skills
            </h5>

            <p>Analytical Thinking</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "90%" }}>
                90%
              </div>
            </div>

            <p>Critical Thinking</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "90%" }}>
                90%
              </div>
            </div>

            <p>Problem Solving</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "85%" }}>
                85%
              </div>
            </div>

            <p>Communication</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "85%" }}>
                85%
              </div>
            </div>

            <p>Teamwork</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "80%" }}>
                80%
              </div>
            </div>

            <p>Creativity</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 float-left">
        <div className="right-box margin-bottom">
          <div className="infoBox margin-bottom">
            <h5 className="icon-grey">
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                className="color-navy fa-icon"
              />
              Unique Skills
            </h5>
            <p>Piloting</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "95%" }}>
                95%
              </div>
            </div>

            <p>Teaching</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "85%" }}>
                80%
              </div>
            </div>

            <p>Management</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "80%" }}>
                80%
              </div>
            </div>

            <p>Data Analysis</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "75%" }}>
                85%
              </div>
            </div>

            <p>Photography</p>
            <div className="skills-meter-background">
              <div className="skills-meter-foreground" style={{ width: "75%" }}>
                80%
              </div>
            </div>

            <hr></hr>

            <h5 className="icon-grey">
              <FontAwesomeIcon icon={faAward} className="color-navy fa-icon" />
              Awards & Achievements
            </h5>

            <p>
              Moncton Flight College Employer’s Choice Award
              <br></br>
              Jazz Aviation Most Outstanding Student
              <br></br>
              Instrument Pilot of The Year
              <br></br>
              Robert M. Bateman Commercial Pilot of The Year
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentBox;
