import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import s from "./Card.module.css";

const Card = ({date}) => {
  return (
    <div className={s.cardItem}>
      <div className={s.cardsCard + "" + s.cards}>
        <div className={s.cardImage}>
          <NavLink>
            <img src={date.images.length ? `http://localhost:8090/${date.images[0].url}` : ""} alt="picture" />
          </NavLink>
        </div>
        <div className="card__content">
          <NavLink>
            <h3 className={s.cardTitle}>{date.title}</h3>
          </NavLink>
          <p className={s.cardPrice}> {date.price}</p>
          <p className={s.cardPlace}> {date.place}</p>
          <p className={s.cardDate}> {date.date}</p>
        </div>
      </div>
   
    </div>
   
  );
};
export default Card;
