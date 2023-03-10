import { Route, Routes } from "react-router-dom";
import AuthProvider from "../Contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import SignUp from "./Pages/SignUp";
import RequireAuth from "./PrivateRoute/RequireAuth";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route
              path="quiz/:id"
              element={
                <RequireAuth>
                  <Quiz />
                </RequireAuth>
              }
            />
            <Route
              path="result/:id"
              element={
                <RequireAuth>
                  <Result />
                </RequireAuth>
              }
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  );
}
