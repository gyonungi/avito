import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openModal } from "../../../store/reducers/add";
import s from "./NavBar.module.css"
import Logo from "../../../images/logomobs.png"
const NavBar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/auth/log");
  }
  const { isAuth } = useSelector((state) => state.auth);
  const dispath = useDispatch();
  
  return (
    <nav className={s.headerNav}>
       <div className={s.LogoMob}>
                        <Link to="/" className={s.LogoMoblink} href="" target="_blank">
                            <img className={s.LogoMobImg} src={Logo} alt="logo"/>
                        </Link>
                    </div>
      {isAuth ? (
        <>
          <button onClick={()=> dispath(openModal())} className={s.headerBtnPutAd} id="btputAd">
            Разместить объявление
          </button>
          <Link to="/profile">
            <button className={s.headerBtnLk} id="btnlk">
              Личный кабинет
            </button>
          </Link>{" "}
        </>
      ) : (
        <button
          className={s.headerBtnMainEnter}
          onClick={handleClick}
          id="btnMainEnter"
        >
          Вход в личный кабинет
        </button>
      )}
    </nav>
  );
};

export default NavBar;
