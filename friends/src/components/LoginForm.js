import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const logIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        console.log("Login.js response: ", res.data);
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
        setIsLoading(false);
        console.log("positive isLoading state", isLoading);
      })
      .catch((err) => {
        console.log("Login error: ", err.response.data.error);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <form onSubmit={logIn}>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={credentials.username}
          onChange={handleChanges}
        />
        <br />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <br />
        <br />
        {isLoading === true ? (
          <BarLoader
            isLoading={isLoading}
            height={4}
            width={100}
            css={override}
          />
        ) : (
          ""
        )}
        <br></br>
        <button onClick={() => setIsLoading(!isLoading)} type="submit">
          login!
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
