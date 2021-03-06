import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header     from './components/header/Header'
import Dashboard  from './pages/Dashboard'
import CreateGame from './pages/CreateGame'
import NoMatch from "./pages/NoMatch"
import Auth from './pages/Auth'
import Profile from './pages/Profile';
//import PlayGame from ".pages/PlayGame"
import PlayGame   from './pages/PlayGame'
import Search     from './components/header/Search'
import styled from 'styled-components'
import GlobalStyle from './theme/GlobalStyle'

const AppWrapper = styled.div`
  margin-top: 6rem;
`


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <GlobalStyle />
          <AppWrapper>
            <Header />
            <Switch>
              <Route exact path='/' component={ Dashboard } />
              <Route exact path='/dashboard' component={ Dashboard } />
              <Route exact path='/create-game' component={ CreateGame } />
              <Route exact path='/play/' component={ PlayGame } />
              <Route exact path='/play/:id' component={ PlayGame } />
              <Route exact path='/login' render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path='/search' component={ Search } />
              <Route component={NoMatch} />
            </Switch>
          </AppWrapper>
        </>
      </Router>
    );
  }
}

export default App;
