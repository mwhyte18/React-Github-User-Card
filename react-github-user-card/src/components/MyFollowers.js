import React from "react";

function Followers(props) {
  return (
    <div className="follower">
      <img src={props.image} alt="followers profile" />
      <div className="belowFollower">
        <h2>{props.name} </h2>
        <a href={props.link} target="_blank" className="url">
          Checkout my github!
        </a>
      </div>
    </div>
  );
}

export default Followers;
