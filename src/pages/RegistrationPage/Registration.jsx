import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../../asyncAction/auth";
import Logo from "../../images/LogoS.png";
import s from "./Reg.module.css";

const Registration = (props) => {
  const dispath = useDispatch();
  const navigate = useNavigate;
  function registr(e) {
    e.preventDefault();
    let dto = {
      name,
      email,
      password,
      confirmPassword,
      surname,
      city,
      role: "user",
    };

    dispath(registration(dto));
    /*  navigate("/auth/log"); */
    window.location.href = "/auth/log";
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className={s.wrapper}>
      <div className={s.RegDiv}>
        <div className={s.ModalBlock}>
          <div className={s.RegBox}>
            <div className="modal__logo">
              <img src={Logo} alt="logo" />
            </div>
            <form className={s.RegForm} onSubmit={(e) => registr(e)}>
              <input
                className={s.Reginput}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                name="email"
                id="email"
                placeholder="email"
              />
              <input
                className={s.Reginput}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <input
                className={s.Reginput}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="confirm password"
              />
              <input
                className={s.Reginput}
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="Name"
                id="Name"
                placeholder="Name (optional)"
              />
              <input
                className={s.Reginput}
                onChange={(e) => setSurname(e.target.value)}
                value={surname}
                type="text"
                name="Surname"
                id="surname"
                placeholder="Surname (optional)"
              />
              <input
                className={s.Reginput}
                onChange={(e) => setCity(e.target.value)}
                value={city}
                type="text"
                name="city"
                id="City"
                placeholder="Сity (optional)"
              />

              <button className={s.LogButton}>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
