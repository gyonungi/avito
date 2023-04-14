import s from "./Reviews.module.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  AddReviewId,
  getAdsCommentById,
} from "../../asyncAction/review";
import { useParams } from "react-router-dom";
const Reviews = ({id,cbs}) => {
  const [comments, setComments] = useState("");

  const dispatch = useDispatch();
  const params = useParams();

  const token = document.cookie.split("=")[1];
  const { refresh_token } = JSON.parse(token);
  useEffect(() => {
    getAdsCommentById(id, (cb) => {
      setComments(cb);
    });
  }, []);
  function UserReviews(e) {
    e.preventDefault();
    let dto = {
      text,
    };
    dispatch(AddReviewId(Number(id), dto, refresh_token));
  }
  const refreshPage = ()=>{
    window.location.reload();
 }

  const [text, setUserReview] = useState("");
  return (
    <>
      <div className={s.containerBg}>
        <div className={s.modalBlock}>
          <div className={s.modalContent}>
            <h3 className={s.modalTitle}>Отзывы о товаре</h3>
            <div className={s.modalBtnClose} onClick={()=> cbs()}>
              <div className={s.modalBtnCloseLine}></div>
            </div>
            <div className={s.modalScroll}>
              <form
                onSubmit={(e) => UserReviews(e)}
                className={s.modalFormNewArt}
                action="#"
              >
                <div className={s.formNewArtBlock}>
                  <label for="text">Добавить отзыв</label>
                  <input
                    onChange={(e) => setUserReview(e.target.value)}
                    className={s.formNewArtArea}
                    name="text"
                    id="text"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  />
                </div>
                <button onClick={refreshPage} className={s.formNewArtBtnPub} id="btnPublish">
                  Опубликовать
                </button>
              </form>
              {comments.length &&
                comments.map((item) => (
                  <div className={s.modalReviews}>
                    <div className={s.reviewsReview}>
                      <div className={s.reviewItem}>
                        <div className={s.reviewLeft}>
                          <div className={s.reviewImg}>
                            <img
                              src={`http://localhost:8090/${item.author?.avatar}`}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className={s.reviewRight + " " + s.fontT}>
                          <p className={s.reviewName}>
                            {item.author?.name}
                            <span>14 августа</span>
                          </p>
                          <h5 className={s.reviewTitle + " " + s.fontT}>
                            Комментарий
                          </h5>
                          <p className={s.fontT}> {item.text} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
