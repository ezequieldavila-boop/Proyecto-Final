import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="fade-in">

      {/* HERO */}
      <div
        className="d-flex align-items-center text-white"
        style={{
          height: "70vh",
          background:
            "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f') center/cover no-repeat",
        }}
      >
        <div className="container text-center">

          <h1 className="display-4 fw-bold">
            📚 BookVerse
          </h1>

          <p className="lead">
            Tu tienda de libros digital moderna
          </p>

          <Link
            to="/catalog"
            className="btn btn-warning btn-lg mt-3"
          >
            Explorar catálogo
          </Link>

        </div>
      </div>

      {/* FEATURES */}
      <div className="container my-5">

        <h2 className="text-center mb-4">
          ¿Por qué elegirnos?
        </h2>

        <div className="row text-center">

          <div className="col-md-4 mb-3">

            <div className="card shadow-sm h-100 p-3 feature-card">

              <h3>📖 Variedad</h3>

              <p>
                Miles de libros disponibles en todas las categorías.
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-3">

            <div className="card shadow-sm h-100 p-3 feature-card">

              <h3>⚡ Rápido</h3>

              <p>
                Compra fácil y rápida en segundos.
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-3">

            <div className="card shadow-sm h-100 p-3 feature-card">

              <h3>💳 Seguro</h3>

              <p>
                Sistema de compra protegido y confiable.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* CTA FINAL */}
      <div className="bg-dark text-white text-center py-5">

        <h2>Empieza ahora</h2>

        <p>Descubre libros increíbles hoy mismo</p>

        <Link
          to="/catalog"
          className="btn btn-warning btn-lg"
        >
          Ir al catálogo
        </Link>

      </div>

    </div>
  );
}

export default Home;