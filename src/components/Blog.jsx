import React from "react"
import PostApi from "../PostApi"
import { Route, Link, Switch } from 'react-router-dom'
import Post from "./Post"
import NavBar from "./NavBar"

class Blog extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []

        }
    }

    componentDidMount() {
        let data = PostApi.getAll()
        console.log(data)
        this.setState({
            posts: data
        })
    }

    renderLinks = () => {
        const { posts } = this.state
        return (
            <ul>{
                posts.map(post => {
                    return (
                        <li key={post.id}>
                            <Link to={`/Blog/posts/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                })
            }</ul>
        )

    }


    render() {
        return (
            <div>
                <NavBar id="navbar"  />
                <Switch>
                    <Route exact path="/Blog" render={this.renderLinks} />
                    <Route path="/Blog/posts/:id" component={Post} />
                </Switch>
            </div>
        )

    }

}





export default Blog