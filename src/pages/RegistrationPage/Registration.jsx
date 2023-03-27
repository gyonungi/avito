import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registration } from "../../asyncAction/auth";
import {
  RegDiv,
  RegBox,
  RegForm,
  Reginput,
  LogButton,
} from "./Registration.styled";

const Registration = (props) => {
  const dispath = useDispatch();
  const navigate = useNavigate
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
  }

    function handleClick(){
      navigate("/auth/log")
    }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");

  return (
    <RegDiv>
      <RegBox>
        <div></div>
        <RegForm onSubmit={(e) => registr(e)}>
          <Reginput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <Reginput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <Reginput
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            name="confirm_password"
            id="confirm_password"
            placeholder="confirm password"
          />
          <Reginput
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="Name"
            id="Name"
            placeholder="Name (optional)"
          />
          <Reginput
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            name="Surname"
            id="surname"
            placeholder="Surname (optional)"
          />
          <Reginput
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            name="city"
            id="City"
            placeholder="Сity (optional)"
          />

          <LogButton onClick={handleClick}>Зарегистрироваться</LogButton>
        </RegForm>
      </RegBox>
    </RegDiv>
  );
};

export default Registration;
