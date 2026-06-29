import { Link } from "react-router-dom";

function Home() {
  return (
    <>

      {/* Banner */}

      <div
        style={{
          backgroundImage: "url('/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
        }}
      >

        <div
          style={{
            background: "rgba(0,0,0,.55)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >

          <div className="container text-white">

            <h1
              className="display-2 fw-bold"
            >
              Bienvenido a BookVerse
            </h1>

            <p
              className="lead fs-3 mt-3"
            >
              Donde cada libro abre un nuevo universo.
            </p>

            <Link
              to="/catalog"
              className="btn btn-warning btn-lg mt-4"
            >
              Explorar Catálogo
            </Link>

          </div>

        </div>

      </div>

      {/* Beneficios */}

      <section className="container my-5">

        <h2 className="text-center mb-5">
          ¿Por qué elegir BookVerse?
        </h2>

        <div className="row text-center">

          <div className="col-md-4">

            <div className="card shadow border-0 p-4 h-100">

              <h1>📚</h1>

              <h4>Más de 20 libros</h4>

              <p>
                Fantasía, romance, terror,
                aventura y ciencia ficción.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow border-0 p-4 h-100">

              <h1>🚚</h1>

              <h4>Envíos rápidos</h4>

              <p>
                Comprá desde tu casa y recibí
                tus libros de forma segura.
              </p>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow border-0 p-4 h-100">

              <h1>💳</h1>

              <h4>Pagos seguros</h4>

              <p>
                Diferentes medios de pago
                para una compra confiable.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Destacados */}

      <section className="container my-5">

        <h2 className="text-center mb-5">
          ⭐ Libros destacados
        </h2>

        <div className="row">

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="/hobbit.jpg"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">

                <h4>El Hobbit</h4>

                <p>J.R.R. Tolkien</p>

                <Link
                  className="btn btn-warning"
                  to="/catalog"
                >
                  Ver catálogo
                </Link>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="/harrypotter.jpg"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">

                <h4>Harry Potter</h4>

                <p>J.K. Rowling</p>

                <Link
                  className="btn btn-warning"
                  to="/catalog"
                >
                  Ver catálogo
                </Link>

              </div>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow">

              <img
                src="/dune.jpg"
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body text-center">

                <h4>Dune</h4>

                <p>Frank Herbert</p>

                <Link
                  className="btn btn-warning"
                  to="/catalog"
                >
                  Ver catálogo
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Nosotros */}

      <section className="container my-5">

        <div className="card shadow-lg border-0">

          <div className="card-body p-5 text-center">

            <h2>Sobre BookVerse</h2>

            <p className="mt-4 fs-5">

              BookVerse es una librería online creada
              para acercar las mejores historias a cada
              lector. Nuestro objetivo es ofrecer una
              experiencia de compra simple, rápida y
              segura para que descubrir nuevos libros
              sea tan emocionante como leerlos.

            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;