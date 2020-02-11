import React from "react";
import axios from "axios";
import User from "./components/MyUser";
import Followers from "./components/MyFollowers";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      followers: []
    };
  }

  componentDidMount() {
    this.axiosMyUser();
    this.axiosFollowers();
  }

  axiosMyUser = () => {
    axios
      .get(`https://api.github.com/users/mwhyte18`)
      .then(res =>
        this.setState({
          username: res.data
        })
      )
      .catch(err => console.log(err));
  };

  axiosFollowers = () => {
    axios
      .get(`https://api.github.com/users/abarne/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <h1>GitHub User Cards</h1>
        <h1 className="title">My profile</h1>
        <b class="hr anim"></b>
        <div className="theUser">
          <User username={this.state.username} />
        </div>
        <h1 className="title">My Followers</h1>
        <b class="hr anim"></b>
        <div className="userFollowers">
          {this.state.followers.map(follower => (
            <Followers
              name={follower.login}
              image={follower.avatar_url}
              link={follower.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
