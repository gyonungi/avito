import { AuthError, LoginSuckess } from "../store/reducers/auth";
import { errorPassword, getUser, passwordSuccess, setError } from "../store/reducers/user";

export const getUsers = (token,cb) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:8090/user`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = res.json();
    data
      .then((result) => {
        dispatch(getUser(result));
        cb(result)
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};

export const editUser = (dto, token) => {
  return async (dispatch) => {

    const res = await fetch(`http://localhost:8090/user`, {
      method: "PATCH",
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = res.json();

    data
      .then((data) => {
        dispatch(getUser(data));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};

export const SetUserAvatar = (file, token) => {
  return async (dispatch) => {
    const body = new FormData();

    body.append("file", file);

    const res = await fetch(`http://localhost:8090/user/avatar`, {
      method: "POST",
      body,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = res.json();

    data
      .then((data) => {
        dispatch(getUser(data));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};

export const NewPassword = (dto,token) =>{
  return async(dispatch)=>{
    console.log(dto);
    const  res = await fetch(`http://localhost:8090/user/password`,{
      method: "PUT",
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    const data = res.json();
    data
      .then((data) => {
        dispatch(passwordSuccess(data));
      })
      .catch((err) => {
        dispatch(errorPassword(err));
      });
  }
}