import { Link, NavLink } from "react-router-dom";
import s from "./Footer.module.css"
import home from "../../images/home.png"
import adds from "../../images/adds.png"
import prof from "../../images/profile.png"
const Footer = () => {
    return(
        <footer className={s.footer}>
        <div className={s.footerContainer}>
            <div className={s.footerImg}>
                <Link to="/">
                <img src={home} alt="home"/>
                </Link>
            </div>
            <div className={s.footerImg}>
                <Link to="/createadd">
                <img src={adds} alt="home"/>
                </Link>
            </div>
            <div className={s.footerImg}>
                <Link to="/profile">
                <img src={prof} alt="home"/>
                </Link>
            </div>
        </div>
        
    </footer>

    )

}

export default Footer;