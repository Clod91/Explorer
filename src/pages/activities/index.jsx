import style from "../../styles/pages/Activities.module.scss";
import { useState, useEffect } from "react";
import CardList from "../../components/cardList";
import { GET } from "../../utils/http";
import { results } from "../../mocks/activities";

export default function Activities() {
  const [itemList, setItemList] = useState([]);

  // useEffect(() => {
  //   GET("activities").then((data) => setItemList(data.results)), [];
  // });
  useEffect(() => {
    setItemList(results), [];
  });
  const filterList = (list, type) =>
    list.filter((item) => item["@type"].includes(type));
  return (
    <div className={style.activities}>
      <div className={style.first_list}>
        <h2>Consigliati</h2>
        <CardList data={filterList(itemList, "Museum")} />
      </div>
      <div className={style.second_list}>
        <h2>Ristoranti</h2>
        <CardList data={filterList(itemList, "Restaurant")} />
      </div>
    </div>
  );
}
