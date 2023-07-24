import './App.css';

import ironhackLogo from './assets/ironhack-logo-xs.png';
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import menutop from "./assets/menu-top-xs.png";
import reactlogo from "./assets/react.svg";


function App() {


  return (
    <>
      <div className="container">
        <div className="topRow">
          <img className="ironhackLogo" src={ironhackLogo} alt="logo" />
          <img src={menutop} alt="logo" />
        </div>
        <img src={icon1} alt="logo" />
        <img src={icon2} alt="logo" />
        <img src={icon3} alt="logo" />
        <img src={icon4} alt="logo" />

        <img src={reactlogo} alt="logo" />
      </div>
    </>
  );
}

export default App
