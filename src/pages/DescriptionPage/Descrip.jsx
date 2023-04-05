import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteAddsId, editAddsId, getAddsId } from "../../asyncAction/addsdescrip";
import s from "./Descrip.module.css";
import Logo from "../../images/Logo.png";
const Description = () => {
  const [addList, setAdd] = useState({});
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddsId(Number(params.id), (cb) => setAdd({ ...cb })));
  }, []);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const token = document.cookie.split("=")[1];
  const { refresh_token } = JSON.parse(token);
  function handleDell() {
    dispatch(deleteAddsId(Number(params.id), refresh_token));
    navigate("/")
  }
  function handleEdit(){
    dispatch(editAddsId(Number(params.id),refresh_token));
    navigate(`/edit/${addList.id}`)
  }
  console.log(addList);
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.mainMenu}>
          <NavLink className={s.menuLogoLink}>
            <img className={s.menuLogoImg} src={Logo} alt="logo" />
          </NavLink>

          <form className={s.menuForm} action="#">
            <button
              onClick={handleClick}
              className={s.menuBtnSerch}
              id="btnGoBack"
            >
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
                <img
                  src={
                    addList.images?.length
                      ? `http://localhost:8090/${addList.images[0].url}`
                      : ""
                  }
                  alt=""
                />
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
                  <Link to={`/rev/${addList.id}`} className={s.articleLink}>
                    {" "}
                    23 отзыва{" "}
                  </Link>
                </div>
                <p className={s.articlePrice}>{addList.price} ₽</p>
                {addList.user_id === user?.id ? (
                  <div className={s.btnBlock}>
                    {" "}
                    <button onClick={handleEdit} className={s.articleBtnReg}>Редактировать</button>
                    <button onClick={handleDell} className={s.articleBtn}>
                      Снять с публикации
                    </button>{" "}
                  </div>
                ) : (
                  <button className={s.articleBtn}>
                    Показать&nbsp;телефон
                    <span>{addList.user?.phone}</span>
                  </button>
                )}
                <div className={s.articleAuthor}>
                  <div className={s.authorImg}>
                    <img
                      src={`http://localhost:8090/${addList.user?.avatar}`}
                      
                      alt=""
                    />
                  </div>
                  <div className={s.authorCont}>
                    <p className={s.authorName}>{addList.user?.name}</p>
                    <p className={s.authorAbout}>
                      Продает товары c августа 2021
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
            <p className={s.mainText}>{addList.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Description;
