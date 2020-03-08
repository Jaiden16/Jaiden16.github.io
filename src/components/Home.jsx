import React from "react"
import pic from "../pictures/jaiden.jpg"

const Home = () =>{
    return(
        <div>
            <h1>Welcome</h1>
            <h2>Jonathan Fagan</h2>
            <p>Game Dev / Web Dev</p>
            <img 
            src = {pic}
            alt = "my pic"
            width = "300px"
            height = "300px"
            />
        </div>
    )
}

export default Home