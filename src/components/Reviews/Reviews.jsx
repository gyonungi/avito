import s from "./Reviews.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAddReview, getAddReviewId } from "../../asyncAction/review";
import { useParams } from "react-router-dom";
const Reviews = () => {
  const [review, setReview] = useState({});
  const dispatch = useDispatch();
  const params = useParams();

  const token = document.cookie.split("=")[1];
  const { refresh_token } = JSON.parse(token);
  console.log(review);
  useEffect(() => {
    dispatch(getAddReview(refresh_token));
    dispatch(
      getAddReviewId(Number(params.id), (cb) => {
        setReview({ ...cb })  
      })
    );
  }, []);
  function userReviews(e) {
    e.preventdefault();
    let dto = {
      userReview,
    };
  }
  const [userReview, setUserReview] = useState("");
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
              <form
                onSubmit={(e) => userReviews(e)}
                className={s.modalFormNewArt}
                id="formNewArt"
                action="#"
              >
                <div className={s.formNewArtBlock}>
                  <label for="text">Добавить отзыв</label>
                  <input
                    onChange={(e) => setUserReview}
                    className={s.formNewArtArea}
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  />
                </div>
                <button className={s.formNewArtBtnPub} id="btnPublish">
                  Опубликовать
                </button>
              </form>
              {review && (
                <div className={s.modalReviews}>
                  <div className={s.reviewsReview}>
                    <div className={s.reviewItem}>
                      <div className={s.reviewLeft}>
                        <div className={s.reviewImg}>
                          <img src={`http://localhost:8090/${review.author?.avatar}`} alt="" />
                        </div>
                      </div>
                      <div className={s.reviewRight + " " + s.fontT}>
                        <p className={s.reviewName}>
                          {review.author?.name} 
                          <span>14 августа</span>
                        </p>
                        <h5 className={s.reviewTitle + " " + s.fontT}>
                          Комментарий
                        </h5>
                        <p className={s.fontT}> {review.text} </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
