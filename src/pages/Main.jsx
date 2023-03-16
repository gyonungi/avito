import { NavLink } from "react-router-dom";
import Card from "../components/Card/Card";

const Main = () => {
  return (
    <div>
      <div className="main__search search">
        <NavLink className="search__logo-link">
          <img className="search__logo-img" src="img/logo.png" alt="logo" />
        </NavLink>

        <NavLink className="search__logo-mob-link">
          <img class="search__logo-mob-img" src="img/logo-mob.png" alt="logo" />
        </NavLink>

        <form className="search__form" action="#">
          <input
            className="search__text"
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <input
            className="search__text-mob"
            type="search"
            placeholder="Поиск"
            name="search-mob"
          />
          <button className="search__btn btn-hov02">Найти</button>
        </form>
      </div>

      <div className="main__container">
        <h2 className="main__h2">Объявления</h2>

        <div className="main__content">
          <div className="content__cards cards">
                <Card title="title" place="place" date={new Date().toLocaleString()} price={100}>
                    
                </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main