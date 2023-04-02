import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAddsId } from "../../asyncAction/adsdescrip";
import s from "./Descrip.module.css";

const Description = () => {
   const [addList,setAdd] = useState({})
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAddsId(Number(params.id),cb => setAdd({...cb})));
  }, []);

console.log(addList);
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.mainMenu}>
          <NavLink className={s.menuLogoLink}>
            <img className={s.menuLogoImg} src="img/logo.png" alt="logo" />
          </NavLink>

          <form className={s.menuForm} action="#">
            <button className={s.menuBtnSerch} id="btnGoBack">
              Вернуться на главную
            </button>
          </form>
        </div>
      </div>
      <div className={s.mainArtic}>
        <div className={s.articContent}>
          <div className={s.articleLeft}>
            <div className={s.articleFillImg}>
              <div className={s.articleImg}>
                <img src={
                addList.images
                  ? `http://localhost:8090/${addList.images[0].url}`
                  : ""
              } alt="" />
              </div>
              <div className={s.articleImgBar}>
                <div className={s.articleImgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={s.articleImgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={s.articleImgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={s.articleImgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={s.articleImgBarDiv}>
                  <img src="" alt="" />
                </div>
                <div className={s.articleImgBarDiv}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={s.articleImgBarMob}>
                <div className={s.imgBarMobCircle}></div>
                <div className={s.imgBarMobCircle}></div>
                <div className={s.imgBarMobCircle}></div>
                <div className={s.imgBarMobCircle}></div>
                <div className={s.imgBarMobCircle}></div>
              </div>
            </div>
          </div>

          {addList && (
            <div className={s.articleRight}>
              <div className={s.articleBlock}>
                <h3 className={s.articleTitle}> {addList.title} </h3>
                <div className={s.articleInfo}>
                  <p className={s.articleDate}>Сегодня в 10:45</p>
                  <p className={s.articleCity}>Санкт-Петербург</p>
                  <NavLink className={s.articleLink}> 23 отзыва </NavLink>
                </div>
                <p className={s.articlePrice}>{addList.price}</p>
                <button className={s.articleBtn}>
                  Показать&nbsp;телефон
                  <span></span>
                </button>
                <div className={s.articleAuthor}>
                  <div className={s.authorImg}>
                    <img src="" alt="" />
                  </div>
                  <div className={s.authorCont}>
                    <p className={s.authorName}></p>
                    <p className={s.authorAbout}>
                      Продает товары с августа 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={s.mainContainer}>
        <h3 className={s.mainTitle}>Описание товара</h3>
        {addList && (
          <div className={s.mainContent}>
            <p className={s.mainText}>
            {addList.description}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Description;
