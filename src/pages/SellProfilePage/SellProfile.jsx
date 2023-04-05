import { NavLink, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import s from "./sellProfile.module.css";
import { useDispatch } from "react-redux";
const SellProfile = () => {
  const params = useParams();
  const dispatch = useDispatch()
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.mainCenterBlock}>
          <div className={s.mainMenu}>
            <NavLink className={s.menuLogoLink}>
              <img className={s.menuLogoImg} src="img/logo.png" alt="logo" />
            </NavLink>
            <form className={s.menuForm} action="#">
              <button className={s.menuBtn} id="btnGoBack">
                Вернуться на&nbsp;главную
              </button>
            </form>
          </div>
          <h2 className={s.mainH2}>Профиль продавца</h2>

          <div className={s.mainProfileSell}>
            <div className={s.profileSellContent}>
              <div className={s.profileSellSeller}>
                <div className={s.sellerLeft}>
                  <div className={s.sellerImg}>
                    <NavLink target="_self">
                      <img src="#" alt="" />
                    </NavLink>
                  </div>
                </div>
                <div className={s.sellerRight}>
                  <h3 className={s.sellerTitle}>Кирилл Матвеев</h3>
                  <p className={s.sellerInf}>Санкт-Петербург</p>
                  <p className={s.sellerCity}>Продает товары с августа 2021</p>

                  <div className={s.sellerImgMobBlock}>
                    <div className={s.sellerImgMob}>
                      <NavLink target="_self">
                        <img src="#" alt="" />
                      </NavLink>
                    </div>
                  </div>

                  <button className={s.sellerBtn}>
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <h3 className={s.mainTitle}>Товары продавца</h3>
        </div>
        <div className={s.mainContent}>
          <div className="content__cards cards">
            <div className={s.cardsItem}>
               <Card/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellProfile;
