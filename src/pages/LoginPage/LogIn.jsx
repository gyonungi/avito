import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../asyncAction/auth";
import s from "./Login.module.css";
import Logo from "../../images/LogoS.png";


const LogIn = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  function log(e) {
    e.preventDefault();
    let dto = {
      password,
      email,
    };
    dispath(
      Login(dto, (token) => {
        document.cookie = `token=${JSON.stringify(token)}; path=/;`;
        navigate("/");
      })
    );
  }
  function handleClick() {
    navigate("/auth/reg");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={s.wrapper}>
      <div className={s.LogDiv}>
        <div className={s.ModalBlock}>
          <div className={s.LogBox}>
            <div className={s.modalLogo}>
              <img src={Logo} alt="logo" />
            </div>
            <form className={s.LogForm} onSubmit={(e) => log(e)}>
              <input className={s.Loginput}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                placeholder="email"
              />
              <input className={s.Loginput}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Пароль"
              />

              <button className={s.LogButton} >Войти</button>

              <button className={s.Regbutton} onClick={handleClick}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
