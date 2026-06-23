import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📚 BookVerse
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/catalog">
            Catálogo
          </Link>

          <Link className="nav-link" to="/cart">
            🛒 Carrito ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;