import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export default function PageContent() {
  return (
    <Box
      height="100%"
      bgcolor="#1b32b6"
      style={{
        borderBottomLeftRadius: "1em",
        borderBottomRightRadius: "1em",
      }}
    >
      <Grid container direction="column" style={{ alignItems: "center" }}>
        <p className="skill-intro">Skill Summary</p>
        <Accordion style={styles.accordionMain} square={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <p className="list-header">Software Engineering</p>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: "column" }}>
            <p className="list-sub-header">Languages</p>
            <ul className="list-item">
              <li>
                JavaScript
                <p className="list-item-desc">
                  Working in the React and React Native Frameworks, I have
                  written thousands of lines of code, I have overcome a myriad
                  of challenges, and I have developed multiple websites and
                  mobile applications.
                </p>
              </li>
              <li>
                Python
                <p className="list-item-desc">
                  While pursuing my concentration in AI, I primarily use Python
                  to develop models. I also have written data collection and
                  processing scripts, some webscrapers and a handful of lambda
                  functions in Python. I am constantly looking at ways to
                  improve my technical expertise of Python. This way I can
                  ensure my code is always optimized and running as fast as it
                  is capable of.
                </p>
              </li>
              <li>
                C++
                <p className="list-item-desc">
                  I love building mechatronic devices in my spare-time. I
                  program the embedded systems for these devices in C++.
                </p>
              </li>
              <li>
                C#
                <p className="list-item-desc">
                  Having developed a handful of games, my favorite engine is
                  Unity. I have written thousands of lines in C# while working
                  on them. Each game required complex algorithms to achieve
                  results unique to that game, or to increase the game's speed.
                </p>
              </li>
            </ul>

            <p className="list-sub-header">Frameworks</p>
            <ul className="list-item">
              <li>
                React
                <p className="list-item-desc">
                  As mentioned above, I primarily develop applications in React.
                </p>
              </li>
            </ul>

            <p className="list-sub-header">Cloud Services & Databases</p>
            <ul className="list-item">
              <li>
                AWS
                <p className="list-item-desc">
                  I use AWS to handle the back-end of most of the applications I
                  work on. I am certified as a Cloud Practitioner and as a Cloud
                  Solutions Architect.
                </p>
              </li>
              <li>
                Firebase
                <p className="list-item-desc">
                  I have worked with Firebase features to create robust in-app
                  messaging services for mobile applications.
                </p>
              </li>
              <li>
                MongoDB
                <p className="list-item-desc">
                  I usually end up using MongoDB as the primary database for
                  most of the applications I work on.
                </p>
              </li>
              <li>
                DynamoDB
                <p className="list-item-desc">
                  I created an API using Nodes.js, a variety of AWS services and
                  DynamoDB as its database.
                </p>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion style={styles.accordionMain} square={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <p className="list-header">Artificial Intelligence</p>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: "column" }}>
            <p className="list-sub-header">Object Recognition</p>
            <ul className="list-item">
              <li>
                Convolutional Neural Networks
                <p className="list-item-desc">
                  From basic CNNs to the state of the art Mask R-CNN, I have
                  built and implemented a wide variety of CNN based recognition
                  systems.
                </p>
              </li>
              <li>
                Region Proposal Networks
                <p className="list-item-desc">
                  While working on a vehicle ready CNN based object recognition
                  system, I experimented with different region proposal methods
                  but ended up utilizing the selective search algorithm to
                  create a region proposal network for an R-CNN model.
                </p>
              </li>
            </ul>
            <p className="list-sub-header">Reinforcement Learning</p>
            <ul className="list-item">
              <li>
                Q-Learning
                <p className="list-item-desc">
                  I have done plenty of research into Q-Learning as
                  reinforcement learning was the first AI field that caught my
                  eye. I have implemented a basic maze-solving agent in MATLAB.
                </p>
              </li>
              <li>
                Deep Q-Learning
                <p className="list-item-desc">
                  Once I had succesfully implemented a simple Q-Learning model,
                  I conducted research into much more advanced techniques.
                  Coming across DeepMind's architecture, I created and
                  implemented a model capable of solving multiple puzzles in
                  OpenAI's Gym environment.
                </p>
              </li>
            </ul>
            <p className="list-sub-header">Libraries & Frameworks</p>
            <ul className="list-item">
              <li>Tensorflow, Keras</li>
              <li>OpenCV</li>
              <li>Numpy, Pandas, Matplotlib, etc...</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion style={styles.accordionMain} square={true}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <p className="list-header">Mechanical Engineering</p>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: "column" }}>
            <ul className="list-item">
              <li>
                SolidWorks
                <p className="list-item-desc">
                  Through my undergraduate pursuit of mechanical engineering, I
                  have used Solidworks on many occasions within my projects. I
                  continue to use Solidworks to create custom parts for any
                  side-projects I am working on.
                </p>
              </li>
              <li>AutoCAD</li>
              <li>
                MATLAB
                <p className="list-item-desc">
                  MATLAB was the first programming language that I was taught in
                  a proper class room environment. For years in my
                  undergraduate, this was my go-to language.
                </p>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square={false}
          style={{
            width: "100%",
            borderRadius: "1em",
            borderTopRightRadius: "0%",
            borderTopLeftRadius: "0%",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <p className="list-header">Game Development</p>
          </AccordionSummary>
          <AccordionDetails style={{ flexDirection: "column" }}>
            <ul className="list-item">
              <li>
                Unity
                <p className="list-item-desc">
                  I have created 5 games in Unity since I began using it in
                  2020.
                </p>
              </li>
              <li>
                User interaction
                <p className="list-item-desc">
                  I led a team of software engineers in the GitHub Game off 2020
                  competition. During which we published our game, and learned
                  vital UI development skills from direct user feedback.
                </p>
              </li>
              <li>AI Behavior</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Divider light style={{ width: "100%", alignSelf: "center" }} />
      </Grid>
    </Box>
  );
}

const styles = {
  accordionMain: {
    width: "100%",
  },
};
