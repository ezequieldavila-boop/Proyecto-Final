import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLogged(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setLogged(false);

    navigate("/");

    window.location.reload();
  };

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

          {!logged ? (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          ) : (
            <>
              <Link className="nav-link" to="/admin">
                Administrador
              </Link>

              <button
                className="btn btn-danger ms-3"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;