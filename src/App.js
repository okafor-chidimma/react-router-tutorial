import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* notice that there is no / in the about */}
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
