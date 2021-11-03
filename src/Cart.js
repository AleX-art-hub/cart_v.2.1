import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Корзина пуста</h1>;

  return (
    <selection className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Корзина ({totalUniqueItems}) Всего пунктов: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6em" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Количество ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn ms-2 border-info"
                        onClick={() => removeItem(item.id)}
                      >
                        Удалить
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Общая цена: {cartTotal} $</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Очистить корзину
          </button>
          <button className="btn btn-primary">Купить сейчас</button>
        </div>
      </div>
    </selection>
  );
};
export default Cart;
