import style from "./id.module.scss";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GET } from "../../utils/http";
import { results } from "../../mocks/activities";

export default function Activity() {
  const [searchParams] = useSearchParams();

  const [activityList, setActivityList] = useState({});

  useEffect(() => {
    setActivityList(() =>
      results.filter((item) => item.name === searchParams.get("name"))
    );
  }, []);

  return (
    <div className={style.activity}>
      {searchParams.get("name") && (
        <h1>hai cercato {searchParams.get("name")}</h1>
      )}
      {activityList.name ? (
        <>
          <iframe
            width="600"
            height="450"
            src={`https://maps.google.com/maps/?q=+${activityList[0].geo.latitude}+,+${activityList[0].geo.longitude}&output=embed`}
          ></iframe>
          <div className={style.text}>
            <h1>{activityList[0].name}</h1>

            <p>{activityList[0].telephone}</p>
          </div>
        </>
      ) : (
        <h3>La destinazione cercata non è disponibile</h3>
      )}
    </div>
  );
}
