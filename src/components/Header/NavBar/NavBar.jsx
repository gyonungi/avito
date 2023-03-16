import s from "./NavBar.module.css"
const NavBar = () => {
    return ( 
    <nav className={s.headerNav} >
         <button className="header__btn-main-enter btn-hov01" id="btnMainEnter">
          Вход в личный кабинет
        </button>
    </nav> 
    );
}
 
export default NavBar;