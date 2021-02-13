import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute(props) {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: location } }} />
        );
      }}
    />
  );
}



// const PrivateRoute = ({ component: Component, ...props }) => {
//   const token = window.localStorage.getItem("token");
//   return (
//     <Route
//       {...props}
//       render={() => {
//         if (token) {
//           return <Component {...props} />;
//         }
//         return <Redirect to="/signin" />;
//       }}
//     />
//   );
// };

// export default PrivateRoute;
