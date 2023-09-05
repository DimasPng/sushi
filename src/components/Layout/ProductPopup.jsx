import styles from "./ProductPopup.module.css";
import React, { useMemo, memo, useContext } from "react";
import { DispatchContext } from "../../App";
import { ORDER } from "../../reducer";

const sum = function (amount, price) {
  console.log("render sum in product popup");
  return parseFloat((amount * price).toFixed(2));
};

const ProductPopup = memo(({ title, description, price, amount }) => {
  const { state, dispatch } = useContext(DispatchContext);
  const totalSum = useMemo(() => sum(amount, price), [amount, price]);

  const handleDeleteProduct = () => {
    const newOrder = state.order.filter((item) => item.title !== title);
    dispatch({ type: ORDER, payload: newOrder });
  };
  const updateItemQuantity = (quantity) => {
    const updateCard = state.order.map((item) => {
      if (item.title === title) {
        return { ...item, amount: quantity };
      }
      return item;
    });

    dispatch({ type: ORDER, payload: updateCard });
  };

  return (
    <div className={styles["product-popup"]}>
      <div className={styles["product-popup__wrapper"]}>
        <div className={styles["product-popup__body"]}>
          <h2 className={styles["product-popup__title"]}>{title}</h2>
          <p className={styles["product-popup__description"]}>{description}</p>
          <p className={styles["product-popup__price"]}>$ {price}</p>
        </div>
        <div className={styles["product-popup__quantity"]}>
          <p className={styles["product-popup__info"]}>
            Количество: {amount}
            <span
              className={styles["product-popup__more"]}
              onClick={() => updateItemQuantity(amount + 1)}
            >
              +
            </span>
            {amount > 1 && (
              <span
                className={styles["product-popup__less"]}
                onClick={() => updateItemQuantity(amount - 1)}
              >
                -
              </span>
            )}
            <br />
            Сумма: {totalSum} $
          </p>
          <button
            onClick={handleDeleteProduct}
            className={styles["product-popup__button"]}
          >
            Убрать из корзины
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
});

export default ProductPopup;
