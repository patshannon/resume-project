import React from "react"       
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function ContentBox(){
    return(
      <>
    <div className="col-md-12 float-left">
        <div className="right-box margin-bottom">
            <div className="infoBox">
            <h2 className="padding-16 icon-grey">
            <FontAwesomeIcon icon={faUser} className="color-navy fa-icon" />
            My Story</h2>
            <hr></hr>
            <p className="about-info">
                My career path so far has provided me with a vast array of unique skills and tools that allows me to be marketable in various industries.
                Becoming a commercial pilot wasn't easy,  many hours of disciplined training and ongoing examination has led me to where I am today.  
                At the same time I was training to become a pilot I was also completing my Bachelor of Science where I specialized in Environmental Science.   
              <br></br>
              <br></br>
                After completing my BSc. and my pilot training I became a flight instructor where I mainly focused on teaching students from China how to fly.  
                During my time as an instructor I learned to love teaching and was one of the many great parts of the job.  
                I found out that I was a natural teacher and had a higher level of patience then most and I would get assigned to work with the students who were struggling to progress in their training. 
                Eventually I ended up in a management role where I was tasked with the responsibility of managing a team of flight instructors.  
                I offered my training and teaching expertise to them and made sure everything was being done to promote a successful training experience for the student.  
                I also developed my data analysis skills by analyzing data to figure out what areas of training needed improvements.
              <br></br>
              <br></br>
                From instructing I then progressed into more traditional pilot jobs.  I have flown medivac missions (air ambulance) all over the Maritime's in varies weather conditions.  
                At my current job I have flown all over Eastern Canada and into the United States for an airline operator.  Both these jobs have allowed me to enhance the skills needed to be a great team member.   
                My communication, CRM(crew resource management), customer service as well as my technical pilot skills have been expanded as these skills are utilized on every flight.
              <br></br>
              <br></br>
                Following my passion for technology and design I recently completed an online course in Web Development.  
                Focusing on HTML / CSS / Bootsrap / Javascript / REACT / NODE.js as well as database control I have gained the required skills to start my journey towards being a professional Full Stack Web Developer.
              <br></br>
              <br></br>
                In my spare time I enjoy golfing, playing guitar, building computers, photography, exercising and learning new things.
              <br></br>
              <br></br>               
              </p>
            </div>
        </div>
        </div>





        <div className = "col-md-6 float-left">
        <div className="right-box margin-bottom">
            <div className="infoBox margin-bottom">
            <p className="p-large">
                <b>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className="color-navy fa-icon" />
                     Soft-Skills
                </b>
                </p>
                <p>Analytical Thinking</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"90%"}}>
                        90%
                    </div>
                </div>
                <p>Critical Thinking</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"90%"}}>
                        90%
                    </div>
                </div>
                <p>Problem Solving</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"85%"}}>
                        85%
                    </div>
                </div>
                <p>Communication</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"85%"}}>
                        85%
                    </div>
                </div>
                <p>Teamwork</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"80%"}}>
                        80%
                    </div>
                </div>
                <p>Creativity</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"70%"}}>
                        70%
                    </div>
                </div>
            </div>
        </div>
        </div>


        <div className = "col-md-6 float-left">
        <div className="right-box margin-bottom">
        <div className="infoBox margin-bottom">
            <p className="p-large">
                <b>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} className="color-navy fa-icon" />
                     Unique Skills
                </b>
                </p>
                <p>Piloting</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"95%"}}>
                        95%
                    </div>
                </div>
                <p>Teaching</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"85%"}}>
                        80%
                    </div>
                </div>
                <p>Management</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"80%"}}>
                        80%
                    </div>
                </div>
                <p>Data Analysis</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"75%"}}>
                        85%
                    </div>
                </div>
                <p>Photography</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"75%"}}>
                        80%
                    </div>
                </div>

                <hr></hr>
                <p className="p-large">
                <b>
                    <FontAwesomeIcon icon={faAward} className="color-navy fa-icon" />
                     Awards & Achievements
                </b>
                </p>
                <p>Moncton Flight College Employer’s Choice Award<br></br>
                  Jazz Aviation Most Outstanding Student<br></br>
                    Instrument Pilot of The Year<br></br>
                    Robert M. Bateman Commercial Pilot of The Year
                </p>
            </div>
            
        </div>
        </div>
       </>
        
    )
}

export default ContentBox;