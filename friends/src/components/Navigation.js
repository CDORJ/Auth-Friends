import React, { useEffect, useState } from "react";
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

const Navigation = () => {
  const [token, setToken] = useState("");
    console.log("cd: Navigation.js: token: ", token);
    
  useEffect(() => {
     setToken(localStorage.getItem("token"));  
  });
    
  return (
    <NavDiv>
      <Link to="/">Home</Link>
      <Link to="/signin">Sign In To See Friends</Link>
      {token && <Link to="/addFriend">Add A Friend</Link>}
      {token && <Link to="/protected">See Current Friends</Link>}
    </NavDiv>
  );
};

export default Navigation;
