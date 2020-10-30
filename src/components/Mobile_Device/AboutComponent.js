import React from 'react';
import {Parallax} from 'react-parallax';
import Gallery from 'react-grid-gallery';

const IMAGES =
[
  {
    src:"/assets/ted.JPG",
    thumbnail:"/assets/ted.JPG",
    thumbnailWidth: "6%",
    thumbnailHeight: "1%",
    caption: "Group photo after the conclusion of the TEDx event I organized Sophomore-Junior year of college."
  },
  {
    src:"/assets/family.JPG",
    thumbnail:"/assets/family.JPG",
    thumbnailWidth: "3%",
    thumbnailHeight: "5%",
    caption: "Some of my family."
  },
  {
    src:"/assets/overlook.JPG",
    thumbnail:"/assets/overlook.JPG",
    thumbnailWidth: "2%",
    thumbnailHeight: "5%",
    caption: "Hiking around Bodega Head."
  },
  {
    src:"/assets/cedric.JPG",
    thumbnail:"/assets/cedric.JPG",
    thumbnailWidth: "6%",
    thumbnailHeight: "5%",
    caption: "Photo with Fields Medalist, Cedric Vilani."
  },

];

function Intro(){
  const list_spacing = 5;
  return(
    <Parallax
      bgImage="/assets/wires.png"
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

function Skills(){
  return(
    <div className = "row skill-block"
      style={{
      "marginLeft": "5.8%",
      "marginRight": "5.8%",
       height:"96%"

           }}>
        <div className = "col-12" style={{marginTop:"20%"}}>
          <h1 className="display-3 section-header" style={{fontSize:"160%"}}> About Me </h1>
            <div style={{fontSize:"75%"}}>
              <p>I am a master's student studying Computer Engineering and Artificial intelligence
              at the University of Michigan, Dearborn.</p>
              <p>Previously, I have worked as a material researcher for the Polymer and
              Inorganic Composites, Structures and Surfaces Lab at the University of Toledo (PICCSL),
              an Industrial Engineer at Ford, GM, and Chrysler-Toledo as well as a Software Engineer
              at Chrysler-Warren.</p>
              <p>I completed my undergraduate studies at the University of Toledo earning
              a Bachelor's of Science in Mechanical Engineering with minors in physics and mathematics.
              During my undergraduate program my research at PICCSL led to a publication and pending patent,
              I contributed to a chemical engineering textbook used by ZyBooks (a Wiley subsidary),
              and I organized and led a TEDx event, taking in speakers from NASA, Fermi Lab and more.</p>
            <p><Gallery images={IMAGES} /></p>
          </div>
        </div>

      </div>


  );
}

function About(){
  return(
    <div>
      <Intro />
      <div className = "container-fluid skill-bgblock border-dark border-top border-2"
        style={{height:1250}}>
        <Skills />
      </div>
    </div>
  );
}

export default About;
