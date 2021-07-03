import { Box, Grid } from "@material-ui/core";
import { SRLWrapper } from "simple-react-lightbox";
import GetWindowDimensions from "../../utils/GetWindowDimensions";

export default function PageContent() {
  const { width, height } = GetWindowDimensions();
  return (
    <Box
      height="100%"
      bgcolor="#21d1b9"
      style={{
        borderBottomLeftRadius: "1em",
        borderBottomRightRadius: "1em",
      }}
    >
      <p
        class="skill-intro"
        style={{ display: "flex", justifyContent: "center" }}
      >
        My Background
      </p>
      <Grid
        container
        direction={width > 768 ? "row" : "column"}
        style={{
          justifyContent: "space-between",
          backgroundColor: "white",
          borderBottomLeftRadius: "1em",
          borderBottomRightRadius: "1em",
        }}
      >
        <div class="about-me-desc">
          <p>
            I am a master's student studying Computer Engineering and Artificial
            Intelligence at the University of Michigan - Dearborn.
          </p>
          <p>
            Currently I work as a Software Engineer Intern for the NASA Glenn
            Research Center. Previously, I have worked as a full stack engineer
            for WynHouse Software, a material researcher for the Polymer and
            Inorganic Composites, Structures and Surfaces Lab at the University
            of Toledo (PICCSL), and as an Industrial Engineer at Ford, GM, and
            Chrysler.
          </p>
          <p>
            I have my Bachelor's of Science in Mechanical Engineering with
            minors in physics and mathematics from the University of Toledo. I
            have two publications and one pending patent in the field of
            graphene-based transient electronics. I am certified in AWS as a
            Cloud Practitioner and a Cloud Solutions Architect. I am a
            contributor to a chemical engineering textbook used by ZyBooks (a
            Wiley subsidary). I also have organized and led a TEDx event, taking
            in speakers from NASA, Fermi Lab and more.
          </p>
          <p>
            I have a growing love for the field of Artificial Intelligence,
            mainly in computer vision and reinforcement learning. I am fond of
            the idea of embedded AI systems. Ranging from telling you what the
            weather is, to controlling a robot, or optimizing flight
            trajectories on a rocket, there are still great strides yet to be
            made in this area and I wish to be a part of them.
          </p>
        </div>
        <div
          class="about-picture-wrapper"
          style={
            width < 768
              ? {
                  display: "flex",
                  marginBottom: "3em",
                  width: "13em",
                  paddingLeft: 0,
                  marginLeft: 0,
                  alignContent: "center",
                  justifyContent: "center",
                }
              : {
                  width: "30%",
                  padding: "2em",
                }
          }
        >
          <SRLWrapper>
            <img
              class="about-picture"
              src={`${process.env.PUBLIC_URL}/assets/me.jpeg`}
            />
          </SRLWrapper>
        </div>
      </Grid>
    </Box>
  );
}
