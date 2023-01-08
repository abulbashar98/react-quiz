import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setLoading(false);
      setError(`${error.message}`);
    }
  };

  return (
    <div>
      <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
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

        <Button disable={loading} type="submit">
          <span>Submit now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
