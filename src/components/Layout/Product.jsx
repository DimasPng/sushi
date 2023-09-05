import styles from "./Product.module.css";
import React, { useContext, useState } from "react";
import { DispatchContext } from "../../App";
import { ORDER } from "../../reducer";

const Product = ({ title, description, price }) => {
  const { state, dispatch } = useContext(DispatchContext);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleOrder = () => {
    const isExisting = state.order.find((item) => item.title === title);

    if (isExisting) {
      const updateOrder = state.order.map((item) =>
        item.title === title
          ? { ...item, amount: item.amount + Number(input) }
          : item,
      );
      dispatch({ type: ORDER, payload: updateOrder });
    } else {
      dispatch({
        type: ORDER,
        payload: [
          ...state.order,
          { title, description, price, amount: Number(input) },
        ],
      });
    }
    setInput("");
  };

  return (
    <div className={styles.product}>
      <div className={styles["product__wrapper"]}>
        <div className={styles["product__text"]}>
          <h2 className={styles["product__title"]}>{title}</h2>
          <p className={styles["product__description"]}>{description}</p>
          <p className={styles["product__price"]}>$ {price}</p>
        </div>
        <div className={styles["product__elements"]}>
          <label className={styles["product__label"]}>
            <span className={styles["product__label-text"]}>Amount</span>
            <input
              value={input}
              onChange={handleInput}
              className={styles["product__input"]}
              type="text"
            />
          </label>
          <button className={styles["product__button"]} onClick={handleOrder}>
            + Add
          </button>
        </div>
      </div>
      <hr className={styles["product-divider"]} />
    </div>
  );
};

export default Product;
