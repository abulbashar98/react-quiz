import "../styles/App.css";
import Layout from "./Layout";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
