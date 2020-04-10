import React from "react"
// import { Route, Link, Switch } from 'react-router-dom'
import NavBar from "./NavBar"
import "../css/projects.css"
import pic from "../pictures/sprite5.png"

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }


    componentDidMount() {
    }


    render() {
        return (
            <div className="projects-component">
                <NavBar id="navbar" />
                <h1>PROJECTS</h1>
                <div id="projects-div">
                    <ul className="flex-container">
                        <li className="flex-item">1</li>
                        <li className="flex-item">2</li>
                    </ul>
                </div>
            </div>
        )
    }
}












export default Projects