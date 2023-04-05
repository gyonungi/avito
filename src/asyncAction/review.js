import { getReview } from "../store/reducers/review";

export const getAddReview = (cb) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    data
      .then((result) => {
        dispatch(getReview(result));
        cb(result);
      })
      .catch((err) => {});
  };
};

export const getAddReviewId = (pk,cb) => {

  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/comments/${pk}`)
    
    const data = res.json();
    data
      .then((result) => {
        dispatch(getReview(result));
        cb(result)
      })
      .catch((err) => {});
  };
};
