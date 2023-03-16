import { NavLink } from "react-router-dom";

const Card = (props) =>{
    return(
        <div className="cards__item">
        <div className="cards__card card">
          <div className="card__image">
            <NavLink>
              <img src="#" alt="picture" />
            </NavLink>
          </div>
          <div className="card__content">
            <NavLink>
              <h3 className="card__title">
                {props.title}
              </h3>
            </NavLink>
            <p className="card__price">    {props.price}</p>
            <p className="card__place">    {props.place}</p>
            <p className="card__date">    {props.date}</p>
          </div>
        </div>
      </div>
    )
}
export default Card;