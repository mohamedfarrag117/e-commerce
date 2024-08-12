import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ShopItem from "./components/ShopItem";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Electronics from "./components/Electronics";
import Menswear from "./components/Menswear";
import Womenswear from "./components/Womenswear";
import Navigation from "./Navigation"; // Import the Navigation component

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Navigation /> {/* Use Navigation component */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item" element={<ShopItem />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/menswear" element={<Menswear />} />
          <Route path="/womenswear" element={<Womenswear />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
