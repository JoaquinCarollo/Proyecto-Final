import { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import carga from "../assets/cargando.gif";
import { useParams, Link } from "react-router-dom";
export const ItemList = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = !id
      ? collection(db, "Items")
      : query(collection(db, "Items"), where("category", "==", id));
    getDocs(itemCollection)
      .then((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return <img src={carga} className="signoDeCarga" />;
  }
  return (
    <section className="listaDeProductos">
      {item.map((i) => (
        <div key={i.id} className="producto">
          <h3>{i.title}</h3>
          <img src={i.pictureUrl} />
          <span>{i.description}</span>

          <Link to={`/item/${i.id}`}>
            <button>Ver Producto</button>
          </Link>
        </div>
      ))}
    </section>
  );
};
