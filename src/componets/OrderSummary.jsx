import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  // to go back from a current page to the immediate previous page, we use useNavigate(-1) with -1 as the value. recall the history is an array and when you move from one url to another, the new url is added to the top of the stack and going back is easy, its kust like transversing through an array
//   note that the value passed determines how many steps back it will take. for -1 ==> previous url that you moved from to the current one,
//-2 ==> 2 steps back
//also note that navigate() accepts an object as an optional parameter, where you can spcify if you want replace the entire stack, instead of pushing it to the top of the stack 
  const navigate = useNavigate();
  return (
    <>
      <div>Order has been placed</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default OrderSummary;
