import { Link, NavLink } from "react-router-dom";
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
                  ? `http://localhost:8090/${date?.images[0].url}`
                  : ""
              }
              alt="photocard"
            />
          </NavLink>
        </div>
        <div className="card__content">
          <Link to={`/ads/${date?.id}`}>
            <h3 className={s.cardTitle}>{ formatTitle (date?.title)}</h3>
          </Link>
          <p className={s.cardPrice}> {date?.price} ₽</p>
          <p className={s.cardPlace}> {date?.user?.city}</p>
          <p className={s.cardDate}> {date?.created_on?.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
