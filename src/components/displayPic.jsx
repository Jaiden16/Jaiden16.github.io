import React from "react"
import "../css/DisplayPic.css"

function DisplayPic(props){
    return(
        <div className = "DisplayPic">
        <img src = {props.source}
             width = {props.width}
             height = {props.height}
             alt = "missing pic">
        </img>
        <p>{props.name}</p>
        </div>
    )
}

export default DisplayPic