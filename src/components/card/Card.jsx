import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate(`/activities/${data.id}`);
  };

  return (
    <div className={style.card} onClick={onHandleClick}>
      <img src={data.image} alt="item image" />
      <div className={style.text}>
        <h3>{data.title.split(" ").splice(0, 4).join(" ")}</h3>
        <p>{data.price}€</p>
      </div>
    </div>
  );
};

export default Card;
