import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  console.log(props, "nav");
  const navLinkStyles = ({ isActive }) => {
    // please note that Navlink component passes an object to this function because it is used as a value for the style prop when we used the NavLink. that object contains isActive property which is either set to true or false
    // note also that it passes this object to any prop defined on the Navlink, e.g <NavLink className={isActive?"act":"no"} to="/">Home</NavLink>
    return {
      color: isActive ? "black" : "yellow",
    };
  };
  return (
    <nav className="nav">
      {/* use the link component to navigate to different component in your app and html anchor tag to navigate to a link outside of your application  */}
      {/* <Link to="/">Home</Link>
      {/* notice there is a / here, this is an absolute path. without the /, it becomes a relative route */}
      {/* <Link to="/about">About</Link> */}

      {/* Both the Link and NavLink components get translated to anchor tag once they are mounted on the DOM but the difference between them is that NavLink add a classname called "active" to the generated anchor tag. this means you can target elements with class name active in the css style */}
      <NavLink to="/">Home</NavLink>
      {/* you can also to use inline styling */}
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export default NavBar;
