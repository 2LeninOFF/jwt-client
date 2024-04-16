import React, { useContext, useState, useEffect } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { REG_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import "../App.css";

const NavBar = observer(() => {
  console.log("NavBar");
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const history = useHistory();
  return (
    <div className="header1">
      <div className="menu-logo">
        <a id="a_logo" href="/">
          <img
            id="logo"
            src="https://sun9-13.userapi.com/impg/KqHymWOrbJa5pXlnmTYgqj7i5W4tycBajKOkHg/8arhKJyk4eY.jpg?size=133x54&quality=95&sign=52f7f413b1f4705a4d0ad81feb34b911&type=album"
          ></img>
        </a>
      </div>
      {/* Хедер */}
      <div className="menu-left">
        <div className="div-a-header">
          <a href="/play" className="a-header">
            Играть
          </a>
        </div>
        <div className="div-a-header">
          <a href="/square" className="a-header">
            Команда
          </a>
        </div>
        <div className="div-a-header">
          <a href="/app" className="a-header">
            Приложение
          </a>
        </div>
      </div>
      <div className="menu-right">
        {store.isAuth ? (
          <div>
            <h3 className="user-login">{store.user.email}</h3>
            <button id="button-logout" onClick={() => store.logout()}>Выйти</button>
          </div>
        ) : (
          <>
          <div className="menu-right-button">
            <button id="button-reg" onClick={() => history.push(REG_ROUTE)}>
              Регистрация
            </button>
            </div>
            <div className="menu-right-button">
            <button id="button-log" onClick={() => history.push(LOGIN_ROUTE)}>
              Войти
            </button>
          </div>
          </>
        )}
      </div>
    </div>
  );
});

export default NavBar;
