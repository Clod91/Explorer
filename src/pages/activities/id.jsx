import style from "./id.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";

export default function Activity() {
  const { id } = useParams();
  const [activity, setactivity] = useState({});

  useEffect(() => {
    GET(`/${id || 1}`).then((data) => setactivity(data));
  });
  return (
    <div className={style.activity}>
      {activity.title ? (
        <>
          <img src={activity.image} alt={activity.title} />
          <div className={style.text}>
            <h1>{activity.title}</h1>
            <p>{activity.description}</p>
            <p>{activity.price}€</p>
            <p>Categoria: {activity.category}</p>
          </div>
        </>
      ) : (
        <h3>Il prodotto cercato non è disponibile....</h3>
      )}
    </div>
  );
}
