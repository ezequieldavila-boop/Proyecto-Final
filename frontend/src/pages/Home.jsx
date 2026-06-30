import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.60)), url('/banner.jpg')",
        }}
      >
        <div className="container">

          <div className="hero-content">

            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              📚 Bienvenido a BookVerse
            </span>

            <h1>
              Descubrí un
              <br />
              universo de libros
            </h1>

            <p>
              Encontrá novelas, clásicos, fantasía,
              ciencia ficción, romance, terror
              y mucho más.
            </p>

            <div className="mt-4">

              <Link
                to="/catalog"
                className="btn btn-warning btn-lg me-3"
              >
                Explorar catálogo
              </Link>

              <Link
                to="/register"
                className="btn btn-outline-light btn-lg"
              >
                Crear cuenta
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFICIOS */}

      <section className="py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            ¿Por qué elegir BookVerse?
          </h2>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">

              <div className="feature-card">

                <div className="feature-icon">
                  📚
                </div>

                <h4>Gran catálogo</h4>

                <p>
                  Más de 20 títulos cuidadosamente
                  seleccionados.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="feature-card">

                <div className="feature-icon">
                  🚚
                </div>

                <h4>Entrega rápida</h4>

                <p>
                  Comprá desde tu casa de forma
                  sencilla y cómoda.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="feature-card">

                <div className="feature-icon">
                  🔒
                </div>

                <h4>Compra segura</h4>

                <p>
                  Tu información siempre
                  protegida.
                </p>

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="feature-card">

                <div className="feature-icon">
                  ⭐
                </div>

                <h4>Calidad garantizada</h4>

                <p>
                  Trabajamos con las mejores
                  editoriales.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ESTADÍSTICAS */}

      <section className="stats-section">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">

              <h2>20+</h2>

              <p>Libros</p>

            </div>

            <div className="col-md-3">

              <h2>8</h2>

              <p>Géneros</p>

            </div>

            <div className="col-md-3">

              <h2>100%</h2>

              <p>Compra segura</p>

            </div>

            <div className="col-md-3">

              <h2>★★★★★</h2>

              <p>Valoración</p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="container text-center">

          <h2 className="fw-bold">
            Miles de historias te están esperando.
          </h2>

          <p className="lead">
            Elegí tu próximo libro favorito.
          </p>

          <Link
            to="/catalog"
            className="btn btn-warning btn-lg"
          >
            Ver catálogo
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;