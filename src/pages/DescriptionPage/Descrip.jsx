import { NavLink } from "react-router-dom";
import s from "./Descrip.module.css"

const Description = () => {
    return ( 
        <>

          <div className={s.mainContainer}>
                    <div className={s.mainMenu}>
                        <NavLink className={s.menuLogoLink}>
                        <img className={s.menuLogoImg} src="img/logo.png" alt="logo"/>
                        </NavLink>

                        <form className={s.menuForm} action="#">                            
                            <button className={s.menuBtnSerch}  id="btnGoBack">Вернуться на главную</button>
                        </form>                    
                    </div>                    
                </div>
                <div className={s.mainArtic}>
                        <div className={s.articContent}>                           
                            <div className={s.articleLeft}>
                                <div className={s.articleFillImg} >
                                    <div className={s.articleImg}>                                        
                                            <img src="" alt=""/>                                        
                                    </div>                                    
                                    <div className={s.articleImgBar}>
                                        <div className={s.articleImgBarDiv}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={s.articleImgBarDiv}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={s.articleImgBarDiv}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={s.articleImgBarDiv}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={s.articleImgBarDiv}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={s.articleImgBarDiv}>
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                    <div className={s.articleImgBarMob}>
                                        <div className={s.imgBarMobCircle}></div>
                                        <div className={s.imgBarMobCircle}></div>
                                        <div className={s.imgBarMobCircle}></div>
                                        <div className={s.imgBarMobCircle}></div>
                                        <div className={s.imgBarMobCircle}></div>
                                    </div>
                                </div>                                
                            </div>
                            <div className={s.articleRight}>
                                <div className={s.articleBlock}>
                                    <h3 className={s.articleTitle}>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
                                    <div className={s.articleInfo}>
                                        <p className={s.articleDate}>Сегодня в 10:45</p>
                                        <p className={s.articleCity}>Санкт-Петербург</p>
                                        <NavLink className={s.articleLink}> 23 отзыва </NavLink>
                                       
                                    </div>
                                    <p className={s.articlePrice}>2 200 ₽</p>
                                    <button className={s.articleBtn} >Показать&nbsp;телефон 
                                        <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                                    </button>
                                    <div className={s.articleAuthor}>
                                        <div className={s.authorImg}>
                                            <img src="" alt=""/>
                                        </div>
                                        <div className={s.authorCont}>
                                            <p className={s.authorName}>Кирилл</p>
                                            <p className={s.authorAbout}>Продает товары с августа 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={s.mainContainer}>
                    <h3 className={s.mainTitle}>
                        Описание товара
                    </h3>
                    <div className={s.mainContent}>
                        <p className={s.mainText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                
                    </div>
                    
                </div>
        </>
     );
}
 
export default Description;