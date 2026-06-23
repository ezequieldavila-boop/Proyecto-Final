import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } =
    useContext(CartContext);

  const total = cart.reduce(
    (acc, book) => acc + Number(book.price),
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          No hay libros en el carrito.
        </div>
      ) : (
        <>
          {cart.map((book, index) => (
            <div
              key={index}
              className="card mb-3 shadow-sm"
            >
              <div className="card-body">
                <h5>{book.title}</h5>

                <p>
                  <strong>Autor:</strong> {book.author}
                </p>

                <p>
                  <strong>Precio:</strong> ${book.price}
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="card mt-4">
            <div className="card-body">
              <h3>Total: ${total}</h3>

              <button
                className="btn btn-warning mt-3"
                onClick={clearCart}
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;