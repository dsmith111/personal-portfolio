import { Grid, Box, Tabs, Tab, Container, Paper } from "@material-ui/core";
import { useState } from "react";
import PageContent1 from "../components/HomePage/PageContent1";
import satImage from "../assets/satellites.JPG";
import { Parallax } from "react-parallax";
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
      {/* <Grid container direction="column" alignItems="center"> */}
      {/* <img class="bg-image" src={satImage} /> */}
      <Paper class="main-header-wrap" elevation={1}>
        <Parallax blur={1.8} strength={150} bgImage={satImage}>
          <Box width="100%" paddingTop="0em" minHeight="35em">
            <div class="main-header-text">
              <h1>Software | AI | Mechanical Engineer</h1>
              <h2>David Smith's Portfolio</h2>
            </div>
          </Box>
        </Parallax>
      </Paper>
      <Container class="body-wrap">
        <Tabs
          TabIndicatorProps={{
            style: {
              background: "#1981ff",
            },
          }}
          value={currentTab}
          onChange={onTabChange}
        >
          <Tab label="Home" />
          <Tab label="About me" />
          <Tab label="Projects" />
        </Tabs>
        <TabPanel value={currentTab} index={0}>
          <PageContent1 />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <div>
            <h1>HIII</h1>
          </div>
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <div>
            <h1>HIeeI</h1>
          </div>
        </TabPanel>
        {/* </Grid> */}
      </Container>
    </div>
  );
}
