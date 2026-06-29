import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark position-absolute top-0 start-0 w-100"
      style={{
        zIndex: 1000,
        background: "rgba(0,0,0,.45)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📚 BookVerse
        </Link>

        <div className="navbar-nav ms-auto align-items-center">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/catalog">
            Catálogo
          </Link>

          <Link className="nav-link" to="/cart">
            🛒 Carrito ({cart.length})
          </Link>

          {!token ? (
            <>
              <Link className="nav-link" to="/login">
                Iniciar sesión
              </Link>

              <Link className="nav-link" to="/register">
                Registrarse
              </Link>
            </>
          ) : (
            <>
              <span
                className="navbar-text text-white mx-3"
                style={{ fontWeight: "bold" }}
              >
                👋 Hola, {name}
              </span>

              {role === "admin" && (
                <Link className="nav-link" to="/admin">
                  Panel Admin
                </Link>
              )}

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