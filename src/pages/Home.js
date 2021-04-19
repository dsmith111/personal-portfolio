import {
  AppBar,
  Box,
  Container,
  Paper,
  Tab,
  Tabs,
  Toolbar,
} from "@material-ui/core";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import { useState } from "react";
import { Parallax } from "react-parallax";
import AboutPageContent1 from "../components/AboutMe/AboutPageContent1";
import Footer from "../components/FooterComponent";
import HomePageContent1 from "../components/HomePage/HomePageContent1";
import ProjectPageContent1 from "../components/Projects/ProjectPageContent1";
export default function HomePage() {
  const [currentTab, setCurrentTab] = useState(0);
  const onTabChange = (event, value) => {
    console.log(value);
    setCurrentTab(value);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index}>
        {children}
      </div>
    );
  };

  return (
    <div class="homepage">
      <AppBar
        elevation={2}
        style={{ backgroundColor: "#21d1b9" }}
        position="sticky"
      >
        <Toolbar>
          <p class="toolbar-text">David Smith's Portfolio</p>
        </Toolbar>
      </AppBar>
      <Paper class="main-header-wrap" elevation={1}>
        <Parallax
          blur={1.2}
          strength={300}
          bgImage={`${process.env.PUBLIC_URL}/assets/cloudycomp.png`}
        >
          <Box width="100%" paddingTop="0em" minHeight="35em">
            <div class="main-header-text">
              <h1>Software | AI | Mechanical Engineer</h1>
            </div>
            <div class="main-header-icons">
              <a
                class="main-header-a-icons"
                href={"https://github.com/dsmith111"}
              >
                <GitHub style={{ marginRight: "1em" }} />
              </a>
              <a
                href={"https://www.linkedin.com/in/david-smith-1696a01a9/"}
                class="main-header-a-icons"
              >
                <LinkedIn style={{ marginRight: "1em" }} />
              </a>
              <a
                href={"https://twitter.com/The_David_smith"}
                class="main-header-a-icons"
              >
                <Twitter style={{ marginRight: "1em" }} />
              </a>
            </div>
          </Box>
        </Parallax>
      </Paper>
      <Container class="body-wrap">
        <Paper style={{ borderRadius: "1em" }} elevation={4}>
          <Tabs
            TabIndicatorProps={{
              style: {
                background: "#1981ff",
              },
            }}
            style={{
              backgroundColor: "white",

              borderRadius: "1em",
              borderBottomRightRadius: "0em",
              borderBottomLeftRadius: "0em",
            }}
            value={currentTab}
            onChange={onTabChange}
          >
            <Tab label="Home" />
            <Tab label="About me" />
            <Tab label="Projects" />
          </Tabs>
          <TabPanel value={currentTab} index={0}>
            <HomePageContent1 />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <AboutPageContent1 />
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            <div>
              <ProjectPageContent1 />
            </div>
          </TabPanel>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
