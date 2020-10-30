import React from 'react';
import {Parallax} from 'react-parallax';
import {Media} from 'reactstrap';

function TopBar(){
  const list_spacing = 5;
  return(
    <Parallax
      bgImage={`${process.env.PUBLIC_URL}/assets/wires.png`}
      bgImageAlt='Error'
      strength={300}
      blur={3}>
      <div className = "container-fluid" style={{marginBottom:"10%", paddingTop:"15%"}}>
        <div className = "row">
        </div>
      </div>
    </Parallax>
  );
}


function ProjectList(){
  return(
    <div className="container-fluid skill-bgblock border-dark border-top border-2"
      style={{}}>
      <div className = "row skill-block"
        style={{
        "marginLeft": "5.8%",
        "marginRight": "5.8%",
         "paddingTop": 0,
         paddingBottom: "48%",

         height:"94%"
           }}>

        <div className="col-12"
          style={{
          paddingTop:60,
          }}>
          <h1 className='display-3 mb-3' style={{fontSize:"180%"}}>Projects</h1>
          <Media list>

            <Media tag='li' className="mb-5">
              <Media body style={{fontSize:"70%"}}>
                <Media heading style={{fontSize:"115%", fontWeight:"bold"}}>
                  Portable RFID Badge-Access Lock
                </Media>
                This project was based around the development of a device capable
                of locking/unlocking any standard door after the scan of a valid
                RFID tag. This device would require no physical installation,
                attaching to doors through magnets. This would allow for the device
                to be truly portable, allowing for its quick and easy application
                to any door.
                <p><img src={`${process.env.PUBLIC_URL}/assets/mechdevice.jpg`} width="50%"
                   alt="Test" className="border border-2 border-dark mt-2"/></p>
              </Media>
            </Media>
            <Media tag='li' className="mb-5">
              <Media body style={{fontSize:"70%"}}>
                <Media heading style={{fontSize:"115%", fontWeight:"bold"}}>
                  Device and Procedure for Testing Heat Exchangers for NASA
                </Media>
                For my undergrad capstone project, I led a team through the challenge
                of developing a procedure of testing experimental additively manufactured
                heat-exchangers for use in NASA's electrified aircraft initiative.
                In-addition, I also worked with NASA Glen Research Engineers on the
                development of a device which could enact our testing procedures.
                <p><img src={`${process.env.PUBLIC_URL}/assets/snr.jpg`} width="50%"
                   alt="Test" className="border border-2 border-dark mt-2"/></p>
              </Media>
            </Media>
            <Media tag='li' className="mb-5">
              <Media body style={{fontSize:"70%"}}>
                <Media heading style={{fontSize:"115%", fontWeight:"bold"}}>
                    Lotka-Volterra and Evolution AI-Esque Simulation
                </Media>
                Started during my undergrad, and continued in my free-time, I
                worked on a program which could provide a low-level simulation of
                Lotka-Volterra predator-prey models. The low-level factor in this
                program is attributed to an AI-esque intelligence I applied to
                the "creatures" in the simulation. The creatures used a weight
                controlled emotion algorithm which would affect the creature's
                behaviors and would modify itself with each new generation allowing for
                an attempt at simulating evolution while also adhering to Lotka-Volterra
                models.
                <p><img src={`${process.env.PUBLIC_URL}/assets/eco.png`} width="50%"
                   alt="Test" className="border border-2 border-dark mt-2"/></p>
              </Media>
            </Media>
          </Media>
        </div>
      </div>
    </div>
  );
}

function Projects(){
  return(
    <div>
      <TopBar />
      <ProjectList />
    </div>
  );
}

export default Projects;
