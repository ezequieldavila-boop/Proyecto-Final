import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>📚 BookVerse</h2>

      <div>
        <Link to="/">Inicio</Link>{" "}
        <Link to="/catalog">Catálogo</Link>{" "}
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  );
}

export default Navbar;