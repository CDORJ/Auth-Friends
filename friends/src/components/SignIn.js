import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utilities/axiosWithAuth";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    signIn: "",
    password: "",
  });

  const history = useHistory();

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* <form>
        <label htmlFor="signIn" />
        <input
          id="signIn"
          name="signIn"
          input="text"
          value={credentials.signIn}
          handleChanges={handleChanges}
        />
      </form> */}
      <h1>HELLO FROM SIGNIN</h1>
    </div>
  );
};

export default SignIn;
