import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
import AsycnComponent from "../../hoc/asycnComponent";
// import NewPost from "./NewPost/NewPost";
import asychoComponent from "../../hoc/asycnComponent";

let AsycnNewPost = asychoComponent(() => {
  return import("./NewPost/NewPost");
});
class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts sdajk
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsycnNewPost} />
          ) : null}
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Route path="/posts" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
