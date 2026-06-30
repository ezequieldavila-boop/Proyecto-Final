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
        <div
          style={{
            background: "rgba(0,0,0,.55)",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="container text-white">

            <h1
              className="display-2 fw-bold"
              style={{ maxWidth: "700px" }}
            >
              Descubrí tu próxima gran historia
            </h1>

            <p
              className="lead mt-4"
              style={{ maxWidth: "600px" }}
            >
              Miles de aventuras, romances, misterios y
              mundos fantásticos te esperan en BookVerse.
            </p>

            <Link
              to="/catalog"
              className="btn btn-warning btn-lg mt-4 px-5"
            >
              📚 Explorar catálogo
            </Link>

          </div>
        </div>
      </section>

      {/* CARACTERISTICAS */}

      <div className="container py-5">

        <div className="row text-center">

          <div className="col-md-4">

            <div className="card border-0 shadow h-100">

              <div className="card-body p-4">

                <h1>📖</h1>

                <h4 className="fw-bold">
                  Más de 20 títulos
                </h4>

                <p className="text-muted">
                  Fantasía, romance, terror,
                  ciencia ficción y mucho más.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card border-0 shadow h-100">

              <div className="card-body p-4">

                <h1>🚚</h1>

                <h4 className="fw-bold">
                  Compra sencilla
                </h4>

                <p className="text-muted">
                  Agregá libros al carrito
                  y realizá tu compra fácilmente.
                </p>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card border-0 shadow h-100">

              <div className="card-body p-4">

                <h1>⭐</h1>

                <h4 className="fw-bold">
                  Calidad garantizada
                </h4>

                <p className="text-muted">
                  Libros seleccionados para
                  todos los gustos.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* QUIENES SOMOS */}

      <section
        className="py-5"
        style={{
          background: "#f8f9fa",
        }}
      >

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src="/banner.jpg"
                className="img-fluid rounded shadow"
              />

            </div>

            <div className="col-lg-6">

              <h2 className="fw-bold mb-4">
                ¿Quiénes somos?
              </h2>

              <p className="lead text-secondary">

                En BookVerse creemos que cada libro
                tiene el poder de transportar al lector
                a un universo diferente.

                Nuestra misión es acercar las mejores
                historias a cada persona mediante una
                experiencia de compra rápida,
                sencilla y moderna.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ESTADISTICAS */}

      <section className="container py-5">

        <div className="row text-center">

          <div className="col-md-3">

            <h1 className="fw-bold text-warning">
              +20
            </h1>

            <p>Libros disponibles</p>

          </div>

          <div className="col-md-3">

            <h1 className="fw-bold text-warning">
              8
            </h1>

            <p>Géneros</p>

          </div>

          <div className="col-md-3">

            <h1 className="fw-bold text-warning">
              100%
            </h1>

            <p>Compra segura</p>

          </div>

          <div className="col-md-3">

            <h1 className="fw-bold text-warning">
              ★★★★★
            </h1>

            <p>Calificación</p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section
        className="text-center py-5"
        style={{
          background: "#212529",
        }}
      >

        <div className="container text-white">

          <h2 className="fw-bold">
            ¿Listo para comenzar una nueva aventura?
          </h2>

          <p className="lead">
            Descubrí los mejores títulos disponibles.
          </p>

          <Link
            to="/catalog"
            className="btn btn-warning btn-lg mt-3"
          >
            Ver Catálogo
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;