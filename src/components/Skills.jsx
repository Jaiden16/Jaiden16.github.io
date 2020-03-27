import React from "react"
import NavBar from "./NavBar"
import DisplayPic from "./displayPic"
import cplus from "../pictures/c++_logo.png"
import csharp from "../pictures/csharp.png"
import css from "../pictures/css-logo.png"
import es6 from "../pictures/es6-logo.png"
import git from "../pictures/git_logo.png"
import github from "../pictures/github-logo.png"
import html from "../pictures/html5_logo.png"
import node from "../pictures/nodejs.png"
import postgres from "../pictures/postgres.png"
import react from "../pictures/react_logo.png"
import redux from "../pictures/redux_logo.png"
import unity from "../pictures/unity2.png"
import "../css/skills.css"
const height = "100px"
const width = "100px"


const Skills = () => {
    return (
        <div id = "skills">
            <NavBar id="navbar"  />
            <br/>
            <br/>
            <DisplayPic
                source={react}
                width={width}
                height={height}
                name = "React"
            />
            <DisplayPic
                source={node}
                width={width}
                height={height}
                name = "Node JS"
            />
            <DisplayPic
                source={css}
                width={width}
                height={height}
                name = "CSS"
            />
            <DisplayPic
                source={es6}
                width={width}
                height={height}
                name = "ES6"
            />
            <DisplayPic
                source={git}
                width={width}
                height={height}
                name = "Git"
            />
            <DisplayPic
                source={github}
                width={width}
                height={height}
                name = "GitHub"
            />
            <DisplayPic
                source={html}
                width={width}
                height={height}
                name = "HTML 5"
            />
            <DisplayPic
                source={postgres}
                width={width}
                height={height}
                name = "Postgres"
            />
            <DisplayPic
                source={redux}
                width={width}
                height={height}
                name = "Redux"
            />
            <DisplayPic
                source={unity}
                width={width}
                height={height}
                name = "Unity"
            />
            <DisplayPic
                source={cplus}
                width={width}
                height={height}
                name = "C++"
            />
            <DisplayPic
                source={csharp}
                width={width}
                height={height}
                name = "C#"
            />
        </div>
    )
}

export default Skills