import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Products" />
      </div>
      <nav style={{ padding: "16px 32px" }}>
        <Link to="featured" style={{ marginRight: "16px" }}>
          Featured
        </Link>
        <Link to="new" style={{ marginRight: "16px" }}>
          New
        </Link>
      </nav>
      {/* outlet component allows the parent component to display the child component that matches the url, e.g /products/new ==> will display the <NewProducts/> component */}
      <Outlet />
    </>
  );
};

export default Products;
