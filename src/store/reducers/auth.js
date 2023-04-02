

const initialState = {
  error: null,
  token: {},
  isAuth: false,
};

export const authReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "LOGIN_SUCKESS":
      return {
        ...state,
       token: actions.payload,
        isAuth:true,
        error:null,
      };
      case "AUTH_ERROR":
        return{
          ...state,
          isAuth:false,
          message:"Пожалуста авторизируйтесь",
        }
    default:
      return state;
  }
};


export const AuthError = (payload) => ({
  type: "AUTH_ERROR",
  payload,
});

export const LoginSuckess = (payload) => ({
  type: "LOGIN_SUCKESS",
  payload,
});

