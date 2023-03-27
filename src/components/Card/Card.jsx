import { NavLink } from "react-router-dom";
import s from "./Card.module.css";

const Card = ({ date }) => {
   function formatTitle(title) {
    let wordCount = title?.split(" ").length;
    let titleWords = title?.split(" ");
    let resultTitle = "";
    for (let i = 0; i < 2; i++) {
      resultTitle += titleWords[i] + " ";
    }

    return wordCount > 3 ? resultTitle : title;
  } 
  return (
    <div className={s.cardItem}>
      <div className={s.cardsCard + " " + s.cards}>
        <div className={s.cardImage}>
          <NavLink>
            <img
              src={
                date?.images?.length
                  ? `http://localhost:8090/${date.images[0].url}`
                  : ""
              }
              alt="photocard"
            />
          </NavLink>
        </div>
        <div className="card__content">
          <NavLink>
            <h3 className={s.cardTitle}> {formatTitle(date?.title)}  </h3>
          </NavLink>
          <p className={s.cardPrice}> {date?.price} ₽</p>
          <p className={s.cardPlace}> {date?.place}</p>
          <p className={s.cardDate}> {date?.date}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
