import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About";
import FeaturedProducts from "./componets/FeaturedProducts";
import Home from "./componets/Home";
import IndexProduct from "./componets/IndexProduct";
import NavBar from "./componets/NavBar";
import NewProducts from "./componets/NewProducts";
import NoMatch from "./componets/NoMatch";
import OrderSummary from "./componets/OrderSummary";
import Products from "./componets/Products";

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
          {/* you can have a nested route that you want to display on the parent route.you can do that by replacing the path prop with index */}
          <Route index element={<IndexProduct />} />
          {/* here react configures the nested route paths as /products/featured because they are nested */}
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
