

const initialState = {
  error: null,
  message: "",
  access_token: "",
  refresh_token: "",
  token_type: "",
  isAuth: false,
};

export const authReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case "REGISTRATION_ERROR":
      return {
        ...state,
        error: actions.payload,
      };
    case "USER_MESSAGE":
      return {
        ...state,
        message: actions.payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isAuth:false,
        error: actions.payload,
      };
    case "LOGIN_SUCKESS":
      return {
        ...state,
        access_token: actions.payload,
        refresh_token: actions.payload,
        token_type: actions.payload,
        isAuth:true,
        error:null,
      };
      case "AUTH_SUCCESS":
      return{
        ...state,
        isAuth:true,
      }
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

export const AuthSuccess = (payload) => ({
  type: "AUTH_SUCCESS",
  payload,
});

export const AuthError = (payload) => ({
  type: "AUTH_ERROR",
  payload,
});

export const LoginSuckess = (payload) => ({
  type: "LOGIN_SUCKESS",
  payload,
});

export const LoginError = (payload) => ({
  type: "LOGIN_ERROR",
  payload,
});

export const RegistrationError = (payload) => ({
  type: "REGISTRATION_ERROR",
  payload,
});

export const UserMessage = (payload) => ({
  type: "USER_MESSAGE",
  payload,
});
