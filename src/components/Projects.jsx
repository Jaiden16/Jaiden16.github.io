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
            <div className = "projects-component">
                <div id="projects-background">
                    <img
                        id="select-bg"
                        src={pic}
                        alt="broken pic"
                    />
                    <div id="projects-container">
                        <NavBar id="navbar" />


                    </div>
                </div>

            </div>

        )
    }
}







export default Projects