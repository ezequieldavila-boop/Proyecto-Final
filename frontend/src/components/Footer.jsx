import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-5">

      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3 className="fw-bold">
              📚 BookVerse
            </h3>

            <p className="mt-3">
              Tu librería online favorita.
              Descubrí historias increíbles
              desde la comodidad de tu hogar.
            </p>

          </div>

          <div className="col-md-4">

            <h4>Enlaces</h4>

            <ul className="list-unstyled">

              <li>
                <Link to="/">Inicio</Link>
              </li>

              <li>
                <Link to="/catalog">
                  Catálogo
                </Link>
              </li>

              <li>
                <Link to="/cart">
                  Carrito
                </Link>
              </li>

            </ul>

          </div>

          <div className="col-md-4">

            <h4>Contacto</h4>

            <p>📧 contacto@bookverse.com</p>

            <p>📱 +598 99 123 456</p>

            <div className="mt-3">

              <span className="me-3 fs-4">📘</span>

              <span className="me-3 fs-4">📸</span>

              <span className="fs-4">🐦</span>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          © 2026 BookVerse - Proyecto Final Desarrollo Web

        </div>

      </div>

    </footer>
  );
}

export default Footer;