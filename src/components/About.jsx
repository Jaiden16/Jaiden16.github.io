import React from "react"
import NavBar from "./NavBar"
import "../css/About.css"
import pic from "../pictures/IMG_0158.jpg"

const About = () => {
    return (
        <div id = "content">
        <NavBar />

            <h1>About Me</h1>
            
            <div className="about_div">
                {/* <img id="about_pic"
                    src= {pic}
                    alt="my pic"
                    width="300px"
                    height="300px"
                /> */}
                <p id="about_me"><img id="about_pic"
                    src= {pic}
                    alt="my pic"
                    width="300px"
                    height="300px"
                />I am a very passionate programmer who uses coding to express myself.
                    I went to college to learn how to build video games using C++, and
                    older games engines like GameMaker and Unreal. I eventually transitioned
                    over to using Unity and learning C#.
    
                    A couple of years later I found my way to Pursuit, a technical Job Ready
                    program which taught me how to make websites and futher my understanding
                    of programming.
    
                    I love to create things for myself and others, and working with
                    like minded passionate people brings out the best in me.
            </p>
            </div>
        </div>

    )
}

export default About