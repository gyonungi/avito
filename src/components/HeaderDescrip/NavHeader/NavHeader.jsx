import { NavLink } from "react-router-dom";

const NavHeader = () => {
    return ( 
        <nav className="header__nav">
        <div className="header__logo logo-mob">
            <NavLink className="logo-mob__link">
            <img className="logo-mob__img" src="img/logo-mob.png" alt="logo"/>
            </NavLink>
        </div>
        <button className="header__btn-putAd btn-hov01" id="btputAd">Разместить объявление</button>
        <button className="header__btn-lk btn-hov01" id="btnlk">Личный кабинет</button>
    </nav>
     );
}
 
export default NavHeader;