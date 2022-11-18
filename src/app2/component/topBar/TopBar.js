import styles from './TopBar.module.css';
import Card from "../../common component/Card";
import Login from "./login/Login";
import Logo from "./logo/Logo";

export default function TopBar() {

  return (
    <>
      <Card>
        <div className={`${styles.topbar} cardwrap`}>
          <Logo/>
          <Login/>
        </div>
      </Card>
    </>
  );
}