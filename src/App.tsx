import React, { FC, useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";
import "./App.css";
import Nav from "react-bootstrap/Nav";
import { Button, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE, MAIN_ROUTE, REG_ROUTE, AFTER_REG_ROUTE} from "./utils/consts";

const App = observer(() => {
  const history = useHistory();
  console.log("history0", history);

  return (
    // Фон
<></>
  );
});
export default App; // observer для отслеживания статуса
