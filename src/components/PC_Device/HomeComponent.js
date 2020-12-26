import React, { useState, useEffect } from "react";
import UseWindowDimensions from "../../utils/GetWindowDim";
import HomeBody from "./Sections/HomeBody";
import ParallaxHeader from "./Sections/ParallaxHeader";

// const { innerWidth: width } = window;

export default function Home() {
  //Style Sheet
  const { width } = UseWindowDimensions();

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
      <ParallaxHeader styles={styles} />
      <HomeBody styles={styles} />
    </div>
  );
}
