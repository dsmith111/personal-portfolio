import { Component } from 'react';
import MainPC from './components/PC_Device/MainComponent';
import MainMobile from './components/Mobile_Device/MainComponent';
import MainTablet from './components/Tablet_Device/MainComponent';
import {useMediaQuery} from 'react-responsive';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minDeviceWidth:1024 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1022 })
  // const isPortrait = useMediaQuery({orientation: 'landscape'})
  return (isTablet) ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (isMobile) ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

class App extends Component {
  render(){

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Desktop><MainPC /></Desktop>
          <Tablet><MainTablet /></Tablet>
          <Mobile><MainMobile /></Mobile>


        </div>
      </BrowserRouter>
    );
  };
}

export default App;
