import { Item } from "./Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos.json";
import carga from "../assets/cargando.gif";
import { Link } from "react-router-dom";
export const Item = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(productos), 2000);
    })
      .then((response) => {
        if (!id) {
          setProducts(response);
        } else {
          const filtered = response.filter((i) => i.category === id);
          setProducts(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return <img src={carga} className="signoDeCarga" />;
  }
  return (
    <section className="listaDeProductos">
      {products.map((i) => (
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
