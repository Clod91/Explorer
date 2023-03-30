import style from "./id.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import { results } from "../../mocks/activities";

export default function Activity() {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const filterList = (list, type) =>
    list.filter((item) => item.name.includes(type));

  useEffect(() => {
    // GET(`activities?$filter=name%20eq%20%27${id}`).then((data) =>
    setActivity(filterList(results, id));
  }, []);
  return (
    <div className={style.activity}>
      {activity.name ? (
        <>
          <iframe
            width="600"
            height="450"
            src={`https://maps.google.com/maps/?q=+${activity.geo.latitude}+,+${activity.geo.longitude}&output=embed`}
          ></iframe>
          <div className={style.text}>
            <h1>{activity.name}</h1>

            <p>{activity.telephone}</p>
          </div>
        </>
      ) : (
        <h3>La destinazione cercata non è disponibile</h3>
      )}
    </div>
  );
}
