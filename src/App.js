import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
    </Route>
  </Routes>
  );
}

export default App;
