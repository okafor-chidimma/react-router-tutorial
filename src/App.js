import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About";
import Home from "./componets/Home";
import NavBar from "./componets/NavBar";
import OrderSummary from "./componets/OrderSummary";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* notice that there is no / in the about */}
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
