import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)), url('/banner.jpg')",
        }}
      >
        <div className="container hero-content">

          <span className="badge bg-warning text-dark mb-3 p-2">
            📚 Bienvenido a BookVerse
          </span>

          <h1>Descubrí tu próxima gran historia</h1>

          <p>
            Miles de lectores ya encontraron su libro favorito.
            Ahora te toca a vos.
          </p>

          <Link
            to="/catalog"
            className="btn btn-warning btn-lg mt-3"
          >
            Explorar catálogo
          </Link>

        </div>
      </section>

      {/* CARRUSEL */}

      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          🔥 Libros Destacados
        </h2>

        <div
          id="carouselBooks"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          <div className="carousel-inner rounded-4 shadow">

            <div className="carousel-item active">

              <img
                src="/banner1.jpg"
                className="d-block w-100"
                style={{
                  height: "500px",
                  objectFit: "cover",
                }}
              />

              <div className="carousel-caption">

                <h2>Harry Potter</h2>

                <p>
                  Viví la magia de Hogwarts.
                </p>

              </div>

            </div>

            <div className="carousel-item">

              <img
                src="/banner2.jpg"
                className="d-block w-100"
                style={{
                  height: "500px",
                  objectFit: "cover",
                }}
              />

              <div className="carousel-caption">

                <h2>El Señor de los Anillos</h2>

                <p>
                  Una aventura épica.
                </p>

              </div>

            </div>

            <div className="carousel-item">

              <img
                src="/banner3.jpg"
                className="d-block w-100"
                style={{
                  height: "500px",
                  objectFit: "cover",
                }}
              />

              <div className="carousel-caption">

                <h2>Dune</h2>

                <p>
                  Ciencia ficción en su máxima expresión.
                </p>

              </div>

            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselBooks"
            data-bs-slide="prev"
          >

            <span className="carousel-control-prev-icon"></span>

          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselBooks"
            data-bs-slide="next"
          >

            <span className="carousel-control-next-icon"></span>

          </button>

        </div>

      </section>

      {/* BENEFICIOS */}

      <section className="container py-5">

        <div className="row">

          <div className="col-md-4">

            <div className="feature-card">

              <h1>📖</h1>

              <h4>Más de 20 libros</h4>

              <p>
                Fantasía, romance, terror,
                ciencia ficción y mucho más.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="feature-card">

              <h1>🚚</h1>

              <h4>Compra rápida</h4>

              <p>
                Armá tu carrito en segundos.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="feature-card">

              <h1>⭐</h1>

              <h4>Calidad garantizada</h4>

              <p>
                Libros seleccionados para todos
                los gustos.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;