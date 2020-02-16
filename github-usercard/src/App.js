import React from "react";
import "./App.css";
import axios from "axios";
import FollowerList from "./FollowerList";

class App extends React.Component {
  state = {
    profile: [],
    followers: [],
    userText: "",
    error: ""
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/abrobins")
      .then(res => {
        this.setState({
          profile: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/abrobins/followers")
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Blair's Github User Dashboard</h1>
        <p>
          <img src={this.state.profile.avatar_url} />
        </p>
        <p>Github Handle: {this.state.profile.login}</p>
        <p>Github Profile: {this.state.profile.html_url}</p>
        <p>Followers: {this.state.profile.followers}</p>
        <FollowerList followers={this.state.followers} />
        {/* {!this.state.error &&
          this.state.followers.map(followers => ({
            Github Handle: {followers.login}
            <p>Github Profile: {followers.html_url}</p>
        }))} */}
      </div>
    );
  }
}

export default App;
