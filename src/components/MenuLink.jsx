import React from "react"
import { Link } from "react-router-dom"
import "../css/MenuLink.css"

function MenuLink(props) {


    return (
        <div className="MenuLink" hidden={props.navbar_hidden} >
            <img
                id="logo"
                src="./Jonathan.png"
                alt="broken pic"
                width="100%"
            />
            <div id="text">
                <div className="button" >

                    <Link className="link" to='/About'>About</Link>
                    {/* <a className = "about" href = "/About">About</a> */}
                </div>

                <div>
                    <Link className="link" to='/Skills'>Skills</Link>
                </div>

                <div>
                    <Link className="link" to='/Projects'>Projects</Link>
                </div>
            </div>

        </div>
    )
}

export default MenuLink