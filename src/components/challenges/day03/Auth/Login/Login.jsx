//imrs
import React, { useState } from "react";

//sfc
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailOnChange(event) {
    //event.target.value
    console.log(event.taget.value);
    setEmail(event.target.value);
  }

  function passwordOnChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => emailOnChange}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => passwordOnChange}
      />
    </div>
  );
};

export default Login;
