import style from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const onHandleInputChange = (e) => setInputValue(() => e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`activities?$filter=name%20eq%20%27${inputValue}%27`);
  };
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
      <form onSubmit={onHandleSubmit}>
        <input
          className={style.input}
          type="text"
          value={inputValue}
          onChange={onHandleInputChange}
          placeholder="search"
          required
        />
      </form>
    </div>
  );
};

export default Header;
