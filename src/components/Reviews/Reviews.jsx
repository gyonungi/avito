import s from "./Reviews.module.css"
const Reviews = () => {
    return ( 
    <>
      <div className={s.containerBg}>
            <div className={s.modalBlock}>
                <div className={s.modalContent}>
                    <h3 className={s.modalTitle}>Отзывы о товаре</h3>
                    <div className={s.modalBtnClose}>
                        <div className={s.modalBtnCloseLine}></div>
                    </div>
                    <div className={s.modalScroll}>
                        <form className={s.modalFormNewArt} id="formNewArt" action="#">
                            <div className={s.formNewArtBlock}>
                                <label for="text">Добавить отзыв</label>
                                <textarea className={s.formNewArtArea} name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></textarea>
                            </div>
                            <button className={s.formNewArtBtnPub} id="btnPublish">Опубликовать</button>
                        </form>
                        
                        <div className={s.modalReviews}>

                            <div className={s.reviewsReview}>
                                <div className={s.reviewItem}>
                                    <div className={s.reviewLeft}>
                                        <div className={s.reviewImg}>
                                            <img src="" alt=""/>
                                        </div>
                                    </div>
                                    <div className={s.reviewRight + " " + s.fontT}>
                                        <p className={s.reviewName}>Олег <span>14 августа</span></p>
                                        <h5 className={s.reviewTitle + " " + s.fontT}>Комментарий</h5>
                                        <p className={s.fontT }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}
 
export default Reviews;