import React from "react";
import "./App.css";
import axios from "axios";
import FollowerList from "./FollowerList";
import Styled from "styled-components";

const Cards = Styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Card = Styled.div`
  margin: 2rem 6rem;
  padding: 1rem;
  background-color: #D3D3D3;
  box-shadow: 2px 2px #000000;
  border-radius: 1.5rem;
`;

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

  handleChanges = e => {
    this.setState({ userText: e.target.value });
    console.log(e.target.value);
  };

  componentDidUpdate() {
    console.log("componentDidUpdate running");
    axios
      .get(`https://api.github.com/users/${this.state.userText}`)
      .then(res => {
        this.setState({
          profile: res.data
        });
      })
      .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }

  fetchUser = e => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => {
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.profile.login}'s Github User Dashboard</h1>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUser}>Fetch user</button>
        <Cards>
          <Card>
            <p>
              <img src={this.state.profile.avatar_url} />
            </p>
            <p>Github Handle: {this.state.profile.login}</p>
            <p>
              Github Profile:{" "}
              <a href={this.state.profile.html_url}>
                {this.state.profile.html_url}
              </a>
            </p>
            <p>Followers: {this.state.profile.followers}</p>
          </Card>
        </Cards>
        <h2>Github Contribution Graph</h2>
        <img src="http://ghchart.rshah.org/abrobins" alt="Github chart" />
        <h2>Github Followers</h2>
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
