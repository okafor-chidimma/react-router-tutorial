import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search Products" />
      </div>
      <nav style={{ padding: "16px 32px" }}>
        {/* a relative link is a Link whose "to" prop value is without / e.g "featured" and not "/featured"
            why have a relative link ==> used when you have nested routes in the parent component, so you use it when defining Link tags to those nested routes
            what happens when you do this? react router appends the link "to" value to the route "path" value. the route part of the component in which the Link was defined. so in our case, this

            <Link to="featured">
                Featured
            </Link>

            gets translated to /products/featured
            because this Link is defined in the Products component's page and the route for the component has a /products path,

            In essence, relative links inherit the closest route in which they are rendered. very useful when you have to link deeply nested paths

            An absolute link on the other hand is defined with / slash and react router will construct the path from the root of the app and not the current URL, so /new ==> http://localhost:3000/new.
            absolute link is used mainly for primary naviagtion link
          */}
        <Link to="featured" style={{ marginRight: "16px" }}>
          Featured
        </Link>
        <Link to="new" style={{ marginRight: "16px" }}>
          New
        </Link>
      </nav>
      {/* outlet component allows the parent component to display the child component that matches the url, e.g /products/new ==> will display the <NewProducts/> component 
      */}
      <Outlet />
    </>
  );
};

export default Products;
