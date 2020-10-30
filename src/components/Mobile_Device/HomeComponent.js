import React from 'react';
import {Parallax} from 'react-parallax';

function Intro(){

  const list_spacing = 5;
  return(
    <Parallax
      bgImage="/assets/wires.png"
      bgImageAlt='Error'
      strength={300}
      blur={3}>
      <div className = "container-fluid" style={{marginBottom:"21%", paddingTop:"15%"}}>
        <div className = "row">
          <div className = "col-12 intro-block" style={{paddingLeft:0}}>
            <h1 className={`mb-4 name-header`} style={{fontSize:"190%", paddingLeft:"31%"}}> David Smith </h1>
            <h4 className={`name-subtitle`} style={{fontSize:"80%", paddingLeft:"20%"}}><p style={{paddingLeft:"21%"}}>Computer Engineer </p> Robotics Engineer | Mechanical Engineer </h4>

          </div>
        </div>
      </div>
    </Parallax>
  );
}

function Skills(){
  return(
      <div className = "row skill-block"
        style={{
        "marginLeft": "5.8%",
        "marginRight": "5.8%",
         paddingBottom: "20%",
         height:"94%"

           }}>
        <div className = "col-12" style={{marginTop:"8%"}}>
          <img src="/assets/david.JPG" alt="Head Shot" width="55%" className="border border-dark"/>
          <h1 className="display-3 section-header mt-4" style={{fontSize:"160%"}}> Skills/Proficiencies </h1>
            <div style={{ fontSize:"75%"}}>
            <p>Owing to multi-disciplinary projects, I have skills in a variety of areas:</p>
            <ul>
              <li>Mechanical Engineering
                <ul>
                  <li>SolidWorks</li>
                  <li>AutoCAD</li>
                  <li>MATLAB</li>
                </ul>
              </li>
              <li>Robotics
                <ul>
                  <li>Working with micro-controllers</li>
                  <li>C++</li>
                  <li>Q-Learning AI Training</li>
                </ul>
              </li>
              <li>Software Development
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>MySQL</li>
                  <li>Amazon Web Services</li>
                </ul>
              </li>
              <li>Game Development
                <ul>
                  <li>Unity</li>
                  <li>Programming game logic in C#</li>
                  <li>User interaction</li>
                  <li>AI Behavior</li>
                  <li>Blender Modeling</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>


  );
}

function Home(){

  return(
    <div>
      <Intro />
      <div className = "container-fluid skill-bgblock border-dark border-top border-2"
        style={{}}>
        <Skills />
      </div>
    </div>
  );
}

export default Home;
