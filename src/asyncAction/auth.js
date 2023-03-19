
import { LoginError, LoginSuckess, RegistrationError, UserMessage } from "../store/reducers/auth";

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
        if(data == "Incorrect password"){
            
            console.log(data.detail);
           return dispath(LoginError(data.detail))
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
