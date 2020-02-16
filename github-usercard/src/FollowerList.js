import React from "react";

const FollowerList = props => {
  return (
    <div className="follower-list">
      {props.followers.map(item => (
        <>
          <p>
            <img src={item.avatar_url} width="200px" />
          </p>
          <p>Github Handle: {item.login}</p>
          <p>
            Github Profile: <a href={item.html_url}>{item.html_url}</a>
          </p>
        </>
      ))}
    </div>
  );
};

export default FollowerList;
