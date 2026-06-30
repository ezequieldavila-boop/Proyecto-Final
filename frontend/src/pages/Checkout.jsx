import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, book) => acc + Number(book.price),
    0
  );

  const finalizarCompra = () => {

    alert("✅ ¡Compra realizada con éxito!");

    clearCart();

    navigate("/");

  };

  return (

    <div className="container py-5 mt-5">

      <div className="row">

        {/* DATOS */}

        <div className="col-lg-7">

          <div className="card shadow-lg border-0 p-4">

            <h2 className="mb-4">
              Datos del comprador
            </h2>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Nombre
                </label>

                <input
                  className="form-control"
                  placeholder="Ingrese su nombre"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Apellido
                </label>

                <input
                  className="form-control"
                  placeholder="Ingrese su apellido"
                />

              </div>

            </div>

            <div className="mb-3">

              <label className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Dirección
              </label>

              <input
                className="form-control"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Ciudad
              </label>

              <input
                className="form-control"
              />

            </div>

            <div className="mb-4">

              <label className="form-label">
                Método de pago
              </label>

              <select className="form-select">

                <option>
                  Tarjeta de crédito
                </option>

                <option>
                  Tarjeta de débito
                </option>

                <option>
                  Mercado Pago
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* RESUMEN */}

        <div className="col-lg-5">

          <div className="card shadow-lg border-0 p-4">

            <h3 className="mb-4">
              Resumen
            </h3>

            {cart.map((book) => (

              <div
                key={book.id}
                className="d-flex justify-content-between mb-3"
              >

                <span>
                  {book.title}
                </span>

                <strong>
                  ${book.price}
                </strong>

              </div>

            ))}

            <hr />

            <div className="d-flex justify-content-between">

              <h4>Total</h4>

              <h4 className="text-success">
                ${total}
              </h4>

            </div>

            <button
              className="btn btn-warning btn-lg w-100 mt-4"
              onClick={finalizarCompra}
            >

              Confirmar compra

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Checkout;