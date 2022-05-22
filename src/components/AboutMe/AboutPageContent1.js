import { Box, Grid } from "@material-ui/core";
import { SRLWrapper } from "simple-react-lightbox";
import GetWindowDimensions from "../../utils/GetWindowDimensions";

export default function PageContent() {
  const { width, height } = GetWindowDimensions();
  return (
    <Box
      height="100%"
      bgcolor="#1b32b6"
      style={{
        borderBottomLeftRadius: "1em",
        borderBottomRightRadius: "1em",
      }}
    >
      <p
        className="skill-intro"
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
        <div className="about-me-desc">
          <p>
            Currently, I have a master's degree in Computer Engineering with a concentration in intelligent systems and 
            am a Software Engineer at Microsoft in Azure organization.
          </p>
          <p>
            Previously, I have worked as:
          </p>
          <ul>
              <li>
                An AI/ML Developer intern and Software Engineer intern at the NASA Glenn Research Center
              </li>
              <li>
                An AI/ML Developer intern at Wind River heading research on a DARPA SBIR project.
              </li>
              <li>
                Full-stack Engineer for WynHouse Software after interning for 5 months.
              </li>
              <li>
                Material researcher for the Polymer and Inorganic Composites, Structures and Surfaces Lab at the
                University of Toledo (PICCSL)
              </li>
              <li>
                As an Engineer intern for ROI consulting in industrial engineering at Ford, GM, and Chrysler.
              </li>
          </ul>
          <p>
            I have a Bachelor's of Science in Mechanical Engineering with minors
            in physics and mathematics from the University of Toledo. I have two
            publications and one pending patent in the field of graphene-based
            transient electronics. I am certified in AWS as a Cloud Practitioner
            and a Cloud Solutions Architect. I am a contributor to a chemical
            engineering textbook used by ZyBooks (a Wiley subsidary). I also
            have organized and led a TEDx event, taking in speakers from NASA,
            Fermi Lab and more.
          </p>
          <p>
            I have a continuously growing love for the field of Artificial Intelligence,
            mainly in computer vision and reinforcement learning. I am fond of
            the idea of neuromorphic AI systems. Biological Artificial Intelligence topics such as spiking neural networks
            have begun to see a myriad of publications and strides in the past two years; the field is rapidly growing and
            with plenty of quesitons yet to be answered, and I wish to be a part of it.
          </p>
        </div>
        <div
          className="about-picture-wrapper"
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
              className="about-picture"
              src={`${process.env.PUBLIC_URL}/assets/me.jpeg`}
            />
          </SRLWrapper>
        </div>
      </Grid>
    </Box>
  );
}
