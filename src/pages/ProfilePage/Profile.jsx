import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import s from "./Profile.module.css"
const Profile = () => {
    return ( 
        <>
          <div className={s.mainContainer}>
                    <div className={s.mainCenterBlock}>
                        <div className={s.mainMenu}>                   
                                <NavLink className={s.menuLogoLink}>
                                <img className={s.menuLogoImg} src="img/logo.png" alt="logo"/>
                                </NavLink>
                            <form className={s.menuForm} action="#">
                                <button className={s.menuBtn} id="btnGoBack">Вернуться на&nbsp;главную</button>
                            </form>
                        
                        </div>
                        
                        <h2 className={s.mainH2}>Здравствуйте, Антон!</h2>
                        
                        <div className={s.mainProfile}>
                            <div className={s.profileContent}>
                                <h3 className={s.profileTitle}>Настройки профиля</h3>
                                <div className={s.profileSettings}>
                                    <div className={s.settingsLeft}>
                                        <div className={s.settingsImg}>
                                            <NavLink target="_self">
                                                <img src="#" alt=""/>
                                            </NavLink>
                        
                                        </div>
                                        <NavLink className={s.settingsChangePhoto}  target="_self">
                                            Заменить
                                        </NavLink>
                                    </div>
                                    <div className={s.settingsRight}>
                                        <form className={s.settingsForm} action="#">
                                            <div className={s.settingsDiv}>
                                                <label for="fname">Имя</label>
                                                <input className={s.settingsFName} id="settings-fname" name="fname" type="text" value="Ан" placeholder=""/>
                                            </div>
                        
                                            <div className={s.settingsDiv}>
                                                <label for="lname">Фамилия</label>
                                                <input className={s.settingsLName} id="settings-lname" name="lname" type="text" value="Городецкий" placeholder=""/>
                                            </div>
                        
                                            <div className={s.settingsDiv}>
                                                <label for="city">Город</label>
                                                <input className={s.settingsCity} id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder=""/>
                                            </div>
                        
                                            <div className={s.settingsDiv}>
                                                <label for="phone">Телефон</label>
                                                <input className={s.settingsPhone} id="settings-phone" name="phone" type="tel" value="89161234567" placeholder="+79161234567"/>
                                            </div>
                        
                                            <button className={s.settingsBtn} id="settings-btn">Сохранить</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h3 className={s.mainTitle}>
                            Мои товары
                        </h3>
                    </div>
                    <div className={s.mainContent}>
                        
                        <div className={s.cardsItem}>                            

                           <Card/>

                           

                        </div>                        
                    </div>
                    
                </div>
        </>
     );
}
 
export default Profile;