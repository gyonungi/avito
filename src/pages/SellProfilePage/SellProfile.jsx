import { NavLink, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import s from "./sellProfile.module.css";
import Logo from "../../images/Logo.png";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserAdds } from "../../asyncAction/add";
const SellProfile = () => {
  const [addList, setAdd] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const objectToArray = (data) => {
    return Object.keys(data).map((key) => {
      return {
        id: key,
        ...data[key],
      };
    });
  };
  useEffect(() => {
    dispatch(getUserAdds(Number(params.id), (cb) => setAdd({ ...cb })));
  }, []);

  const adds = objectToArray(addList);
  const user = adds[0].user;
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.mainCenterBlock}>
          <div className={s.mainMenu}>
            <NavLink className={s.menuLogoLink}>
              <img className={s.menuLogoImg} src={Logo} alt="logo" />
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
                      <img
                        src={
                          !user?.avatar
                            ? ""
                            : `http://localhost:8090/${user?.avatar}`
                        }
                        alt=""
                      />
                    </NavLink>
                  </div>
                </div>
                <div className={s.sellerRight}>
                  <h3 className={s.sellerTitle}>
                    {user?.name} {user?.surname}
                  </h3>
                  <p className={s.sellerInf}>{user?.city}</p>
                  <p className={s.sellerCity}>{user?.sells_from}</p>

                  {/*    <div className={s.sellerImgMobBlock}>
                    <div className={s.sellerImgMob}>
                      <NavLink target="_self">
                        <img src="#" alt="" />
                      </NavLink>
                    </div>
                  </div> */}

                  <button className={s.sellerBtn}>
                    Показать&nbsp;телефон
                    <span> {user?.phone}</span>
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
              {adds.length ? (
                adds.map((item) => <Card key={item.id} date={item} />)
              ) : (
                <p>Товаров нет</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellProfile;
