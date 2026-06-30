import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          📚 BookVerse
        </Link>

        <div className="d-flex align-items-center gap-3">

          <Link to="/">Inicio</Link>

          <Link to="/catalog">Catálogo</Link>

          <Link to="/cart">
            🛒 ({cart.length})
          </Link>

          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Registro</Link>
            </>
          ) : (
            <>
              <span style={{ color: "white" }}>
                👋 {user.name}
              </span>

              {user.role === "admin" && (
                <Link to="/admin">Admin</Link>
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
    </nav>
  );
}

export default Navbar;