import styles from "./ProductPopup.module.css";

const sum = function (amount, price) {
  return amount * price;
};

const ProductPopup = ({
  title,
  description,
  price,
  amount,
  order,
  setOrder,
}) => {
  const totalSum = sum(amount, price);

  const handleDeleteProduct = () => {
    const newOrder = order.filter((item) => item.title !== title);
    setOrder(newOrder);
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
};

export default ProductPopup;
