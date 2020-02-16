import React from "react";
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

const FollowerList = props => {
  return (
    <Cards>
      {/* <div className="follower-list"> */}
      {props.followers.map(item => (
        <Card>
          <p>
            <img src={item.avatar_url} width="200px" width="200px" />
          </p>
          <p>Github Handle: {item.login}</p>
          <p>
            Github Profile: <a href={item.html_url}>{item.html_url}</a>
          </p>
        </Card>
      ))}
    </Cards>
    // </div>
  );
};

export default FollowerList;
