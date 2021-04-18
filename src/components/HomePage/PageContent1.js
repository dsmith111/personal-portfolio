import {
  Grid,
  Box,
  Container,
  Divider,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export default function PageContent() {
  return (
    <Paper elevation={3}>
      <Box
        height="100%"
        bgcolor="#54daff"
        style={
          {
            // paddingLeft: "3em",
            // paddingRight: "3em",
            // paddingTop: "1.3em",
          }
        }
      >
        <Grid container direction="column">
          <p class="skill-intro">Skill Summary</p>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p class="list-header">Software Engineering</p>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              <p class="list-sub-header">Languages</p>
              <ul class="list-item">
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++</li>
                <li>C#</li>
              </ul>

              <p class="list-sub-header">Frameworks</p>
              <ul class="list-item">
                <li>React</li>
              </ul>

              <p class="list-sub-header">Cloud Services & Databases</p>
              <ul class="list-item">
                <li>AWS</li>
                <li>Firebase</li>
                <li>MongoDB</li>
                <li>DynamDB</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p class="list-header">Artificial Intelligence</p>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              <ul>
                <p class="list-sub-header">Object Recognition</p>
                <ul class="list-item">
                  <li>Convolutional Neural Networks</li>
                  <li>Region Proposal Networks</li>
                </ul>
                <p class="list-sub-header">Reinforcement Learning</p>
                <ul class="list-item">
                  <li>Q-Learning</li>
                  <li>Deep Q-Learning</li>
                </ul>
                <p class="list-sub-header">Libraries & Frameworks</p>
                <ul class="list-item">
                  <li>Tensorflow, Keras</li>
                  <li>OpenCV</li>
                  <li>Numpy, Pandas, Matplotlib, etc...</li>
                </ul>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p class="list-header">Mechanical Engineering</p>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              <ul class="list-item">
                <li>SolidWorks</li>
                <li>AutoCAD</li>
                <li>MATLAB</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p class="list-header">Game Development</p>
            </AccordionSummary>
            <AccordionDetails style={{ flexDirection: "column" }}>
              <ul class="list-item">
                <li>Unity</li>
                <li>User interaction</li>
                <li>AI Behavior</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Divider light style={{ width: "100%", alignSelf: "center" }} />
          {/* <p>Test</p> */}
        </Grid>
      </Box>
    </Paper>
  );
}
