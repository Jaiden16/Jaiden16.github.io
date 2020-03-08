import React from "react"
import PostApi from "../PostApi"
import {Route,Link, Switch} from 'react-router-dom'
import Post from "./Post"

class Blog  extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []

        }
    }

    componentDidMount(){
        let data = PostApi.getAll()
        console.log(data)
        this.setState({
            posts: data
        })
    }

    renderLinks = () =>{
        const {posts} = this.state
        return (
            <ul>{
                posts.map(post =>{
                    return (
                        <li key = {post.id}>
                            <Link to = {`/Blog/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })
            }</ul>
        )

    }

    
    render(){
        return(
            <div><img 
            src ="https://scontent-bos3-1.xx.fbcdn.net/v/t31.0-8/p720x720/22829296_10155350291058778_764837939569655473_o.jpg?_nc_cat=100&_nc_ohc=NVQIGAHIkJQAQnKgbBk_ph59xc6rNFasaB0CA1zrQmZ0WciKNVAjCyDFg&_nc_ht=scontent-bos3-1.xx&oh=1d722ed3e29e5614bb50cc058fd67868&oe=5E779D60" 
            alt = "my pic"
            width = "300px"
            height = "300px"
            />
            <Switch>
                <Route exact path = "/Blog" render = {this.renderLinks}/>
                <Route path = "/Blog/posts/:id" component ={Post} />
            </Switch>  
            </div>
        )

    }
    
}

    



export default Blog