import "../styles/App.css";
import Layout from "./Layout";
import SignUp from "./Pages/SignUp";
// import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <SignUp />
      </Layout>
    </div>
  );
}
