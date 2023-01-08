import React from "react";
import LoginImage from "../../Assets/images/login.svg";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={LoginImage} alt="Login" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
