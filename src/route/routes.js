import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REG_ROUTE,
  AFTER_REG_ROUTE,
} from "../utils/consts";
import LoginForm from "../components/LoginForm";
import RegForm from "../components/RegForm";
import MainForm from "../components/MainForm";
import AfterRegForm from "../components/AfterRegForm";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: LoginForm,
  },
  {
    path: REG_ROUTE,
    Component: RegForm,
  },
  {
    path: MAIN_ROUTE,
    Component: MainForm,
  },
  {
    path: AFTER_REG_ROUTE,
    Component: AfterRegForm,
  },
];
