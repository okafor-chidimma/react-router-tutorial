import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About";
import AdminData from "./componets/AdminData";
import FeaturedProducts from "./componets/FeaturedProducts";
import Home from "./componets/Home";
import IndexProduct from "./componets/IndexProduct";
import NavBar from "./componets/NavBar";
import NewProducts from "./componets/NewProducts";
import NoMatch from "./componets/NoMatch";
import OrderSummary from "./componets/OrderSummary";
import Products from "./componets/Products";
import UserData from "./componets/UserData";
import Users from "./componets/Users";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* notice that there is no / in the about */}
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          {/*  note that when you nest a route, the nested route's component (child component) gets rendered within the parent component and not on a new page */}

          {/* you can have a nested route that you want to display on the parent route.you can do that by replacing the path prop with index
           */}
          <Route index element={<IndexProduct />} />
          {/* here react configures the nested route paths as /products/featured because they are nested */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        {/* dynamic routes can be nested, just know that the child component is rendered in the parent component and not on a fresh page */}
        <Route path="users" element={<Users />}>
          {/* note that this userId param matches everything, both numbers and string, as long as the route /users/<anything> is matched. since this is nested, it means that UserData will be rendered in the Users component */}
          <Route path=":id" element={<UserData />} />
        </Route>
        {/* here because this route is not nested, the UserData component will be rendered on a new page and within any parent component */}
        {/* <Route path="users/:userId" element={<UserData />} /> */}
        {/* for this route, even though it has the format of the route with param, react will render the AdminData component when this exact route is matched. i.e users/admin is matched in the browser, react renders this component instead of UserData 
        this means that react router will match a more specific route before matching dynamic routes
        */}
        <Route path="users/admin" element={<AdminData />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
