import style from "./index.module.scss";
import Card from "../card";

const CardList = ({ data }) => {
  return (
    <div className={style.card_list}>
      {data.map((item, i) => (
        <Card data={item} key={i} />
      ))}
    </div>
  );
};

export default CardList;
