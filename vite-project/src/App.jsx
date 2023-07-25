import "./App.css";

import ironhackLogo from "./assets/ironhack-logo-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import menutop from "./assets/menu-top-xs.png";
// import reactlogo from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="containerTop">
        <div className="topRow">
          <img className="ironhackLogo" src={ironhackLogo} alt="logo" />
          <img id="menuIcon" src={menutop} alt="logo" />
        </div>
        <div className="topText">
          <h1>Say hello to React JS</h1>
          <p>
            You will learn how to use the most popular frontend library and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
        {/* <img src={reactlogo} alt="logo" /> */}
      </div>
      <div className="containerBtm">
        <div className="icons">
          <div>
            <img src={icon1} alt="logo" />
            <h3>Declarative</h3>
            <p>React makes it painess to create interactive UIs.</p>
          </div>
          <div>
            <img src={icon2} alt="logo" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src={icon3} alt="logo" />
            <h3>Single-way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div>
            <img src={icon4} alt="logo" />
            <h3>JSX</h3>
            <p>
              Statically typed, designed to run on the majority of browsers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
