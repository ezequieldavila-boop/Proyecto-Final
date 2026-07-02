import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

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
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{
        background: "#111",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold text-warning" to="/">
          📚 BookVerse
        </Link>

        {/* LINKS */}
        <div className="d-flex align-items-center gap-3">

          <Link className="nav-link text-white" to="/">
            Inicio
          </Link>

          <Link className="nav-link text-white" to="/catalog">
            Catálogo
          </Link>

          {/* CARRITO CON BADGE */}
          <Link className="nav-link text-white position-relative" to="/cart">

            🛒 Carrito

            {cart.length > 0 && (
              <span
                className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle"
              >
                {cart.length}
              </span>
            )}

          </Link>

          {/* USUARIO */}
          {!token ? (
            <>
              <Link className="btn btn-outline-warning btn-sm" to="/login">
                Login
              </Link>

              <Link className="btn btn-warning btn-sm" to="/register">
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-white fw-bold">
                👋 {name}
              </span>

              {role === "admin" && (
                <Link className="btn btn-warning btn-sm" to="/admin">
                  Admin
                </Link>
              )}

              <button
                className="btn btn-danger btn-sm"
                onClick={logout}
              >
                Salir
              </button>
            </>
          )}

        </div>

      </div>

      {/* 🔥 HOVER BAR SOLO EN CARRITO */}
      {location.pathname === "/cart" && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            background: "#111",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            color: "white",
            borderTop: "2px solid #ffc107",
            zIndex: 2000,
          }}
        >
          <span>🛒 Carrito activo</span>
          <span>Items: {cart.length}</span>
          <span>Total dinámico en checkout</span>
        </div>
      )}

    </nav>
  );
}

export default Navbar;