import React from "react";

const email = process.env.REACT_APP_EMAIL

function ContentBoxLeft(){
    return (
        <div className="col-md-4 float-left" >
            <div className="contentBox">
            <div className="picture-box">
            <img className="headshot" src="/img/headshot.png"></img>
            <div className="name-box">
                <h2>{process.env.REACT_APP_FULL_NAME}</h2>
            </div>
            </div>
            <div className="infoBox padding-bottom margin-bottom">
                <hr></hr>
                <p>
                <i className="fa fa-briefcase fa-fw color-navy"></i>
                    Pilot & Web Developer
                </p>

                <p>
                <i className="fa fa-home fa-fw color-navy"></i>
                Halifax, N.S
                </p>

                <p><i className="fa fa-envelope fa-fw color-navy"></i>
                <a className="icon-grey" href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`} target="_blank">{process.env.REACT_APP_EMAIL}</a>
                </p>
                    

                <p>
                <i className="fa fa-phone fa-fw color-navy"></i>
                {process.env.REACT_APP_PHONE}
                </p>

                <hr></hr>

                <p className="p-large">
                <b>
                    <i className="fa fa-asterisk fa-fw color-navy"></i>
                    Skills
                </b>
                </p>
                <p>HTML</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"80%"}}>
                        80%
                    </div>
                </div>
                <p>CSS</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"80%"}}>
                        80%
                    </div>
                </div>
                <p>React</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"70%"}}>
                        70%
                    </div>
                </div>
                <p>Express</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"60%"}}>
                        60%
                    </div>
                </div>
                <p>Node</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"55%"}}>
                        55%
                    </div>
                </div>
                <p>MongoDB</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground" style={{width:"50%"}}>
                        50%
                    </div>
                </div>

                <br></br>
                <p className="p-large">
                    <b>
                    <i className="fa fa-globe fa-fw color-navy"></i>
                    Languages
                    </b>
                </p>
                <p>English</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground"style={{width:"100%",height:"24px"}}>
                    </div>
                </div>
                <p>French</p>
                <div className="skills-meter-background">
                    <div className="skills-meter-foreground"style={{width:"50%",height:"24px"}}>
                    </div>
                </div>
                <br></br>



            </div>
            </div>
        </div>



    )

}
export default ContentBoxLeft;