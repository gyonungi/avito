import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAdds } from "../../asyncAction/add";
import Card from "../../components/Card/Card";
import s from "./Main.module.css";
import Logo from "../../images/Logo.png"
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdds());
  }, []);
  const { addList } = useSelector((state) => state.adds);

const [filterText, setFilterText] = useState("");
const filteredItems = addList.filter(
(item) =>
  item.title?.toLocaleLowerCase().includes(filterText)
);

const itemsToDisplay = filterText ? filteredItems : addList;
  return (
    <>
      <div className={s.mainSearch}>
        <NavLink className={s.searchLogoLink}>
          <img className={s.searchLogoImg} src="../../images/Logo.png" alt="logo" />
        </NavLink>

        <NavLink className={s.searchLogoMobLink}>
          <img className={s.searchLogoImg} src={Logo} alt="logo" />
        </NavLink> 
    <img className={s.searchLogoImg} src={Logo} alt="logo" />
        <form className={s.searchForm} action="#">
        <input
          className={s.searchText}
          type="search"
          placeholder="Поиск по объявлениям"
          
          name="search"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value.toLocaleLowerCase())}
        />
        {/* < class="searchTextMob" type="search" placeholder="Поиск" name="search-mob"/> */}
        <button className={s.searchBtn}>Найти</button>
        </form>
      </div>

      <div className={s.mainContainer}>
        
     
      <h2 className={s.mainH2}>Объявления</h2>

      <div className={s.mainContent}>
        <div className={s.cards}>
          {addList.length ? (
            itemsToDisplay.map((item) => <Card key={item.id} date={item} />)
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
