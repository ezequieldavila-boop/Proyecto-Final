function Home() {
  return (
    <>
      <div className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold">
            📚 BookVerse
          </h1>

          <p className="lead mt-3">
            Donde cada libro abre un nuevo universo.
          </p>

          <a
            href="/catalog"
            className="btn btn-warning btn-lg mt-3"
          >
            Explorar Catálogo
          </a>
        </div>
      </div>

      <div className="container my-5">
        <div className="row text-center">

          <div className="col-md-4">
            <h3>📖 Más de 20 libros</h3>
            <p>
              Fantasía, terror, romance,
              ciencia ficción y mucho más.
            </p>
          </div>

          <div className="col-md-4">
            <h3>🚚 Compra fácil</h3>
            <p>
              Navegá nuestro catálogo y armá tu carrito.
            </p>
          </div>

          <div className="col-md-4">
            <h3>⭐ Calidad garantizada</h3>
            <p>
              Los mejores títulos para todos los lectores.
            </p>
          </div>

        </div>
      </div>

      <div className="container my-5">
        <div className="card shadow-lg border-0">
          <div className="card-body text-center p-5">
            <h2>¿Quiénes somos?</h2>

            <p className="mt-3">
              BookVerse es una librería online creada para
              conectar lectores con historias inolvidables.
              Nuestro objetivo es hacer que descubrir
              nuevos libros sea una experiencia simple,
              cómoda y emocionante.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;