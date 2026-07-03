import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">

      <div className="container">

        <div className="row">

          {/* MARCA */}
          <div className="col-md-4 mb-3">

            <h4 className="text-warning fw-bold">
              📚 BookVerse
            </h4>

            <p>
              Tu tienda de libros online moderna.
              Compra fácil, rápido y seguro.
            </p>

          </div>

          {/* LINKS */}
          <div className="col-md-4 mb-3">

            <h5 className="text-white">
              Navegación
            </h5>

            <ul className="list-unstyled">

              <li>
                <Link className="text-light text-decoration-none" to="/">
                  Inicio
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/catalog">
                  Catálogo
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/login">
                  Login
                </Link>
              </li>

              <li>
                <Link className="text-light text-decoration-none" to="/register">
                  Registro
                </Link>
              </li>

            </ul>

          </div>

          {/* INFO */}
          <div className="col-md-4 mb-3">

            <h5>Contacto</h5>

            <p>📍 Uruguay</p>
            <p>📧 bookverse@email.com</p>

          </div>

        </div>

        <hr className="bg-light" />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} BookVerse - Todos los derechos reservados
        </p>

      </div>

    </footer>
  );
}

export default Footer;