import React from "react";
import { Link } from "react-router-dom";

const UserItems = props => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center">
      <a href={html_url}>
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
      </a>
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

export default UserItems;
