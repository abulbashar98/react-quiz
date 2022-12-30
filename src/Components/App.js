import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./Pages/Quiz";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </div>
  );
}
