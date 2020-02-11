import React from "react";
import ReactDOM from "react-dom";
function User(props) {
  return (
    <div className="mwhyte">
      <img src={props.username.avatar_url} alt="My github profile" />
      <div className="belowPicture">
        <h2> {props.username.login} </h2>
        <a href={props.username.html_url} target="_blank" className="url">
          Checkout my github!
        </a>
      </div>
    </div>
  );
}

export default User;
