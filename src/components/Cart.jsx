import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const initialValues = {
  phone: "",
  email: "",
  name: "",
};
export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, reset, removeItem } = useContext(ItemsContext);
  const handleChange = (ev) => {
    setBuyer((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };
  const total = items.reduce((acc, act) => acc + act.price * act.quantity, 0);
  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("Su orden: " + id + " ha sido completada!");
        }
      })
      .finally(() => {
        reset();
        setBuyer(initialValues);
      });
  };
  if (items.length === 0) return "Sin productos por el momento";
  return (
    <>
      <button onClick={reset} className="botonVaciar">
        Vaciar
      </button>
      {items.map((item) => {
        return (
          <table>
            <div key={item.id}>
              <tr>
                <td>
                  <h1>{item.title}</h1>
                </td>
                <td>
                  <img src={item.pictureUrl} />
                </td>
                <td>
                  <h3>{item.quantity}</h3>
                </td>
                <td>
                  <button onClick={() => removeItem(item.id)}>
                    Quitar producto
                  </button>
                </td>
              </tr>
            </div>
          </table>
        );
      })}
      <section className="totalYCliente">
        <br />
        <div>
          <span>Total ${total}</span>
        </div>
        <br />
        <form>
          <div>
            <label>Nombre</label>
            <input value={buyer.name} name="name" onChange={handleChange} />
          </div>
          <div>
            <label>Teléfono</label>
            <input value={buyer.phone} name="phone" onChange={handleChange} />
          </div>
          <div>
            <label>Email</label>
            <input value={buyer.mail} name="email" onChange={handleChange} />
          </div>
          <button type="button" onClick={sendOrder}>
            Comprar
          </button>
        </form>
      </section>
    </>
  );
};
