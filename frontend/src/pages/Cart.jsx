import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } =
    useContext(CartContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const total = cart.reduce(
    (acc, book) => acc + Number(book.price),
    0
  );

  return (
    <div
      className="container"
      style={{
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <h1 className="mb-4">🛒 Carrito de Compras</h1>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          Tu carrito está vacío.
        </div>
      ) : (
        <>
          {cart.map((book, index) => (
            <div
              key={index}
              className="card shadow-sm mb-3"
            >
              <div className="card-body d-flex justify-content-between align-items-center">

                <div>

                  <h5>{book.title}</h5>

                  <p className="mb-1">
                    <strong>Autor:</strong> {book.author}
                  </p>

                  <p className="mb-0">
                    <strong>Precio:</strong> ${book.price}
                  </p>

                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Eliminar
                </button>

              </div>
            </div>
          ))}

          <div className="card shadow mt-4">

            <div className="card-body">

              <h3 className="mb-3">
                Total: ${total}
              </h3>

              <div className="d-flex gap-3">

                <button
                  className="btn btn-outline-danger"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>

                {token ? (

                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/checkout")}
                  >
                    Finalizar compra
                  </button>

                ) : (

                  <button
                    className="btn btn-warning"
                    onClick={() => navigate("/login")}
                  >
                    Iniciar sesión para comprar
                  </button>

                )}

              </div>

            </div>

          </div>

        </>
      )}
    </div>
  );
}

export default Cart;