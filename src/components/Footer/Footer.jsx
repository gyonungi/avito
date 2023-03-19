import { NavLink } from "react-router-dom";
import s from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={s.footer}>
        <div className="footer__container container">
            <div className={s.footerImg}>
                <NavLink>
                    <img  src="img/icon_01.png" alt="home"/>
                </NavLink>
            </div>
            <div className={s.footerImg}>
                <NavLink>
                    <img  src="img/icon_02.png" alt="home"/>
                </NavLink>
            </div>
            <div className={s.footerImg}>
                <NavLink>
                    <img  src="img/icon_03.png" alt="home"/>
                </NavLink>
            </div>
        </div>
        
    </footer>

    )

}

export default Footer;