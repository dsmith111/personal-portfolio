import {Parallax} from 'react-parallax';

function Intro_parallax(){
  return(
    <Parallax
      bgImage="/assets/data_intro.jpg"
      bgImageAlt='Error'
      strength={200}>Test</Parallax>
  );
}

export default Intro_parallax;
