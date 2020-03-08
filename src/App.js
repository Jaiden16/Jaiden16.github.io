import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';


import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Blog from "./components/Blog"



function App() {
  return (
    <div className="App">
      <nav>
        <Link to = '/'>Home</Link>{" "}
        <Link to = '/About'>About</Link>{" "}
        <Link to = '/Blog'>Blog</Link>{" "}
        <Link to = '/Skills'>Skills</Link>{" "}
        {/* <Link to = '/Posts'>Posts</Link> */}
      </nav>
      {/* <h1>Welcome To My Website</h1> */}
      
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route  path = "/About" component = {About}/>
        <Route  path = "/Blog" component = {Blog}/>
        <Route  path = "/Skills" component = {Skills}/>
        
      </Switch>

    </div>
  );
}

export default App;
