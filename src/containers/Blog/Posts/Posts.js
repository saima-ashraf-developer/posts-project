import React, { Component } from "react";
import axios from "axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedId: null,
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        console.log("this is the response type: ", data);
        const posts = data.slice(0, 4);
        const updatedposts = posts.map((post) => {
          return {
            ...post,
            auther: "max",
          };
        });
        this.setState({ posts: updatedposts });
      })
      .catch((error) => console.log(error));
  }
  postSelectedHandler = (id) => {
    this.props.history.push({ pathname: "/" + id });
  };
  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          auther={post.auther}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}
export default Posts;
