

const initialState = {
  addList: [],
};

export const addsReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_ADDS":
      return {
        ...state,
        addList: actions.payload,
      };
    default:
      return state;
  }
};

export const getAdd = (payload) => ({
    type: "GET_ADDS",
    payload
})
