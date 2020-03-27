import React from "react"
import NavBar from "./NavBar"
import "../css/About.css"

const About = () => {
    return (
        <div id = "content">
        <NavBar />

            <h1>About Me</h1>
            
            <div className="about_div">
                <img id="about_pic"
                    src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/20374549_10155117186828778_2756793054019053251_n.jpg?_nc_cat=101&_nc_ohc=CXw6k_K_cMsAQlGvUempZGlJ8Htld5uPcDsn3bPuJIUlGuZoilfapb-HQ&_nc_ht=scontent-bos3-1.xx&oh=058f59d724fbde56086a36de8e059bae&oe=5E76F4EE"
                    alt="my pic"
                    width="300px"
                    height="300px"
                />
                <p id="about_me">I am a very passionate programmer who uses coding to express myself.
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