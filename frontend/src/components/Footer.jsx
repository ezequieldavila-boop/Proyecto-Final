function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-5">

      <div className="container">

        <div className="row">

          <div className="col-md-4">
            <h4>📚 BookVerse</h4>
            <p>Tu librería online favorita</p>
          </div>

          <div className="col-md-4">
            <h5>Enlaces</h5>
            <p>Inicio</p>
            <p>Catálogo</p>
            <p>Carrito</p>
          </div>

          <div className="col-md-4">
            <h5>Redes</h5>

            <div className="d-flex gap-3">
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>

          </div>

        </div>

        <hr />

        <p className="text-center">
          © 2026 BookVerse - Proyecto Final
        </p>

      </div>

    </footer>
  );
}

export default Footer;