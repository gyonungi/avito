import s from "./NavBar.module.css"
const NavBar = () => {
    return ( 
    <nav className={s.headerNav} >
         <button className={s.headerBtnMainEnter} id="btnMainEnter">
          Вход в личный кабинет
        </button>
    </nav> 
    );
}
 
export default NavBar;