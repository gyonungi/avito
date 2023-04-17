const initialState = {
  review: [],
  error: null,
  modalRevIsOpen: false,
  modalbackground: false,
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
        modalRevIsOpen: true,
      };
    case "CLOSE_REVMODAL":
      return {
        ...state,
        modalRevIsOpen: false,
      };
    case "OPEN_BACKMODAL":
      return {
        ...state,
        modalbackground: true,
      };
    case "SET_BACKMODAL":
      return {
        ...state,
        modalbackground: false,
      };
    default:
      return state;
  }
};
export const openModals = () => ({
  type: "OPEN_BACKMODAL",
});
export const setModal = () => ({
  type: "SET_BACKMODAL",
});
export const openRevModal = () => ({
  type: "OPEN_REVMODAL",
});
export const closeRevModal = () => ({
  type: "CLOSE_REVMODAL",
});
export const getReview = (payload) => ({
  type: "GET_REVIEW",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});
