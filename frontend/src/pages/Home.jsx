import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        {/* Fondo oscuro */}
        <div
          style={{
            background: "rgba(0,0,0,.65)",
            minHeight: "100vh",
          }}
        >
          <div className="container h-100">
            <div
              className="row align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="col-lg-6 text-white">

                <h1
                  className="display-2 fw-bold mb-4"
                  style={{ color: "#ffc107" }}
                >
                  📚 BookVerse
                </h1>

                <p
                  className="lead mb-4"
                  style={{ fontSize: "1.4rem" }}
                >
                  Descubrí miles de historias increíbles.
                  <br />
                  Fantasía, romance, terror,
                  ciencia ficción, clásicos y mucho más.
                </p>

                <div className="d-flex gap-3">

                  <Link
                    to="/catalog"
                    className="btn btn-warning btn-lg px-5"
                  >
                    Explorar catálogo
                  </Link>

                  <Link
                    to="/login"
                    className="btn btn-outline-light btn-lg px-5"
                  >
                    Iniciar sesión
                  </Link>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}

      <div className="container py-5">

        <h2 className="text-center mb-5">
          ¿Por qué elegir BookVerse?
        </h2>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>📚</h1>
              <h4>Gran catálogo</h4>
              <p>
                Más de 20 libros para todos los gustos.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>🚚</h1>
              <h4>Entrega rápida</h4>
              <p>
                Compra fácil y recibí tus libros rápidamente.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>💳</h1>
              <h4>Pago seguro</h4>
              <p>
                Todas las compras están protegidas.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow h-100 text-center p-4">
              <h1>⭐</h1>
              <h4>Calidad garantizada</h4>
              <p>
                Los mejores títulos seleccionados.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Home;