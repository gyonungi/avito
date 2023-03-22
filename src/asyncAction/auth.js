
import { AuthError, LoginError, LoginSuckess, RegistrationError, UserMessage } from "../store/reducers/auth";

export const registration = (userDate) => {
  return async (dispath) => {
    const res = await fetch(`http://localhost:8090/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDate),
    });
    const data = await res.json();
    data
      .then((result) => {
        if (Object.keys(result).length) {
          dispath(UserMessage("Пользователь успешно зарегестрирован"));
        }
      })
      .catch((err) => {
        if (err) {
          dispath(RegistrationError(err));
        }
      });
  };
};

export const Login = (userDate,cb) => {
  return async (dispath) => {
    const res = await fetch(`http://localhost:8090/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDate),
    });
    const data = await res.json();
        if(data.detail){
            
           return dispath(LoginError(data));
        }else {
          dispath(LoginSuckess(data))
          cb(JSON.stringify(data))
        }
    dispath(LoginSuckess(data))
        cb(JSON.stringify(data))
        
   /*  data
    .then((result) => {
        dispath(LoginSuckess(result))
        cb(result)
    })
    .catch((err) => {
        if (err) {
            dispath(LoginError(err))
        }
        
    }); */
  };
};

export const LoginToken = (userDate,cb) => {
  return async (dispath) =>{
    const res = await fetch (`http://localhost:8090/auth/login`,{
      method: "PUT",
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify(userDate),
    });
    const data = await res.json();
    data.then((res) => {
      if(res.status === 200){
     document.cookie(res.access,"token")
     cb(1)
     return dispath(AuthError(data))
     
      }
    }).catch((err) => {
      if (err) {
        dispath(LoginError(err))
    }
    });
}
}