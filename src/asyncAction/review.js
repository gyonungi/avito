import { getAdd } from "../store/reducers/add";
import { getReview } from "../store/reducers/review";

export const getAddReview = (page, cb) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/comments`);
    const data = res.json();
    data
      .then((result) => {
        dispatch(getReview(result));
        cb(result);
        console.log(result);
      })
      .catch((err) => {});
  };
};

export const getAdsCommentById = async (pk, cb) => {
  const res = await fetch(`http://localhost:8090/ads/${pk}/comments`);
  const data = res.json();
  data
    .then((result) => {
      cb(result);
      console.log(result);
    })
    .catch((err) => {});
};

export const getAddReviewId = (pk, cb) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/comments/${pk}`);

    const data = res.json();
    data
      .then((result) => {
        dispatch(getReview(result));
        cb(result);
        console.log(result);
      })
      .catch((err) => {});
  };
};

export const AddReviewId = (pk, dto, token) => {
  return async (dispatch) => {
    console.log(dto);
    console.log(pk);
    const res = await fetch(`http://localhost:8090/ads/${pk}/comments`, {
      method: "POST",
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data = res.json();
    data
      .then((result) => {
        dispatch(getReview(result));
      })
      .catch((err) => {});
  };
};
