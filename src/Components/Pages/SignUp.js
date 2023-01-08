import React from "react";
import signupImage from "../../Assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signupImage} alt="Sign Up" />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
