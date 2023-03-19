import { NavLink } from "react-router-dom";
import s from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={s.cardItem}>
      <div className={s.cardsCard}>
        <div className={s.cardImage}>
          <NavLink>
            <img src="#" alt="picture" />
          </NavLink>
        </div>
        <div className="card__content">
          <NavLink>
            <h3 className={s.cardTitle}>{props.title}</h3>
          </NavLink>
          <p className={s.cardPrice}> {props.price}</p>
          <p className={s.cardPlace}> {props.place}</p>
          <p className={s.cardDate}> {props.date}</p>
        </div>
      </div>
    </div>
    
  );
};
export default Card;
