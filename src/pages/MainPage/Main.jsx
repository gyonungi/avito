import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import s from "./Main.module.css"

const Main = () => {
  return (
    <>
      <div className={s.mainSearch}>
        <NavLink className={s.searchLogoLink}>
          <img className={s.searchLogoImg} src="img/logo.png" alt="logo" />
        </NavLink>

        <NavLink className={s.searchLogoMobLink}>
          <img className={s.earchLogoImg} src="img/logo-mob.png" alt="logo" />
        </NavLink>

        <form className={s.searchForm} action="#">
          <input
            className={s.searchText}
            type="search"
            placeholder="Поиск по объявлениям"
            name="search"
          />
          <input
            className={s.searchTextMob}
            type="search"
            placeholder="Поиск"
            name="search-mob"
          />
          <button className={s.searchBtn}>Найти</button>
        </form>
      </div>

      <div className={s.mainContainer}>
        <h2 className={s.mainH2}>Объявления</h2>

        <div className={s.mainContent}>
          <div className="content__cards cards">
                <Card title="title" place="place" date={new Date().toLocaleString()} price={100}>
                    
                </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main