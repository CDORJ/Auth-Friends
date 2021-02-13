import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 50px;
  width: 100%;
  align-items: center;
  background: #ff272a;
`;

const Navigation = (props) => {
  return (
    <NavDiv>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In To See Friends</Link>
      {props.isLoggedIn && <Link to="/addFriend">Add A Friend</Link>}
      {props.isLoggedIn && <Link to="/protected">See Current Friends</Link>}
    </NavDiv>
  );
};

export default Navigation;
