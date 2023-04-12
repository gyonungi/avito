const initialState = {
  review: [],
  error: null,
  modalRevIsOpen:false,
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
      case "OPEN_REVMODAL":
        return {
           ...state,
           modalRevIsOpen:true,
         }
         case "CLOSE_REVMODAL":
          return {
             ...state,
             modalRevIsOpen:false,
           }
    default:
      return state;
  }
};
export const openRevModal = () => ({
  type: "OPEN_REVMODAL"
})
export const closeRevModal = () => ({
  type: "CLOSE_REVMODAL"
})
export const getReview = (payload) => ({
  type: "GET_REVIEW",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});
