import React from "react";
import { Parallax } from "react-parallax";
import useWindowDimensions from "../../utils/GetWindowDim";
import AboutBody from "./Sections/AboutBody";
import ParallaxHeader from "./Sections/ParallaxHeader";

function Intro() {
  const list_spacing = 5;
  return (
    <Parallax
      bgImage={`${process.env.PUBLIC_URL}/assets/wires.png`}
      bgImageAlt="Error"
      strength={300}
      blur={3}
    >
      <div className="container-fluid" style={{ marginBottom: 100 }}>
        <div className="row"></div>
      </div>
    </Parallax>
  );
}

function About() {
  const { width } = useWindowDimensions();

  let styles = {
    IntroContainer: {
      // display: "flex",
      // flexDirection: "column",
    },
    IntroContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 0.3 * width,
      marginBottom: 0.3 * width,
    },
    NameHeader: {
      color: "white",
      fontSize: 0.05 * width,
    },
    SubHeader: {
      color: "white",
      fontSize: 0.02 * width,
    },
    BodyContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",
      alignItems: "center",
      paddingTop: "7em",
      paddingLeft: "2em",
      paddingRight: "2em",
      paddingBottom: "4em",
    },
    InnerBodyContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    InnerBodyText: {
      fontSize: 0.02 * width,
    },
    InnerBodyProfileImage: {
      width: 0.34 * width,
      height: 0.3 * width,
    },
    InnerBodyProfileContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
  };
  return (
    <div>
      <ParallaxHeader style={styles} />
      <div>
        <AboutBody styles={styles} width={width} />
      </div>
    </div>
  );
}

export default About;
