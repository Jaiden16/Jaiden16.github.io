import React from "react"
import { Link } from "react-router-dom"
import "../css/MenuLink.css"

function MenuLink(props) {


    return (
        <div className="MenuLink" hidden={props.navbar_hidden} >
            <img
                id = "logo"
                src="./Jonathan.png"
                alt="broken pic"
                width="100%"
            />
            <div id = "text">
                <button><Link to='/About'>About</Link></button>
                {/* <button><Link to='/Blog'>Blog</Link></button> */}
                <button><Link to='/Skills'>Skills</Link></button>
                <button><Link to='/Projects'>Projects</Link></button>
            </div>

        </div>
    )
}

export default MenuLink