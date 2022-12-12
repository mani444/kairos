import image from "../../assets/logo.svg";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import styles from "./Menu.module.css";

// import {
//   faUserFriends,
//   faRightFromBracket,
//   faCircleQuestion,
// } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  // let classes = classNames("btnContainer btn"); // => 'foo bar'

  return (
    <div className={styles.MenuContainer}>
      <div className={styles.Menu}>
        <div>
          <div>
            <img src={image} height={80} width={100} alt="Hi" />
          </div>
          <div className={styles.Nav}>
            <Button
              classes="btnContainer"
              icon={null}
              text=" Sales Dashboard"
            />
            <Button
              classes="btnContainer"
              icon={null}
              text=" Delivery Planning"
            />
          </div>
        </div>

        <div className={styles.MenuRight}>
          <div className={styles.Gap}>
            <Button classes="btnContainer" icon={null} text=" Admin Action" />

            <Button classes="btnContainer btn" icon={null} text=" kairo" />
            <Button classes="btnContainer" icon={null} text=" Logout" />
          </div>
          <div>
            <p>Kairos Business Solutions LTD. Osborne Park</p>
          </div>
        </div>
      </div>
      <div className={styles.Menu2}></div>
    </div>
  );
};

export default Menu;
