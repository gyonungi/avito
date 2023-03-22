import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAdds } from "../../asyncAction/add";
import Card from "../../components/Card/Card";
import s from "./Main.module.css";

const Main = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdds());
  }, []);
  const { addList } = useSelector((state) => state.adds);
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
          <div className={s.cards}>
          
            { addList.length ? (
              addList.map((item) => <Card key={item.id} date={item} />)
            ) : (
              <p>Объявлений нет</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
