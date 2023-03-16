import { NavLink } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer__container container">
            <div className="footer__img">
                <NavLink>
                    <img src="img/icon_01.png" alt="home"/>
                </NavLink>
            </div>
            <div className="footer__img">
                <NavLink>
                    <img src="img/icon_02.png" alt="home"/>
                </NavLink>
            </div>
            <div className="footer__img">
                <NavLink>
                    <img src="img/icon_03.png" alt="home"/>
                </NavLink>
            </div>
        </div>
        
    </footer>

    )

}

export default Footer;