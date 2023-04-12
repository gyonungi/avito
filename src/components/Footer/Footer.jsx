import { NavLink } from "react-router-dom";
import s from "./Footer.module.css"

const Footer = () => {
    return(
        <footer className={s.footer}>
        <div className="footer__container container">
            <div className={s.footerImg}>
                <NavLink>
                   
                </NavLink>
            </div>
            <div className={s.footerImg}>
                <NavLink>
                   
                </NavLink>
            </div>
            <div className={s.footerImg}>
                <NavLink>
               
                </NavLink>
            </div>
        </div>
        
    </footer>

    )

}

export default Footer;