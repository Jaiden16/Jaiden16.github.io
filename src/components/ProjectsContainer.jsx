import React, { Component } from "react"

import "../css/DisplayPic.css"

class ProjectContainer extends Component {
    constructor(props) {
        super()
    }


    render() {
        return (
            <div className="Project_Container">
                <img
                    src={this.props.source}
                    width={this.props.width}
                    height={this.props.height}
                    alt="missing pic">
                </img>
                <p>{this.props.name}</p>
            </div>
        )

    }


}

export default ProjectContainer