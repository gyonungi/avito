
import { AuthError, LoginSuckess,  } from "../store/reducers/auth";

export const registration = (dto) => {
return async (dispatch) => {
  const res = await fetch(`http://localhost:8090/auth/register`, {
    method: "POST",
    body: JSON.stringify(dto),
    headers: { "content-type": "application/json" },
  });
  const data = res.json();

  data.catch((err) => {
    if (err) console.log(err);
    dispatch(AuthError(err));
  });
};
};

export const Login = (dto, cb) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dto),
    });
    const data = await res.json();
    if (data.access_token) {
      dispatch(LoginSuckess(data));
      cb(data);
    } else {
      dispatch(AuthError(data));
    }
  };
};

export const refreshToken = (token) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/auth/login`, {
      method: "PUT",
      body: JSON.stringify({
        access_token: token.access_token,
        refresh_token: token.refresh_token,
        token_type: "Bearer",
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = res.json();
    data
      .then((data) => {
        dispatch(LoginSuckess(data));
      })
      .catch((err) => {
        dispatch(AuthError(err));
      });
  };
};