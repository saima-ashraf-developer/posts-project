import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    loadedId: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedId ||
        (this.state.loadedId && this.state.loadedId.id !== this.props.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then(({ data }) => {
            this.setState({ loadedId: data });
          });
      }
    }
  }
  postDeleteHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading</p>;
    }
    if (this.state.loadedId) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedId.title}</h1>
          <p>{this.state.loadedId.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.postDeleteHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
