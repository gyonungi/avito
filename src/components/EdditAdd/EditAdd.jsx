import s from "./EditAdd.module.css"

const EditAdd = () => {
    return ( 
    <>
       <div className={s.containerBg}>
            <div className={s.modalBlock}>
                <div className={s.modalContent}>
                    <h3 className={s.modalTitle}>Редактировать объявление</h3>
                    <div className={s.modalBtnClose}>
                        <div className={s.modalBtnCloseLine}></div>
                    </div>
                    <form className={s.modalFormNewArt} id="formNewArt" action="#">
                        <div className={s.FormNewArtBlock}>
                            <label for="name">Название</label>
                            <input className={s.formNewArtInput} type="text" name="name" id="formName" placeholder="Введите название" value="Ракетка для большого тенниса Triumph Pro STС Б/У"/>
                        </div>
                        <div className={s.FormNewArtBlock}>
                            <label for="text">Описание</label>                            
                            <textarea className={s.formNewArtArea} name="text" id="formArea" cols="auto" rows="10" placeholder="Введите описание">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                        </div>
                        <div className={s.FormNewArtBlock}>
                            <p className={s.formNewArtP}>Фотографии товара<span>не более 5 фотографий</span></p>
                            <div className={s.formNewArtBarImg}>
                                <div className={s.formNewArtImg}>
                                    <img src="" alt=""/>
                                    <div className={s.formNewArtImgCover}></div>                                    
                                </div>
                            
                            </div>
                        </div>
                        <div className={s.FormNewArtBlock + " " + s.blockPrice}>
                            <label for="price">Цена</label>
                            <input className={s.formNewArtInputPrice} type="text" name="price" id="formName" value="2 200"/>
                            <div className={s.formNewArtInputPriceCover}></div>
                        </div> 
                       
                        <button className={s.formNewArtBtnPub} id="btnPublish">Сохранить</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </> );
}
 
export default EditAdd;<>
</>