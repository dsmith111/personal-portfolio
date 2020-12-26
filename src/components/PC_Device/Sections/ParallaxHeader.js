import { Parallax } from "react-parallax";

export default function ParallaxHeader({ styles }) {
  return (
    <Parallax
      bgImage={`${process.env.PUBLIC_URL}/assets/wires.png`}
      bgImageAlt="Error"
      strength={300}
      blur={3}
    >
      <div style={styles.IntroContainer}>
        <div>
          <div style={styles.IntroContent}>
            <h1 style={styles.NameHeader}> David Smith </h1>
            <h4 style={styles.SubHeader}>
              Computer Engineer | Robotics Engineer | Mechanical Engineer{" "}
            </h4>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
