import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
  // console.log("Navigation", isLoggedIn);

  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn === true ? (
        <div>
          <Link to="/">Home</Link> <Link to="/protected">Friends List</Link>{" "}
          <Link to="/login" onClick={logOut}>
            Logout
          </Link>
          <Link to="/addfriend">Add Friend</Link>
        </div>
      ) : (
        <div>
          <Link to="/">Home</Link> <Link to="/login">Sign On</Link>
        </div>
      )}
    </div>
  );
};

export default Navigation;
