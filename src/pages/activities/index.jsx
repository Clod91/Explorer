import style from "../../styles/pages/Activities.module.scss";
import { useState, useEffect } from "react";
import CardList from "../../components/cardList";
import { GET } from "../../utils/http";

export default function Activities() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    GET("").then((data) => setItemList(data)), [];
  });
  const filterList = (list, category) =>
    list.filter((item) => item.category === category);
  return (
    <div className={style.activities}>
      <div className={style.first_list}>
        <h2>Elettronica</h2>
        <CardList data={filterList(itemList, "electronics")} />
      </div>
      <div className={style.second_list}>
        <h2>Gioielleria</h2>
        <CardList data={filterList(itemList, "jewelery")} />
      </div>
    </div>
  );
}
