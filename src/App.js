import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import MenuLink from './components/MenuLink'
import './App.css';



import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Blog from "./components/Blog"
import Projects from "./components/Projects"


class App extends Component {
  constructor() {
    super()
    this.state = {
      navbar_hidden: true

    }
  }

  renderHome = (routeprops) => {
    return (
      <Home unhideNavbar={this.unhideNavbar} />
    )

  }

  render() {
    return (
      <div className="Application">
        <div id="Menu">
          <MenuLink/>

        </div>

        <div id="Content">

          <Switch>
            <Route exact path="/" render={this.renderHome} />
            <Route path="/About" component={About} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Projects" component={Projects} />
          </Switch>
        </div>



      </div>
    );

  }

}

export default App;
