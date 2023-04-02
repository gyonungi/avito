import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openModal } from "../../../store/reducers/add";
import s from "./NavBar.module.css"

const NavBar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/auth/log");
  }
  const { isAuth } = useSelector((state) => state.auth);
  const dispath = useDispatch();
  
  return (
    <nav className={s.headerNav}>
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
