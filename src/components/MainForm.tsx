import React, { FC, useContext, useState } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE } from "../utils/consts";
import { NavLink, useLocation, useHistory } from "react-router-dom";

const MainForm = observer(() => {
  const { store } = useContext(Context);
  console.log("этап MainForm");
  return (
    <div className="app-background">
      <div className="for-main_container">
      <div className="main_container">
        <div className="games1">
          <h1 className="top-games">Популярные игры</h1>
          <div className="img-games">
            <img
              className="img_main"
              src="https://opis-cdn.tinkoffjournal.ru/mercury/dota2-in-2023-in.intgihktgvjf..jpg"
            ></img>
            <img
              className="img_main"
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/d/db/Counter-strike_2.jpg/640px-Counter-strike_2.jpg"
            ></img>
            <img
              className="img_main"
              src="https://strikeball-rus.ru/wp-content/uploads/2020/04/battlestate-games-escape-from-tarkov-eft-russia-2028-dikii-s.jpg"
            ></img>
            <img
              className="img_main"
              src="https://cdn.akamai.steamstatic.com/steam/apps/1966720/capsule_616x353.jpg?t=1700231592"
            ></img>
          </div>
          <div className="nickname-players">
            <h2 className="img_main_nickname">Dota 2</h2>
            <h2 className="img_main_nickname">Counter-strike 2</h2>
            <h2 className="img_main_nickname">Escape from Tarkov</h2>
            <h2 className="img_main_nickname">Lethal company</h2>
          </div>
        </div>

        <div className="players1">
          <h1 className="top-teammates">Топ-тиммейты</h1>
          <div className="img-players">
            <img
              className="img_main"
              src="https://global-oss.epal.gg/data/cover/2319680/17043159917954935.jpeg"
            ></img>
            <img
              className="img_main"
              src="https://global-oss.epal.gg/data/cover/1417103/17115550013056719.jpeg"
            ></img>
            <img
              className="img_main"
              src="https://global-oss.epal.gg/data/cover/2302641/17098536637723697.jpeg"
            ></img>
            <img
              className="img_main"
              src="https://global-oss.epal.gg/data/cover/2278183/17078685234682189.jpeg"
            ></img>
          </div>
          <div className="nickname-players">
            <h2 className="img_main_nickname">Whiti</h2>
            <h2 className="img_main_nickname">Paola</h2>
            <h2 className="img_main_nickname">Ahshah ♡</h2>
            <h2 className="img_main_nickname">Yuno</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

export default MainForm;
