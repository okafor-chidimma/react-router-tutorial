import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // to change link programmatically, maybe after perfroming a logic, the browser should re-direct to a specific link, e.g order-summary
    const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button onClick={()=>navigate("order-summary")}>Place Order</button>
    </>
  );
};

export default Home;
