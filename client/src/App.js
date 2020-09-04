import React from "react";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import { Route, Switch, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Layout from "./components/layout/Layout";
import Main from "./components/home/Main";

import Signin from "./pages/auth/signin";
import Signup from "./pages/auth/signup";
import Player from "./pages/player/player";
import Players from "./pages/player/players";
import Stage from "./pages/tournament/stage";
//import Tournament from "./pages/tournament/tournament";
import Tournaments from "./pages/tournament/tournaments";
import TournamentNew from "./pages/tournament/tournamentNew";
import TournamentsWinners from "./pages/tournament/tournamenstWinners";

//import NotFound from "./pages/notFound";

import store from "./redux/store";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #F8F9FE;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .transition-container {
    position: relative;
    height: 100%;
  }

  .inner {
    position: absolute;
    width: 100%;
  }

  .fade-enter,
  .fade-appear {
    opacity: 0;
  }

  .fade-enter.fade-enter-active,
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 400ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const App = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      <GlobalStyle />
      <TransitionGroup className="transition-container">
        <CSSTransition
          appear={true}
          key={location.key}
          timeout={{ enter: 400, exit: 200 }}
          classNames="fade"
        >
          <div className="inner">
            <Switch>
              <Route exact path="/auth/signin" component={Signin}></Route>

              <Route exact path="/auth/signup">
                <Signup />
              </Route>

              <Layout>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/tournament">
                  <Tournaments />
                </Route>

                <Route exact path="/tournament/new">
                  <TournamentNew />
                </Route>

                <Route exact path="/tournament/winner">
                  <TournamentsWinners />
                </Route>

                {/* <Route exact path="/tournament/:tournamentId">
                  <Tournament />
                </Route> */}

                <Route exact path="/tournament/:tournamentId/:stageNumber">
                  <Stage />
                </Route>

                <Route exact path="/player">
                  <Players />
                </Route>

                <Route exact path="/player/:playerId">
                  <Player />
                </Route>

                {/* <Route path="/not-found">
                  <NotFound />
                </Route> */}
              </Layout>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Provider>
  );
};

export default App;
