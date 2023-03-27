

const initialState = {
  addList: [],
  message:"",
};

export const addsReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_ADDS":
      return {
        ...state,
        addList: actions.payload,
      };
      case "CREATE_ADDS_ERROR":
       return {
          ...state,
          message:"НЕудалось создать,попробуй заново",
        }
    default:
      return state;
  }
};

export const getAdd = (payload) => ({
    type: "GET_ADDS",
    payload
})

export const createAddError = (payload) => ({
  type: "CREATE_ADDS_ERROR",
  payload
})
