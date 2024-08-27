import { useEffect, useState, useContext } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { ItemsContext } from "../context/ItemsContext";
import carga from "../assets/cargando.gif";
export const ItemDetail = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(ItemsContext);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "Items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItem({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);
  const onAdd = (quantity) => {
    addItem({ ...item, quantity });
  };
  if (loading) {
    return <img src={carga} className="signoDeCarga" />;
  }
  return (
    <div className="descripcionDelProducto">
      <h1>{item.title}</h1>
      <h2>{item.category}</h2>
      <img src={item.pictureUrl} />
      <h5>{item.description}</h5>
      <h4>$ {item.price}</h4>
      <b>{item.stock}</b>
      <ItemCount stock={item.stock} onAdd={onAdd} />
    </div>
  );
};
