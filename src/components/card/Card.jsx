import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate(`/activity?name=${data.name}`);
  };

  return (
    <div className={style.card} onClick={onHandleClick}>
      <img
        src="https://streetviewhub.com/shots/400?q=ireland"
        alt="item image"
      />
      <div className={style.text}>
        <h3>{data.name}</h3>
        <p>Phone:{data.telephone}</p>
      </div>
    </div>
  );
};

export default Card;
