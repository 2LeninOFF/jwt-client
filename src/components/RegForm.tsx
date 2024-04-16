import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REG_ROUTE,
  AFTER_REG_ROUTE,
} from "../utils/consts";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

const RegForm = observer(() => {
  const history = useHistory();
  console.log("RegForm");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  return (
    <div className="app-background">
      <div className="for-smesharik">
        <img
          className="smesharik"
          src="https://g.epal.gg/entry/us/static/icon_avatar.65e5ba51.png"
        ></img>
      </div>
      <div className="for-dobro">
        <h1 className="prisoed">Присоединяйся!</h1>
        <div className="inputs">
          <div className="input1">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="input2">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
            />
          </div>
        
        <button
          id="button-reg2"
          onClick={() => {
            store.registration(email, password);
            history.push(AFTER_REG_ROUTE);
          }}
        >
          Зарегистрироваться
        </button>
        </div>
        <h1>
          {store.isAuth
            ? `Письмо для активации аккаунта отправлено на почту ${store.user.email}. Пожалуйста, перейдите по ссылке в письме, чтобы завершить регистрацию`
            : ""}
        </h1>
      </div>
    </div>
  );
});

export default RegForm;
