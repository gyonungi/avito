import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "../../asyncAction/auth";
import {
  LogDiv,
  LogBox,
  LogForm,
  Loginput,
  LogButton,
  Regbutton,
} from "./LogIn.styled";

const LogIn = () => {
  const dispath = useDispatch();

  function log(e){
    e.preventDefault();
    let dto = {
      password,
      email,
    };
    dispath(Login(dto,(token)=>{document.cookie = `token=${token}`;
  }))
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LogDiv>
      <LogBox>
        <div></div>
        <LogForm onSubmit={(e)=> log(e)}>
          <Loginput 
          onChange={(e) => setEmail(e.target.value)}
          type="text" 
          name="email" 
          id="email" 
          placeholder="email" />
          <Loginput
          onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
          />

          <LogButton>Войти</LogButton>

          <Regbutton>Зарегистрироваться</Regbutton>
        </LogForm>
      </LogBox>
    </LogDiv>
  );
};

export default LogIn;
