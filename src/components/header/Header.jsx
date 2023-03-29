import style from "./index.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <ul className={style.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About Us</Link>
        </li>
        <li>
          <Link to="activities">Activities</Link>
        </li>
      </ul>
      <img
        className={style.logo}
        src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/256/external-Explorer-world-tourism-day-smashingstocks-circular-smashing-stocks.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
