import React from "react";
import signupImage from "../../Assets/images/signup.svg";
import classes from "../../styles/SignUp.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const SignUp = () => {
  return (
    <div>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={signupImage} alt="Sign Up" />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />

          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <Checkbox text=" I agree to the Terms & Conditions" />

          <Button buttonText="Submit now" />

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
