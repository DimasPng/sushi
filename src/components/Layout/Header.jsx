import styles from "./Header.module.css";
import { useContext } from "react";
import { DispatchContext } from "../../App";
import { ISCARTOPEN } from "../../reducer";

const Header = () => {
  const { state, dispatch } = useContext(DispatchContext);
  const sumOrders = () => {
    if (state.order.length === 0) return 0;
    return state.order.reduce((acc, item) => (acc += item.amount), 0);
  };

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles["header__content"]} container`}>
        <div className={styles["header__shop-name"]}>React Meals</div>
        <button
          onClick={() =>
            dispatch({ type: ISCARTOPEN, payload: !state.isCartOpen })
          }
          className={styles["header__button"]}
        >
          Your Cart {sumOrders()}
        </button>
      </div>
    </div>
  );
};
//work
