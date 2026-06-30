import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const cerrarSesion = () => {

    logout();

    navigate("/");

  };

  return (

    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{
        background: "rgba(15,15,15,.92)",
        backdropFilter: "blur(10px)"
      }}
    >

      <div className="container">

        <Link className="navbar-brand fw-bold fs-3" to="/">
          📚 BookVerse
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/"
              >
                Inicio
              </Link>

            </li>

            <li className="nav-item">

              <Link
                className="nav-link"
                to="/catalog"
              >
                Catálogo
              </Link>

            </li>

            <li className="nav-item position-relative">

              <Link
                className="nav-link"
                to="/cart"
              >

                🛒 Carrito

                {cart.length > 0 && (

                  <span
                    className="badge rounded-pill bg-danger position-absolute"
                    style={{
                      top: 2,
                      right: -8
                    }}
                  >
                    {cart.length}
                  </span>

                )}

              </Link>

            </li>

            {!user ? (

              <>

                <li className="nav-item">

                  <Link
                    className="nav-link"
                    to="/login"
                  >
                    Iniciar sesión
                  </Link>

                </li>

                <li className="nav-item">

                  <Link
                    className="btn btn-warning ms-3"
                    to="/register"
                  >
                    Registrarse
                  </Link>

                </li>

              </>

            ) : (

              <>

                <li className="nav-item dropdown">

                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >

                    👤 {user.name}

                  </a>

                  <ul className="dropdown-menu dropdown-menu-end">

                    <li>

                      <span className="dropdown-item-text">

                        {user.email}

                      </span>

                    </li>

                    {user.role === "admin" && (

                      <>

                        <li><hr /></li>

                        <li>

                          <Link
                            className="dropdown-item"
                            to="/admin"
                          >
                            Panel administrador
                          </Link>

                        </li>

                      </>

                    )}

                    <li><hr /></li>

                    <li>

                      <button
                        className="dropdown-item text-danger"
                        onClick={cerrarSesion}
                      >
                        Cerrar sesión
                      </button>

                    </li>

                  </ul>

                </li>

              </>

            )}

          </ul>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;