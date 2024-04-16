import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, MAIN_ROUTE, REG_ROUTE } from "../utils/consts";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

const AfterRegForm = observer(() => {
  console.log("RegForm");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  return (
    <div className="app-background">
      <img
        className="smesharik"
        src="https://g.epal.gg/entry/us/static/icon_avatar.65e5ba51.png"
      ></img>
      <div className="for-dlya">
        <h1 className="dlya">
          Для завершения регистрации перейдите по ссылке из письма
        </h1>
        <h2 className="dlya2">Вы можете закрыть это окно</h2>
      </div>
    </div>
  );
});

export default AfterRegForm;
