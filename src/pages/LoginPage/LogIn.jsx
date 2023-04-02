import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { Login } from "../../asyncAction/auth";
import {
  LogDiv,
  LogBox,
  LogForm,
  Loginput,
  LogButton,
  Regbutton,
  Wrapper,
  ModalBlock,
} from "./LogIn.styled.js";

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
      navigate("/")
      })
      
    );
  }
  function handleClick() {
    navigate("/auth/reg")
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper >
    <LogDiv>
    <ModalBlock>
      <LogBox>
        <div></div>
        <LogForm onSubmit={(e) => log(e)}>
          <Loginput
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <Loginput
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />

          <LogButton>Войти</LogButton>

          <Regbutton onClick={handleClick}>Зарегистрироваться</Regbutton>
        </LogForm>
      </LogBox>
      </ModalBlock>
    </LogDiv>
    </Wrapper>
  );
};

export default LogIn;
