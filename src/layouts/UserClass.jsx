import React from "react";
import "../styles/UserClass.scss";

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
    console.log(json);
    this.setState({
      userInfo: json,
      userRepo: repoj,
      follow: foll,
    });
  }

  render() {
    const {
      name,
      location,
      avatar_url,
      login,
      bio,
      following,
      followers,
      email,
      blog,
    } = this.state.userInfo;
    return (
      <div className="user-info-container grid place-content-center gap-12 p-3 sm:grid-cols-2">
        <div className="flex flex-col items-center gap-5">
          <img
            className="h-auto w-64 rounded-full mb-5"
            src={avatar_url}
            alt=""
          />
          <p className="text-2xl">{name}</p>
          <p>{login}</p>
          <p className="my-2">{bio}</p>
          <button className="edit-btn-G px-3 py-2 rounded-lg w-48 mb-2 font-semibold">
            Edit Profile
          </button>
          <p className="text-sm">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="octicon octicon-people inline mr-2"
            >
              <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
            </svg>
            {followers} followers . {following} following
          </p>
          <p> {location}</p>
          <a className="text-xs" href={blog} target="_blank" rel="noreferrer">
            {blog}
          </a>
          <p>{email}</p>
        </div>
        <div className="G-user-details rounded-lg p-6">
          <div>
            <h2 className="font-semibold text-3xl py-5">Repositories:</h2>
            <ul className="flex flex-wrap gap-3">
              {this.state.userRepo.map((repo) => (
                <li className="repo" key={repo.id}>
                  {repo.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-3xl py-5">Followers:</h2>
            <ul className="flex flex-wrap gap-3">
              {this.state.follow.map((fol) => (
                <li className="repo" key={fol.id}>
                  {fol.login}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default UserClass;
