import React, {Component} from "react"
import MenuLink from "./MenuLink"
import "../css/Home.css"
// import "../css/Home"

// document.addEventListener("DOMContentLoaded", () => {
//     var x = document.getElementById("background")
//     var bar = document.getElementById("navbar")
//     bar.hidden = true;
//     show(x, bar);


// })

// function show(x, y) {
//     console.log(x)
//     console.log(y)
//     x.addEventListener("webkitAnimationEnd", () => {

//         y.hidden = false;
//     })

// }
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            navbar_hidden: true
        }


    }
    handleAnimationEnd = () =>{
        // this.props.unhideNavbar()
        this.setState({
            navbar_hidden:false
        })
    }

    
    render(){

        let {navbar_hidden} = this.state;
        return (
            <div id="home_component">

    
                <div id = "left">
                <MenuLink navbar_hidden = {navbar_hidden} />
    
                </div>
    
                {/* <div id="image_wrapper"> */}
                    <img
                        id="background"
                        src="/building_new.png"
                        alt="broken pic"
                        onAnimationEnd = {this.handleAnimationEnd}
                    />
                {/* </div> */}
    
            </div>
    
        )

    }
    
}

export default Home