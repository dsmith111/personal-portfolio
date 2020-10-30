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
      <div className = "container-fluid" style={{marginBottom:100}}>
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
        "marginLeft": 110,
        "marginRight": 110,
         "paddingTop": 0,
         // height:900


           }}>
        <div className = "col-5 offset-1" style={{marginTop:135, height:600}}>
          <h1 className="display-3 section-header"> Get in Touch</h1>

          <p><span className="fa fa-twitter-square fa-3x"><a href="https://twitter.com/The_David_smith"
             style={{paddingLeft:10}}>Twitter
           </a></span></p>
          <p><span className="fa fa-facebook-square fa-3x"><a href="https://www.facebook.com/profile.php?id=100001273032145"
             style={{paddingLeft:10}}>Facebook
           </a></span></p>
          <p><span className="fa fa-linkedin-square fa-3x"><a href="https://www.linkedin.com/in/david-smith-1696a01a9/"
             style={{paddingLeft:10}}>LinkedIn
           </a></span></p>
           <p><span className="fa fa-github-square fa-3x"><a href="https://github.com/dsmith111"
              style={{paddingLeft:10}}>GitHub
            </a></span></p>
        </div>
      </div>


  );
}

function Contact(){
  return(
    <div>
      <TopBar />
      <div className = "container-fluid skill-bgblock border-dark border-top border-2"
        style={{height:835}}>
        <ContactContent />
      </div>
    </div>
  );
}

export default Contact;
