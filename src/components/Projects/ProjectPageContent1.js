import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import GetWindowDimensions from "../../utils/GetWindowDimensions";

export default function PageContent() {
  const { width, height } = GetWindowDimensions();
  const styles =
    width >= 630
      ? {
          cardWrap: {
            display: "flex",
            flex: "content",
            flexDirection: "column",
            height: "20%",
            width: "31%",
            margin: "0.5em",
            marginBottom: "1.4em",
            borderRadius: "0.5em",
            backgroundColor: "#d7fafa",
          },
          cardMedia: { width: "100%", height: width * 0.25 },
          cardDesc: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          },
        }
      : {
          cardWrap: {
            display: "flex",
            flex: "content",
            flexDirection: "column",
            width: "90%",
            margin: "0.5em",
            marginBottom: "1.4em",
            borderRadius: "0.5em",
            backgroundColor: "#d7fafa",
          },
          cardMedia: { width: "100%", height: "15em" },
          cardDesc: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          },
        };
  const [isExpanded, setIsExpanded] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const onExpandClick = (value) => {
    let tempExp = { ...isExpanded };
    tempExp[value] = !tempExp[value];
    setIsExpanded(tempExp);
  };

  return (
    <Box
      minHeight="100%"
      bgcolor="#21d1b9"
      style={{
        borderBottomLeftRadius: "1em",
        borderBottomRightRadius: "1em",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <p
        class="skill-intro"
        style={{ display: "flex", justifyContent: "center" }}
      >
        My Projects
      </p>
      <Grid
        container
        direction="row"
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "flex-end",
          backgroundColor: "white",
          flexWrap: "wrap",
          borderBottomLeftRadius: "1em",
          borderBottomRightRadius: "1em",
        }}
      >
        {/*Row 1*/}
        <Card style={styles.cardWrap} elevation={4}>
          <CardMedia
            style={styles.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/snr.jpg`}
            title="Screenshot of model in Solidworks"
          />
          <CardContent style={styles.cardDesc}>
            <p class="card-title">Experimental Heat Exchanger Testing Device</p>
            <p class="card-sub-desc">
              I developed a testing device and procedure with the NASA Glenn
              Research Center in support of their electrified aircraft
              initiative.
            </p>
          </CardContent>
          <CardActions>
            <IconButton
              style={
                isExpanded[0]
                  ? {
                      transform: "rotate(180deg)",
                      transition: "ease, transform 0.3s",
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "ease, transform 0.3s",
                    }
              }
              onClick={() => onExpandClick(0)}
              aria-expanded={isExpanded[0]}
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={isExpanded[0]}>
            <CardContent>
              <div class="card-body-desc">
                <p>
                  I led a team of undergraduates and oversaw the development of
                  a a mostly 3D printed device, capable of quickly analyzing
                  additively manufactured heat exchangers from the NASA Glenn
                  Research Center.
                </p>
                <p>
                  The device consisted of four sets of flow-meters, pressure
                  sensors, and temperature sensors. These sensors were encased
                  within a separate housing to minimize heat losses to the
                  environment. These sensors measured their respective
                  parameters at the inlets and outlets of the heat exchanger's
                  hot and cold receptacles.
                </p>
                <p>
                  The heat exchanger housing was able to lock itself in
                  different orientations to allow multiple tests of the heat
                  exchanger be performed.
                </p>
                <p>
                  We created the models, I discussed points of optimization with
                  subject matter experts and we presented the project to the
                  public. Afterwards, we completed this project by sending the
                  documentation, and models to the NASA Glenn Research Center.
                </p>
              </div>
            </CardContent>
          </Collapse>
        </Card>
        <Card style={styles.cardWrap} elevation={4}>
          <CardMedia
            style={styles.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/eco.png`}
            title="Screenshot from Simulation in MATLAB"
          />
          <CardContent style={styles.cardDesc}>
            <p class="card-title">Eco/Evolution Simulator</p>
            <p class="card-sub-desc">
              I created a program in MATLAB which gave a low-level simulation of
              an eco-system with creatures whom are capable of learning and
              interacting with their environment.
            </p>
          </CardContent>
          <CardActions>
            <IconButton
              style={
                isExpanded[1]
                  ? {
                      transform: "rotate(180deg)",
                      transition: "ease, transform 0.3s",
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "ease, transform 0.3s",
                    }
              }
              onClick={() => onExpandClick(1)}
              aria-expanded={isExpanded[1]}
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={isExpanded[1]}>
            <CardContent>
              <div class="card-body-desc">
                <p>
                  In MATLAB I created a virtual environment to simulate an
                  evolving eco-system. The creatures in the environment have a
                  variety of parameters which ultimately dicated their actions.
                  The simulation was tracking their hunger, health, age, and
                  emotion levels (fear, happiness, anger).
                </p>
                <p>
                  All of these parameters had weights attached to them. These
                  weights would ultimately determine a creature's action. If a
                  creature reached maturity, and was able to reproduce, these
                  weights would be slightly mutated and passed to their
                  off-spring.
                </p>
                <p>
                  The simulation was able to recreate the population figures
                  shown in Lotka-Volterra's predator-prey model.
                </p>
              </div>
            </CardContent>
          </Collapse>
        </Card>
        <Card style={styles.cardWrap} elevation={4}>
          <CardMedia
            style={styles.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/robotcar.png`}
            title="Predictions generated by our Mask R-CNN"
          />
          <CardContent style={styles.cardDesc}>
            <p class="card-title">Vehicle Object Detection & Recognition</p>
            <p class="card-sub-desc">
              I created and implemented a convolutional network based perception
              system for vehicles.
            </p>
          </CardContent>
          <CardActions>
            <IconButton
              style={
                isExpanded[2]
                  ? {
                      transform: "rotate(180deg)",
                      transition: "ease, transform 0.3s",
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "ease, transform 0.3s",
                    }
              }
              onClick={() => onExpandClick(2)}
              aria-expanded={isExpanded[2]}
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={isExpanded[2]}>
            <CardContent>
              <div class="card-body-desc">
                <p>
                  With a partner, I researched different state of the art
                  methods for vehicle object recognition systems. After some
                  discussion, we decided to see if we can create an implement an
                  region proposal convoultional neural network (R-CNN) in our
                  own vehicle with Tensorflow and Keras.
                </p>
                <p>
                  We created our region proposal network (RPN) with Uijilling's
                  selective search algorithm. Acessing this within OpenCV, we
                  were able to return the regions necessary to perform object
                  localization. We optimized this network for speed by placing
                  an image pre-processing algorithm before-hand. We simply
                  reduced the resolution and normalized the image before it
                  reached the selective search algorithm.
                </p>
                <p>
                  After we created our RPN we then created and trained a
                  convolutional neural network (CNN). Our CNN was trained on an
                  almagalm of datasets we could find containing the images and
                  labels of pedestrians, traffic signs/lights, and vehicles.
                  With 32 layers, pooling, drop-out and normalization, we were
                  able to achieve an accuracy of 83%.
                </p>
                <p>
                  Once we combined this, we were able to localize and classify
                  objects within an image. However the model's fastest inference
                  time was 17 seconds, so we looked at more advanced R-CNN
                  architectures.
                </p>
                <p>
                  After upgrading our model to Mask R-CNN, and optimizing it
                  further, our inference time was down to 340 miliseconds. With
                  no local hardware strong enough to run the model, we setup a
                  Javascript applet in Google Colab which allowed us to
                  interface the environment with the rear camera of an iPad.
                </p>
                <p>
                  The wireless feature increased the model inference time to a
                  range between 1.2 and 1.9 seconds. This was poor for
                  high-speed driving, but worked at a relatively high-accuracy
                  of 82.68% at speeds around 5 miles per hour.
                </p>
              </div>
            </CardContent>
          </Collapse>
        </Card>
        {/*Row 2*/}
        <Card style={styles.cardWrap} elevation={4}>
          <CardMedia
            style={styles.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/mountaincar.png`}
            title="Screenshot from OpenAi's Gym MountainCar environment"
          />
          <CardContent style={styles.cardDesc}>
            <p class="card-title">Deep Q-Learning Agent</p>
            <p class="card-sub-desc">
              I used reinforcement learning to teach a model how to solve
              different puzzles from OpenAI's Gym virtual environments based on
              DeepMind's Deep Q-Learning architecture.
            </p>
          </CardContent>
          <CardActions>
            <IconButton
              style={
                isExpanded[3]
                  ? {
                      transform: "rotate(180deg)",
                      transition: "ease, transform 0.3s",
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "ease, transform 0.3s",
                    }
              }
              onClick={() => onExpandClick(3)}
              aria-expanded={isExpanded[3]}
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={isExpanded[3]}>
            <CardContent>
              <div class="card-body-desc">
                <p>
                  Using Keras and Tensorflow, I created an angent which was
                  capable of solving a variety of challenges when placed in
                  different environments. The environments consisted of:
                  <ul>
                    <li>Mountain Car</li>
                    <li>Lunar Lander</li>
                    <li>Breakout</li>
                  </ul>
                </p>
                <p>
                  The agent used a form of q-learning where the q-table was
                  replaced with a neural network. The model utilized batch
                  learning and experience replay. Experience replay is where we
                  allow a model to interact with its environment for a certain
                  period of time, then we train the model on some states pulled
                  from that period.
                </p>
                <p>
                  Two models were created, one used a regular dense neural
                  network while the other used a convolutional neural network.
                  The dense neural network was quicker to train, but the
                  convolutional neural network could be more generalized.
                </p>
                <p>
                  Our agent which used the dense neural network model was able
                  to solve the problems of MountainCar and Lunar Lander after
                  1000 episodes of training.
                </p>
                <p>
                  The agent which use the convolutional neural network was able
                  to successfully play a game of Breakout after 8 hours, or
                  1,700 episodes of training.
                </p>
              </div>
            </CardContent>
          </Collapse>
        </Card>
        <Card style={styles.cardWrap} elevation={4}>
          <CardMedia
            style={styles.cardMedia}
            image={`${process.env.PUBLIC_URL}/assets/mechdevice.jpg`}
            title="Picture of 3D printed device with some visible components"
          />
          <CardContent style={styles.cardDesc}>
            <p class="card-title">Portable RFID Badge Access Lock</p>
            <p class="card-sub-desc">
              I modeled, wired, programmed and assembled a portable RFID badge
              access scanner and locking device. The device would read an RFID
              tag and unlock a door it was magnetically attached to.
            </p>
          </CardContent>
          <CardActions>
            <IconButton
              style={
                isExpanded[4]
                  ? {
                      transform: "rotate(180deg)",
                      transition: "ease, transform 0.3s",
                    }
                  : {
                      transform: "rotate(0deg)",
                      transition: "ease, transform 0.3s",
                    }
              }
              onClick={() => onExpandClick(4)}
              aria-expanded={isExpanded[4]}
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={isExpanded[4]}>
            <CardContent>
              <div class="card-body-desc">
                <p>
                  The simple components of the device consisted of springs,
                  magnets, wires, and batteries.
                </p>
                <p>
                  The more advanced components consisted of the Arduino Nano, a
                  servo-motor, and a RC522 RFID reader module.
                </p>
                <p>
                  The casings and ring lock were modeled in Solidworks and 3D
                  printed. The ring lock had holes size of the small magnets,
                  which allowed them to be press fitted in.
                </p>
                <p>
                  The device was capable of latching on doors and generating
                  enough torque to unlock a deadbolt upon the successful scan of
                  a valid badge.
                </p>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Box>
  );
}
