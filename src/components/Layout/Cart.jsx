import styles from "./Cart.module.css";
import { useContext } from "react";
import { DispatchContext } from "../../App";
import { ISCARTOPEN } from "../../reducer";

const Cart = ({ children, totalSum }) => {
  const { state, dispatch } = useContext(DispatchContext);

  if (!state.isCartOpen) {
    return null;
  }

  return (
    <div
      className={styles["cart-overlay"]}
      onClick={() => dispatch({ type: ISCARTOPEN, payload: !state.isCartOpen })}
    >
      <div
        className={styles["cart-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles["cart__close-button"]}
          onClick={() =>
            dispatch({ type: ISCARTOPEN, payload: !state.isCartOpen })
          }
        >
          ✖
        </button>
        {children}
        {Array.isArray(children) && (
          <div className={styles["cart-total"]}>
            <p className={styles["cart-sum"]}>Итого: {totalSum} $</p>
            <button className={styles["cart-button"]}>Заказать</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
