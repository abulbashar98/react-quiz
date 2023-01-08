import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // firebase navigation hook

  const navigate = useNavigate();

  // import SignUp from AuthContext
  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("passwords don't match");
      return;
    }
    setLoading(true);
    try {
      await signUp(email, password, userName);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(`${error.message}`);
    }
  };

  return (
    <div>
      <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Enter name"
          icon="person"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextInput
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Enter password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Checkbox
          text=" I agree to the Terms & Conditions"
          required
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />

        <Button type="submit" disable={loading}>
          <span>Submit now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
