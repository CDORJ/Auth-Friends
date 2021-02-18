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

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  // console.log("LOGIN FORM PROPS", isLoggedIn);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("before logged in", isLoggedIn);

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
    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        // console.log("Login.js response: ", res.data);
        localStorage.setItem("token", res.data.payload);
        setIsLoggedIn(true);
        history.push("/protected");
        // console.log("positive isLoggedIn state", isLoggedIn);
      })
      .catch((err) => {
        console.log("Login error: ", err.response.data.error);
        // setError(err.response);
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
        {isLoggedIn === true && error === "" ? (
          <BarLoader
            isLoggedIn={isLoggedIn}
            height={4}
            width={100}
            css={override}
          />
        ) : (
          ""
        )}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)} type="submit">
          login!
        </button>
        <br></br>
        {error ? <div style={{ color: "red" }}>{error}</div> : <></>}
      </form>
    </div>
  );
};

export default LoginForm;
