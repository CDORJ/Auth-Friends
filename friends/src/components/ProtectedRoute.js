import React from "react";
import { Route, Redirect } from "react-router-dom";
import FriendsList from "./FriendsList";

const ProtectedRoute = ({ ...props }) => {
  return (
    <Route
      {...props}
      render={() =>
        localStorage.getItem("token") ? (
          <FriendsList />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

// TODO only show if logged in */
// NOTE We can use Javascript to CONDITIONALLY render. Check to see if we have our wristband, inside localStorage under "token". If we don't have the token, we reroute the user to another page.
/* do we have token {
  
    ? render component  { component }
    : null; reroute to Login only 
}
 */
// TODO only show if logged in

export default ProtectedRoute;
