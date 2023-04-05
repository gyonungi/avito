const initialState = {
  review: [],
  error: null,
};

export const reviewReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_REVIEW":
      return {
        ...state,
        review: actions.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export const getReview = (payload) => ({
  type: "GET_REVIEW",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});
