import { useNavigate } from "react-router-dom";
import s from "./NavBar.module.css"
const NavBar = () => {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/auth/log")
    }
    return ( 
    <nav className={s.headerNav} >
         <button className={s.headerBtnMainEnter} onClick={handleClick} id="btnMainEnter">
          Вход в личный кабинет
        </button>
    </nav> 
    );
}
 
export default NavBar;