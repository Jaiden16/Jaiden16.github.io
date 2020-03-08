import React, { Component } from 'react';
import PostApi from '../PostApi';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    let postId = this.props.match.params.id
    let data = PostApi.getOne(postId);
    this.setState({
      post: data
    })
    console.log(this.props.match.params.id)
  }

  render() {
    // console.log(this.post)

    let { post } = this.state

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )
  }
}

export default Post;
