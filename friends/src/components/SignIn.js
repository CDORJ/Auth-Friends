import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utilities/axiosWithAuth";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const logIn = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        console.log("cd: SignIn.js: axios.post res: ", res);
      })
      .catch((err) => {
        console.log(
          "cd: SignIn.js: axios.post error: ",
          err.response.data.error
        );
      });
  };

  return (
    <div>
      <br />
      <br />
      <form onSubmit={logIn}>
        <label htmlFor="username">Enter Sign In</label>
        <input
          id="username"
          name="username"
          type="text"
          value={credentials.username}
          onChange={handleChanges}
        />
        <br />
        <label htmlFor="password">Enter Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
