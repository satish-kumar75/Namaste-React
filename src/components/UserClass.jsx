import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
      userRepo: [],
      follow: [],
    };
  }

  async componentDidMount() {
    const URL = "https://api.github.com/users/satish-kumar75";
    const data = await fetch(URL);
    const json = await data.json();
    const repos = await fetch(URL + "/repos");
    const followers = await fetch(URL + "/followers");
    const foll = await followers.json();
    const repoj = await repos.json();
    console.log(repoj);
    this.setState({
      userInfo: json,
      userRepo: repoj,
      follow: foll,
    });
  }

  render() {
    const { name, location, avatar_url, login } = this.state.userInfo;
    return (
      <div className="user-info-container">
        <img src={avatar_url} alt="" />
        <p>Name : {name}</p>
        <p>Loaction : {location}</p>
        <p>User Id: {login}</p>
        <p>Email : satishk404456@gamil.com</p>
        <h2>Repositories:</h2>
        <ul>
          {this.state.userRepo.map((repo) => (
            <li key={repo.id}>{repo.name}</li>
          ))}
        </ul>
        <h2>Followers:</h2>
        <ul>
          {this.state.follow.map((fol) => (
            <li key={fol.id}>{fol.login}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default UserClass;
