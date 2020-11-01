import React from 'react';
import {Parallax} from 'react-parallax';
import {Link} from 'react-router-dom';

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
function ContactContent(){
  return(
      <div className = "row skill-block"
        style={{
        "marginLeft": "5.8%",
        "marginRight": "5.8%",

         height:"95%"

             }}>
        <div className = "col-12 mb-2" style={{marginTop:"20%"}}>
          <h1 className="display-3 section-header mb-4" style={{fontSize:"240%", fontWeight: "Bold"}}> Get in Touch</h1>

          <p><span className="fa fa-twitter-square fa-2x mb-5"><Link to="https://twitter.com/The_David_smith"
             style={{paddingLeft:10}}>Twitter
           </Link></span></p>
         <p><span className="fa fa-facebook-square fa-2x mb-5"><Link to="https://www.facebook.com/profile.php?id=100001273032145"
             style={{paddingLeft:10}}>Facebook
           </Link></span></p>
         <p><span className="fa fa-linkedin-square fa-2x mb-5"><Link to="https://www.linkedin.com/in/david-smith-1696a01a9/"
             style={{paddingLeft:10}}>LinkedIn
           </Link></span></p>
         <p><span className="fa fa-github-square fa-2x"><Link to="https://github.com/dsmith111"
              style={{paddingLeft:10}}>GitHub
            </Link></span></p>
        </div>
      </div>


  );
}

function Contact(){
  return(
    <div>
      <TopBar />
      <div className = "container-fluid border-dark border-top border-2"
        style={{backgroundColor: "rgb(85,85,85)", height:1024}}>
        <ContactContent />
      </div>
    </div>
  );
}

export default Contact;
