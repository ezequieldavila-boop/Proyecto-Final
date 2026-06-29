import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">

      <h1 className="mb-4">🛒 Carrito de Compras</h1>

      {cart.length === 0 ? (

        <div className="alert alert-info">
          Tu carrito está vacío.
        </div>

      ) : (
        <>

          {cart.map((item) => (

            <div
              key={item.id}
              className="card shadow mb-4"
            >

              <div className="row g-0">

                <div className="col-md-2">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid rounded-start"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                </div>

                <div className="col-md-10">

                  <div className="card-body">

                    <h3>{item.title}</h3>

                    <p>
                      <strong>Autor:</strong> {item.author}
                    </p>

                    <p>
                      <strong>Precio:</strong> ${item.price}
                    </p>

                    <div className="d-flex align-items-center my-3">

                      <button
                        className="btn btn-outline-danger"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>

                      <h4 className="mx-4">
                        {item.quantity}
                      </h4>

                      <button
                        className="btn btn-outline-success"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>

                    </div>

                    <h5>
                      Subtotal: $
                      {item.price * item.quantity}
                    </h5>

                    <button
                      className="btn btn-danger mt-3"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑 Eliminar
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

          <div className="card shadow-lg">

            <div className="card-body">

              <h2 className="mb-4">
                Total: ${total}
              </h2>

              <button
                className="btn btn-warning me-3"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>

              <button
                className="btn btn-success"
                onClick={() => navigate("/checkout")}
              >
                Finalizar compra
              </button>

            </div>

          </div>

        </>
      )}

    </div>
  );
}

export default Cart;