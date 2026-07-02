import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;