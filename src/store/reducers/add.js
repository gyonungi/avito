

const initialState = {
  addList: [],
  message:"",
  modalIsOpen:false,
};

export const addsReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_ADDS":
      return {
        ...state,
        addList: actions.payload,
      };
      case "OPEN_MODAL":
        return {
           ...state,
          modalIsOpen:true,
         }
      case "CLOSE_MODAL":
        return {
           ...state,
          modalIsOpen:false,
         }
      case "CREATE_ADDS_ERROR":
       return {
          ...state,
          message:"НЕудалось создать,попробуй заново",
        }
    default:
      return state;
  }
};

export const openModal = () => ({
  type: "OPEN_MODAL"
})

export const closeModal = () => ({
  type: "CLOSE_MODAL"
})

export const getAdd = (payload) => ({
    type: "GET_ADDS",
    payload
})

export const createAddError = (payload) => ({
  type: "CREATE_ADDS_ERROR",
  payload
})
