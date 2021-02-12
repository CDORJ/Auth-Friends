import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...props}
      render={() => {
        if (token) {
          return <Component {...props} />;
        }
        return <Redirect to="/signin" />;
      }}
    />
  );
};

export default PrivateRoute;
