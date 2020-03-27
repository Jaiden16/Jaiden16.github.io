import React from "react"
import { Link } from "react-router-dom"

function NavBar(props) {
  // const styles = {
  //   hidden:
  // }

    return (
        <nav id = "navbar" hidden = {props.navbar_hidden} >
        <Link to='/'>Home</Link>{" "}
        <Link to='/About'>About</Link>{" "}
        {/* <Link to='/Blog'>Blog</Link>{" "} */}
        <Link to='/Skills'>Skills</Link>{" "}
        <Link to='/Projects'>Projects</Link>
      </nav>
    )
}

export default NavBar