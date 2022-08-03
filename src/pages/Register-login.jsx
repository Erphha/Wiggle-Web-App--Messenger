import { AccountBox } from "../components/register-Login/index";
import classes from "./RegisterLogin.module.css";

const RegisterLogin = () => {
  return (
    <div className={classes.container}>
      <AccountBox />
    </div>
  );
};

export default RegisterLogin;
