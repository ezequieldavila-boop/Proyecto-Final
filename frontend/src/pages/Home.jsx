import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="bg-primary text-white text-center py-5">

        <div className="container">

          <h1 className="display-2 fw-bold">
            📚 BookVerse
          </h1>

          <p className="lead mt-4">
            Un universo de historias en cada página
          </p>

          <p>
            Fantasía, romance, ciencia ficción y mucho más.
          </p>

          <Link
            to="/catalog"
            className="btn btn-warning btn-lg mt-3"
          >
            Explorar catálogo
          </Link>

        </div>

      </section>

      <section className="container py-5">

        <div className="row text-center">

          <div className="col-md-4">
            <h3>📚 +500 Libros</h3>
            <p>Gran variedad de títulos.</p>
          </div>

          <div className="col-md-4">
            <h3>🚚 Envíos</h3>
            <p>Entrega rápida.</p>
          </div>

          <div className="col-md-4">
            <h3>⭐ Calidad</h3>
            <p>Autores reconocidos.</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;