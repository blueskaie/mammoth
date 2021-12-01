import React, { useEffect, useState } from "react";
import { Symfoni } from "./hardhat/SymfoniContext";
import styled, { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

import "./App.scss";

import EthersProvider from "./components/EthersProvider/EthersProvider";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import { THEME } from "./constants/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Flip from "./container/Flip";
import FightNight from "./container/FightNight";
import Wheel from "./container/Wheel";
import Home from "./components/Home/Home";
import Dice from "./container/Dice";
import ScrollToTop from "./utils/scrollToTop";
import storage from "./utils/storage";
import Originals from "components/Originals/Originals";
import WelcomePopUp from "components/WelcomePopUp/WelcomePopUp";
// import LiveFeed from "./components/LiveFeed";

const helmetContext = {};

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    storage.remove("dice");
    storage.remove("flip");
    if (storage.get("welcome-popup") === null) {
      storage.set("welcome-popup", true);
      setIsVisible(true);
    }
  }, []);

  return (
    <div className="App">
      <WelcomePopUp
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <header className="App-header">
        <Symfoni autoInit={false} showLoading={false}>
          <Router>
            <HelmetProvider context={helmetContext}>
              <ThemeProvider theme={THEME}>
                <EthersProvider>
                  {/*<LiveFeed />*/}
                  <TopBar />
                  <ScrollToTop>
                    <Switch>
                      <StyledBodyContainer>
                        <Route exact path="/" component={Home} />
                        <Route path="/dice" component={Dice} />
                        <Route path="/flip" component={Flip} />
                        <Route path="/wheel" component={Wheel} />
                        <Route path="/fight" component={FightNight} />
                        <Route path="/originals" component={Originals} />
                      </StyledBodyContainer>
                    </Switch>
                  </ScrollToTop>
                  <Footer />
                </EthersProvider>
              </ThemeProvider>
            </HelmetProvider>
          </Router>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;

const StyledBodyContainer = styled.div`
  padding: 130px 0 0;
  @media (max-width: 1000px) {
    padding: 64px 0 0;
  }
`;
