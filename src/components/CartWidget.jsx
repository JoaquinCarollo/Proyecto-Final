import cart from "../assets/carritoDeCompras.png";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  const { items } = useContext(ItemsContext);
  const quantity = items.reduce((acc, act) => acc + act.quantity, 0);
  return (
    <Link to="/cart">
      <img src={cart} height={48} />
      {quantity}
    </Link>
  );
};
